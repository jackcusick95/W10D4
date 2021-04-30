import React, { Component } from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: new Date().getTime(),
            title: '',
            body: '',
            done: false
        };

        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.receiveTodo(this.state);

        this.state = {
            id: new Date().getTime(),
            title: '',
            body: '',
            done: false
        };
    }

    updateTitle(e) {
        // debugger
        this.setState({ title: e.target.value });
      }
    
      updateBody(e) {
        // debugger
        this.setState({ body: e.target.value });
      }
    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add Todo</h1>
                <label>Title
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.updateTitle}/>
                </label>
                <label>Body
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.updateBody}/>
                </label>
                <input type="submit" value="Add Todo" />
            </form>
        )
    }


}

export default TodoForm;