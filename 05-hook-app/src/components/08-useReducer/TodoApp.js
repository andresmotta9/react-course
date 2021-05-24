import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './style.css';  
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) )
    }, [todos]);

    const handleDelete = (todoId) => {
        
        const action = { 
            type: 'delete',
            payload: todoId,
        }

        dispatch(action);
    }
    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId,
        })
    }

    const hanldeAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo,
        });
    }

    return (
        <div>
            <h1>TodoApp ( {todos.length} )</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                </div>
                <div className="col-5">
                   <TodoAdd hanldeAddTodo={hanldeAddTodo}/>
                </div>
            </div>

        </div>
    )
}
