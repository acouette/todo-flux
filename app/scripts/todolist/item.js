/**
 * Created by acouette on 5/31/15.
 */
import React from 'react';
import TodoActions from '../todo-actions';


class TodoListItem extends React.Component {

    constructor() {
        super();
    }

    deleteMe = () => {
        TodoActions.delete(this.props.item.id);
    };

    completeMe = () => {
        TodoActions.complete(this.props.item.id);
    };

    render() {
        return <li key={this.props.item.id} className='todolist-item'>
            <input type="checkbox" onChange={this.completeMe} checked={this.props.item.completed}></input>
            <span className={this.props.item.completed?'todolist-item-completed':''}>{this.props.item.text}</span>
            <button onClick={this.deleteMe}></button>
        </li>
    }

}


export default TodoListItem;