import React, { Component } from 'react';

import axios from 'axios';

import TodoList from './todoList';
import TodoForm from './todoForm';

import PageHeader from '../template/pageHeader';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = { description: '', list: [] };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.refresh();
    }

    handleAdd() {
        const description = this.state.description;
        axios.post(URL, { description }).then(resp => this.refresh());
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value });
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description));
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description));
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh(this.state.description));
    }

    handleSearch() {
        this.refresh(this.state.description);
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : '';

        axios.get(`${URL}?sort=-createdAt${search}`).then(resp => 
            this.setState({ ...this.state, description, list: resp.data })
        );
    }

    render() {
        return (
            <div>
                <PageHeader
                    name="Tarefas"
                    small="Cadastro"
                />
                <TodoForm
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                />
                <TodoList
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove}
                />
            </div>
        );
    }

}
