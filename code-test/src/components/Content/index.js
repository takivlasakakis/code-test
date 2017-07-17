import React, { Component } from 'react';
import { render } from 'react-dom'
import styles from './style.css'

class Content extends Component {
	render () {
		return (
			<div className="container">
				<div>
					<h3>First name</h3>
					<input type="text" name="firstName"></input>
				</div>
				<div>
					<h3>Job Title</h3>
					<input type="text" name="jobTitle"></input>
				</div>
				<div>
					<h3>Birthday</h3>
					<input type="text" name="birthday"></input>
				</div>
				<div>
					<h3>Bio</h3>
					<input type="text" name="bio"></input>
				</div>
			</div>
		)
	}
}

export default Content;