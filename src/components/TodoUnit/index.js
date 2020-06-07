import React, {useState, useEffect, useRef} from 'react';
import './styles.css'
import PropTypes from 'prop-types';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faCheckSquare, faSquare} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(faSquare, faCheckSquare)

const TodoUnit = ({todo, todo: {completed, title: titleFromProps}, onTodoChange}) => {
	const [isEdit, setIsEdit] = useState(false);
	const [title, setTitle] = useState(titleFromProps);

	const completedRef = useRef(undefined);


	useEffect(
		() => {
			if(completedRef && !completed){
				// completedRef.current.click();
			}
		},
		[completedRef]
	)

	useEffect(
		() => {
			console.log('Title From props changed');
			setTitle(`"${titleFromProps}"`)
		},
		[titleFromProps, setTitle]
	);

	const toggleCompleted = () => {
		onTodoChange({...todo, completed: !todo.completed});
	}

	const save = () => {
		onTodoChange({...todo, title});
		setIsEdit(false);
	};

	return (
		<div className="todo-container">
			<div className="todo">
				<div className="completed-icon" onClick={toggleCompleted} ref={completedRef}>
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
							onChange={({target: {value}}) => setTitle(value)}
							className="title input"
						/> :
						<div
							className={`title ${completed ? "completed" : ""}`}
							onClick={() => !completed && setIsEdit(oldIsEdit => !oldIsEdit)}
						>
							{title}
						</div>
				}
			</div>
			{
				isEdit &&
				<div className="save-button-container">
					<button onClick={() => setIsEdit(false)}>
						Cancel
					</button>
					<button onClick={save}>Save</button>
				</div>
			}
		</div>
	);
}

TodoUnit.propTypes = {
	todo: PropTypes.shape({
		title: PropTypes.string,
		completed: PropTypes.bool,
		onTodoChange: PropTypes.func
	}),
	onTodoChange: PropTypes.func
};

export default TodoUnit;
