import React, {Component} from 'react';
import './styles.css'
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";

library.add(faCircleNotch)

export default class Loader extends Component{

	render() {
		return (
			<div className="loader-container">
				<FontAwesomeIcon
					icon={"circle-notch"}
					className="loader-icon"
					spin
				/>
			</div>
		);
	}

}

Loader.propTypes={};
