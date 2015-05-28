/**
 * Created by ace on 5/28/15.
 */
import todoDispatcher from '../todo-dispatcher';
import Events from 'events';

var CHANGE_EVENT = 'change';

class TodoHistoryStore extends Events.EventEmitter {

    constructor() {
        super();
        this.history = {
            created: 0,
            deleted: 0
        }
        todoDispatcher.register(this.handleAction.bind(this));
    }

    handleAction(action) {

        switch (action.actionType) {
            case 'TODO_CREATE':
                this.history.created++;
                break;
            case 'TODO_DELETE':
                this.history.deleted++;
                break;
            default :
                throw new Error('Unknow action type ${action.actionType}');
        }
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    getHistory() {
        return {history: this.history};
    }

}

var todoHistoryStore = new TodoHistoryStore();

export default todoHistoryStore;
