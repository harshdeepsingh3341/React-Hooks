import {combineReducers} from "redux";
import todoReducer from '../containerComponents/Todo/Todo.reducers';

export default combineReducers({
	todo: todoReducer
})
