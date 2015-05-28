/**
 * Created by acouette on 5/25/15.
 */
import React from 'react';
import TodoListInput from './input';
import TodoListList from './list';
import todoListStore from './store';

class TodoListApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.getTodoState();
        todoListStore.addChangeListener(this.handleChangeFromStore.bind(this))
    }

    handleChangeFromStore() {
        this.setState(this.getTodoState());
    }

    getTodoState() {
        return {
            allTodos: todoListStore.getAll()
        };
    }

    render() {
        return <div className="todolist-container">
            <TodoListInput></TodoListInput>
            <TodoListList items={this.state.allTodos}></TodoListList>
        </div>
    }

}

export default TodoListApp;