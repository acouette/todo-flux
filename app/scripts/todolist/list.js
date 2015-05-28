/**
 * Created by acouette on 5/25/15.
 */
import React from 'react'
import TodoActions from '../todo-actions';

class TodoListList extends React.Component {

    constructor() {
        super();
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(id) {
        TodoActions.delete(id);
    }


    render() {
        var createItem = (item, index)  => {
            var deleteMe = ()=>this.onDelete(item.id);
            return <li key={item.id}>
                <input type="checkbox"></input>
                <span className="list-item-text">{item.text}</span>
                <button onClick={deleteMe}>delete</button>
            </li>;
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