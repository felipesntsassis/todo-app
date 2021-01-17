import React from 'react';
import { connect } from 'react-redux';

import IconButton from '../template/iconButton';

const TodoList =  props => {

    const renderRows = () => {
        const list = props.list || [];

        return (
            list.map(todo => {
                return (
                    <tr key={todo._id}>
                        <td className={todo.done ? 'markedAsDone' : ''}>
                            {todo.description}
                        </td>
                        <td>
                            <IconButton
                                style="success"
                                hide={todo.done}
                                icon="check"
                                onClick={() => props.handleMarkAsDone(todo)}
                            />
                            <IconButton
                                style="warning"
                                hide={!todo.done}
                                icon="undo"
                                onClick={() => props.handleMarkAsPending(todo)}
                            />
                            <IconButton
                                style="danger"
                                hide={!todo.done}
                                icon="trash-o"
                                onClick={() => props.handleRemove(todo)}
                            />
                        </td>
                    </tr>
                )
            })
        );
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
};

const mapStateToProps = state => ({list: state.todo.list});

export default connect(mapStateToProps)(TodoList);