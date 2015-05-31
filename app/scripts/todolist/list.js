/**
 * Created by acouette on 5/25/15.
 */
import React from 'react'
import TodoActions from '../todo-actions';
import TodoListItem from './item'

class TodoListList extends React.Component {

    constructor() {
        super();
    }



    render() {
        var createItem = (item, index)  => {
            return <TodoListItem key={index} item={item}></TodoListItem>;
        };

        var itemsArray =[];
        for( var i in this.props.items ) {
            if (this.props.items.hasOwnProperty(i)){
                itemsArray.push(this.props.items[i]);
            }
        }
        if (itemsArray.length) {
            return <div className="list-container">
                <ul>{itemsArray.map(createItem)}</ul>
            </div>;
        }
        return <div></div>;

    }
}

export default TodoListList;