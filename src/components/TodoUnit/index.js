import React, {Component} from 'react';
import './styles.css'
import PropTypes from 'prop-types';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faCheckSquare, faSquare} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(faSquare, faCheckSquare)

export default class TodoUnit extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isEdit: false,
			title: this.props.todo.title
		}
	}

	toggleCompleted = () => {
		this.props.onTodoChange({...this.props.todo, completed: !this.props.todo.completed})
	}

	save = () => {
		this.props.onTodoChange({...this.props.todo, title: this.state.title});
		this.setState({isEdit: false})
	}

	render() {
		const {todo: {completed}} = this.props;
		const {isEdit, title} = this.state;

		return (
			<div className="todo-container">
				<div className="todo">
					<div className="completed-icon" onClick={this.toggleCompleted}>
						<FontAwesomeIcon
							icon={['far', completed ? "check-square" : "square"]}
						/>
					</div>
					{
						isEdit ?
							<input
								type="text"
								name="title"
								id="title"
								value={title}
								onChange={({target: {value}}) => this.setState({title: value})}
								className="title input"
							/> :
							<div
								className={`title ${completed ? "completed" : ""}`}
								onClick={() => !completed && this.setState({isEdit: !this.state.isEdit})}
							>
								{title}
							</div>
					}
				</div>
				{
					isEdit &&
					<div className="save-button-container">
						<button onClick={() => this.setState({isEdit: false})}>
							Cancel
						</button>
						<button onClick={this.save}>Save</button>
					</div>
				}
			</div>
		);
	}

}

TodoUnit.propTypes = {
	todo: PropTypes.shape({
		title: PropTypes.string,
		completed: PropTypes.bool,
		onTodoChange: PropTypes.func
	})
};
