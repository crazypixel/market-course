import {combineReducers} from 'redux';

// reducers
import todo from './todo.reducer';
import session from './session.reducer';

export default combineReducers({
	todo,
	session
});
