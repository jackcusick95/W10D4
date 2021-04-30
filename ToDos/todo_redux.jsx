import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';
import { receiveTodo, receiveTodos, removeTodo } from './frontend/actions/todo_actions';
import Root from './frontend/components/root';
import { allTodos } from './frontend/reducers/selectors'; 

// const Todo = () => {
//     return ( 
//     <div>
//         <h1>Todos App TEST</h1>
//     </div>
//     )
// }

document.addEventListener("DOMContentLoaded", function () {
    const store = configureStore();
    window.store = store;
    window.removeTodo = removeTodo; 
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.allTodos = allTodos;
    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store} />, root);
});