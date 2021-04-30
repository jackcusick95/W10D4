console.log("testing from items file"); 
import React from 'react'; 
import todo_list_container from './todo_list_container';


class TodoListItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        debugger
        return (
            <div>
                <li>Title: {this.props.todo.title} </li>           
                <li>Body: {this.props.todo.body} </li>           
            </div>
        ); 
    }
}

export default TodoListItem; 