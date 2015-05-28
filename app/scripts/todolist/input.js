import React from 'react';
import TodoActions from '../todo-actions.js'

class TodoListInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.ENTER_KEY = 13;
    }


    handleKeyDown(e) {
        if (e.which === this.ENTER_KEY) {
            var todoText = React.findDOMNode(this.refs.todoText).value.trim();
            if (!todoText) {
                return;
            }
            TodoActions.create(todoText);
            React.findDOMNode(this.refs.todoText).value = '';
            return;
        }
    }

    render() {
        return <div className="input-container">
            <input id="todoText" ref="todoText" type="text" placeholder="What needs to be done?"
                   onKeyDown={this.handleKeyDown}></input>
        </div>;
    }
}

export default TodoListInput;