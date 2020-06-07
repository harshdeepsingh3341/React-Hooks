import React, {useEffect, useCallback,useMemo} from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodos, updateTodo as updateTodoAction} from "./Todo.actions";
import Loader from "../../components/Loader";
import config from "../../config/config";
import TodoUnit from "../../components/TodoUnit";

const Todo = (props) => {

	const {
		fetchTodosStatus,
		todos,
	} = useSelector(state=> ({...state.todo}));

	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(fetchTodos());
		},
		[fetchTodos]
	);

	const updateTodo = (todo) => {
		dispatch(updateTodoAction(todo));
	};
	// const checkedTodos = todos.filter(todo => todo.completed);

	const checkedTodos = useMemo(
		() => [...todos.filter(todo => todo.completed)],
	[]
	)

	const completedTodos = useCallback(
		() => {
			return todos.filter(todo => todo.completed).length
		},
		[todos]
	);

	return (
		<div className="todos-container">
			{
				fetchTodosStatus.status === config.status.started &&
				<Loader/>
			}
			{
				completedTodos()
			}
			Checked
			<div className="todos" style={{opacity: 0.7}}>
				{
					checkedTodos.map(todo =>
						<TodoUnit
							key={todo.id}
							todo={todo}
							onTodoChange={updateTodo}
						/>)
				}
			</div>
			<hr/>
			All
			<div className="todos">
				{
					todos.map((todo) =>
						<TodoUnit
							key={todo.id}
							todo={todo}
							onTodoChange={updateTodo}
						/>
					)
				}
			</div>
		</div>
	)
}

Todo.propTypes = {};

export default Todo;
