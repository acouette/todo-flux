/**
 * Created by ace on 5/28/15.
 */
import React from 'react';
import todoHistoryStore from './store';

class TodoHistoryApp extends React.Component {

    constructor() {
        super();
        this.state = todoHistoryStore.getHistory();
        todoHistoryStore.addChangeListener(this.storeChangeListener);
    }

    storeChangeListener = () => {
        this.setState(todoHistoryStore.getHistory());
    };

    render() {
        return <div className="todohistory-container">
            <div className="todohistory-panel">
                Created : {this.state.history.created} - Deleted : {this.state.history.deleted} - Completed : {this.state.history.completed}
            </div>
        </div>
    }

}

export default TodoHistoryApp;