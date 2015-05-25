/**
 * Created by acouette on 5/25/15.
 */
import React from 'react';
import TodoInput from './todo-input';
import TodoList from './todo-list';

class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
        this.state = {items: [{
            id: 1,
            text: 'hello 1'
        }, {
            id: 2,
            text: 'hello 2'
        }], text: ''}
    }

    handleTodoSubmit (todo) {
        console.log('handle comment submit : '+todo);
        var todos = this.state.items;
        var newTodos = todos.concat([todo]);
        this.setState({items: newTodos});
    }

    render() {
     return <div>
            <TodoInput onTodoSubmit={this.handleTodoSubmit}></TodoInput>
            <TodoList items={this.state.items}></TodoList>
         </div>
    }

}

export default TodoApp;