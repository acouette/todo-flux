/**
 * Created by acouette on 5/24/15.
 */

import React from 'react';
import TodoListApp from './todolist/app';
import TodoHistoryApp from './todohistory/app';


React.render(<div><TodoListApp/><TodoHistoryApp/></div>, document.getElementById('app'));
