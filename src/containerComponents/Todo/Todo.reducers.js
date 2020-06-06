import createReducer from '../../services/createReducer.service';
import todoState from './Todo.state.js';
import {
	ADD_TODOS,
	FETCH_TODO_FAILURE,
	FETCH_TODO_STARTED,
	FETCH_TODO_SUCCESS,
	UPDATE_TODO
} from "../../config/actionTypes";

export default createReducer(
	todoState,
	{
		[FETCH_TODO_STARTED]: (state, action) => ({
			...state,
			fetchTodosStatus: action.payload
		}),
		[FETCH_TODO_FAILURE]: (state, action) => ({
			...state,
			fetchTodosStatus: action.payload
		}),
		[FETCH_TODO_SUCCESS]: (state, action) => ({
			...state,
			fetchTodosStatus: action.payload
		}),
		[ADD_TODOS]: (state, action) => ({
			...state,
			todos: Array.isArray(action.payload) ?
				[...state.todos, ...action.payload] :
				[...state.todos, action.payload]
		}),
		[UPDATE_TODO]: (state, action) => {
			const updateTodoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
			return ({
				...state,
				todos: [
					...state.todos.slice(0, updateTodoIndex),
					{...action.payload},
					...state.todos.slice(updateTodoIndex + 1)
				]
			});
		}
	}
)
