/**
 * Created by ace on 5/27/15.
 */
import AppDispatcher from '../dispatcher/todo-dispatcher';

class TodoActions{

    create(text){
        AppDispatcher.dispatch({
            actionType: 'TODO_CREATE',
            text: text
        })
    }

    delete(id){
        AppDispatcher.dispatch({
            actionType: 'TODO_DELETE',
            id: id
        })
    }
}

var myTodoActions = new TodoActions();

export default myTodoActions;