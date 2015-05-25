import React from 'react';

class TodoInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var todoText = React.findDOMNode(this.refs.todoText).value.trim();
        if (!todoText) {
            return;
        }
        this.props.onTodoSubmit({id: parseInt(Math.random() * 1000, 10), text: todoText});
        React.findDOMNode(this.refs.todoText).value = '';
        return;
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input id="todoText" ref="todoText" type="text" placeholder="Enter todo"></input>
            <input type="submit" value="Add"/>
        </form>;
    }
}

export default TodoInput;