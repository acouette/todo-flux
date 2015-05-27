/**
 * Created by acouette on 5/25/15.
 */
import React from 'react';
import TodoInput from './todo-input';
import TodoList from './todo-list';
import TodoStore from './store/todo-store';

class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        //this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
        this.state = this.getTodoState();
        TodoStore.addChangeListener(this.handleChangeFromStore.bind(this))
    }

    handleChangeFromStore() {
        this.setState(this.getTodoState());
    }

    getTodoState() {
        return {
            allTodos: TodoStore.getAll()
        };
    }

    render() {
        return <div className="app-container">
            <TodoInput></TodoInput>
            <TodoList items={this.state.allTodos}></TodoList>
        </div>
    }

}

export default TodoApp;