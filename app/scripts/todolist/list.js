/**
 * Created by acouette on 5/25/15.
 */
import React from 'react';
import TodoActions from '../todo-actions';
import TodoListItem from './item';
import TodoListControls from './controls';

class TodoListList extends React.Component {

    constructor() {
        super();
    }

    onCheck(i) {
        console.log('you checked '+i);
    }


    render() {
        var createItem = (item)  => {
            return <TodoListItem key={item.id} item={item} onCheck={this.onCheck.bind(this)}></TodoListItem>;
        };

        var itemsArray = [];
        for (var i in this.props.items) {
            if (this.props.items.hasOwnProperty(i)) {
                itemsArray.push(this.props.items[i]);
            }
        }
        if (itemsArray.length) {
            return <div className="todolist-list-container">
                <ul>{itemsArray.map(createItem)}</ul>
                <TodoListControls></TodoListControls>
            </div>;
        }
        return <div></div>;

    }
}

export default TodoListList;