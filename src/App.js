import React from 'react';
import './App.css'
import PropTypes from 'prop-types';
import Todo from './containerComponents/Todo'


const App = () => {
	return (
		<div className="app-container">
			<Todo/>
		</div>
	)
};

App.propTypes = {};

export default App
