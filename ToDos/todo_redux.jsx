import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';
import { receiveTodo, receiveTodos } from './frontend/actions/todo_actions';

const Todo = () => {
    return ( 
    <div>
        <h1>Todos App TEST</h1>
    </div>
    )
}

document.addEventListener("DOMContentLoaded", function () {
    const store = configureStore();
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    const root = document.getElementById('root');

    ReactDOM.render(<Todo />, root);
});