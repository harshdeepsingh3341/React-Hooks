import React, {Component} from 'react';
import './App.css'
import PropTypes from 'prop-types';
import Todo from './containerComponents/Todo'

export default class App extends Component {

	render() {
		return (
			<div className="app-container">
				<Todo/>
			</div>
		)
	}
};

App.propTypes = {};
