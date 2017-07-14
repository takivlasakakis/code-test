import React, { Component } from 'react';
import { render } from 'react-dom'
import styles from './style.css'
import backgroundColor from './bkg-header.jpg'
import hamburger from './icon-hamburger-nav.png'
import profilePic from './img-profile.png'

class Header extends Component {


	render () {
	 return (
	 	<div>
		 	<img src={hamburger} className="hamburger"
			alt="hamburger" />

			<div className="headerBox">
				<h1>Profile</h1>
			</div>

			<img src={backgroundColor} className="backgroundColor"
			alt="backgroundColor" />

			<img src={profilePic} className="profilePic"
			alt="profilePic" />
		</div>

		)
	}
}

export default Header;