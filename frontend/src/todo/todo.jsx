import React from 'react';

import PageHeader from '../template/pageHeader';
import TodoList from './todoList';
import TodoForm from './todoForm';

export default props => (
    <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm />
        <TodoList />
    </div>
);
