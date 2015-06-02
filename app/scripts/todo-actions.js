/**
 * Created by ace on 5/27/15.
 */
import todoDispatcher from './todo-dispatcher';

class TodoActions{

    create(text){
        todoDispatcher.dispatch({
            actionType: 'TODO_CREATE',
            text: text
        })
    }

    delete(id){
        todoDispatcher.dispatch({
            actionType: 'TODO_DELETE',
            id: id
        })
    }

    complete(id){
        todoDispatcher.dispatch({
            actionType: 'TODO_COMPLETE',
            id: id
        });
    }
}

var todoActions = new TodoActions();

export default todoActions;