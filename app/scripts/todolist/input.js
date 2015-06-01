import React from 'react';
import TodoActions from '../todo-actions.js'

class TodoListInput extends React.Component {

    constructor(props) {
        super(props);
        this.ENTER_KEY = 13;
    }


    handleKeyDown = (e) => {
        if (e.which === this.ENTER_KEY) {
            var todoText = React.findDOMNode(this.refs.todoText).value.trim();
            if (!todoText) {
                return;
            }
            TodoActions.create(todoText);
            React.findDOMNode(this.refs.todoText).value = '';
            return;
        }
    };

    render() {
        return <div className="todolist-input-container">
            <input className="todolist-input-input" ref="todoText" type="text" placeholder="What needs to be done?"
                   onKeyDown={this.handleKeyDown}></input>
        </div>;
    }
}

export default TodoListInput;