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
    }

    handleAdd() {
        const description = this.state.description;
        axios.post(URL, { description }).then(resp => {
            console.log('Funcionou!');
        });
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value });
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange} />
                <TodoList />
            </div>
        );
    }

}
