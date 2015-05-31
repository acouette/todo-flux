/**
 * Created by acouette on 5/31/15.
 */
import React from 'react';
import TodoActions from '../todo-actions';


class TodoListItem extends React.Component {

    constructor() {
        super();
        this.deleteMe = this.deleteMe.bind(this);
    }


    deleteMe() {
        TodoActions.delete(this.props.item.id);
    }


    render() {
        return <li key={this.props.item.id} className='clearfix'>
            <input type="checkbox"></input>
            <span className="list-item-text">{this.props.item.text}</span>
            <button onClick={this.deleteMe} className='list-item-destroy'>delete</button>
        </li>
    }

}


export default TodoListItem;