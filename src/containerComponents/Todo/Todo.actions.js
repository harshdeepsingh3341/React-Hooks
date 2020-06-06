import {getTodos} from "../../services/axios.service";
import createAction from '../../services/createActions.service';
import {
	ADD_TODOS,
	FETCH_TODO_FAILURE,
	FETCH_TODO_STARTED,
	FETCH_TODO_SUCCESS,
	UPDATE_TODO
} from "../../config/actionTypes";
import config from "../../config/config";

const fetchTodosStarted = createAction(FETCH_TODO_STARTED)(config.status.started);
const fetchTodosFailure = createAction(FETCH_TODO_FAILURE)(config.status.failed);
const fetchTodosSuccess = createAction(FETCH_TODO_SUCCESS)(config.status.success);

const addTodos = createAction(ADD_TODOS);
export const updateTodo = createAction(UPDATE_TODO);

export const fetchTodos = () => async dispatch => {
	try {
		dispatch(fetchTodosStarted);
		const {data} = await getTodos();
		dispatch(fetchTodosSuccess);
		dispatch(addTodos(data));
	} catch (e) {
		dispatch(fetchTodosFailure);
		console.log('**** Error ****', e);
	}
}
