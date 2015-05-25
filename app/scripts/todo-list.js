/**
 * Created by acouette on 5/25/15.
 */

import React from 'react'

class TodoList extends React.Component{
    render() {
        var createItem = function(item, index) {
            return <li key={item.id}>{item.text}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
}

export default TodoList;