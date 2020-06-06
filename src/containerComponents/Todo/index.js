import React, {Component} from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchTodos, updateTodo} from "./Todo.actions";
import Loader from "../../components/Loader";
import config from "../../config/config";
import TodoUnit from "../../components/TodoUnit";

class Todo extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount = () => {
		this.props.fetchTodos();
	};

	updateTodo = (todo) => {
		this.props.updateTodo(todo);
	}

	render() {
		const {
			fetchTodosStatus,
			todos
		} = this.props;
		return (
			<div className="todos-container">
				{
					fetchTodosStatus === config.status.started &&
					<Loader/>
				}
				<div className="todos">
					{
						todos.map((todo) =>
							<TodoUnit
								key={todo.id}
								todo={todo}
								onTodoChange={this.updateTodo}
							/>
						)
					}
				</div>
			</div>
		)
	}
}

Todo.propTypes = {};

const mapStateToProps = (state) => ({
	...state.todo
});

const mapDispatchToProps = {
	fetchTodos,
	updateTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
