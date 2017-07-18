import React, { Component } from 'react';
import { render } from 'react-dom'
import './style.css'
import saveButton from './img-save.png'

class Content extends Component {
	render () {
		return (
			<div>
				<div className="firstNameHeader">
					<h3>First name</h3>
				</div>
				<div className="firstNameInput">
					<input type="text" name="firstName" placeholder="  Jane Doe" alt="firstName"></input>
				</div>
				<div className="jobTitleHeader">
					<h3>Job Title</h3>
				</div>
				<div className="jobTitleInput">
					<input type="text" name="jobTitle" placeholder="  Developer" alt="jobTitle"></input>
				</div>
				<div className="birthdayHeader">
					<h3>Birthday</h3>
				</div>	
				<div className="birthdayInput">
					<input type="text" name="birthday" placeholder="  mm/dd/yyyy" alt="birthday"></input>
				</div>
				<div className="bioHeader">	
					<h3>Bio</h3>
				</div>
				<div className="bioInput">	
					<textarea name="bio" placeholder="  A few words about yourself" alt="bio"></textarea>
				</div>
				<img src={saveButton} className="saveButton"
					alt="saveButton" />
			</div>
		)
	}
}

export default Content;