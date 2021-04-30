import React from 'react';
// import { render } from 'react-dom'
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';


const ToDoList = (props) => {

    debugger
    return (
        <div>
        <h1>Todo List goes here!</h1>
            <ul>
                {
                // props.todos.map(todo => <li key={todo.id}>Title: {todo.title}</li>)
                props.todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>) 
                } 
               
            </ul>
            <TodoForm receiveTodo={props.receiveTodo} />
        </div>
    )
}
export default ToDoList; 