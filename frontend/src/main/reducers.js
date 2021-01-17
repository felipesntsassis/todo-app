import { combineReducers } from 'redux';
import todoReducer from '../todo/tudoReducer';

const rootReducer = combineReducers({
	todo: todoReducer
});

export default rootReducer;
