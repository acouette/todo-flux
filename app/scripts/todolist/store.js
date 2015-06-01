/**
 * Created by ace on 5/27/15.
 */
import todoDispatcher from '../todo-dispatcher';
import Events from 'events';

var CHANGE_EVENT = 'change';

class TodoListStore extends Events.EventEmitter {

    constructor() {
        super();
        this.todos = {};
        todoDispatcher.register(this.handleAction);
    }

    handleAction = (action) => {
        switch (action.actionType) {
            case 'TODO_CREATE':
                const id = new Date().getTime();
                this.todos[id] = {
                    id: id,
                    text: action.text,
                    completed: false
                };
                break;
            case 'TODO_DELETE':
                delete this.todos[action.id];
                break;
            default:
                throw new Error('Unexpected action type : ' + action.actionType);
        }

        this.emit(CHANGE_EVENT);
    };

    addChangeListener = (callback) => {
        this.on(CHANGE_EVENT, callback);
    };

    getAll = () => {
        return this.todos;
    };

}

var todoListStore = new TodoListStore()

export default todoListStore;