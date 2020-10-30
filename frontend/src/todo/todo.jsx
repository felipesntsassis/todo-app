import React, { Component } from 'react';

import TodoList from './todoList';
import TodoForm from './todoForm';

import PageHeader from '../template/pageHeader';

export default class Todo extends Component {

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm />
                <TodoList />
            </div>
        );
    }

}
