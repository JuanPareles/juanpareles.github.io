import React, { Component } from 'react';
import img from '../assets/images/profile-square.jpg';
// import img from '../assets/images/me_2017.png';

class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			src: img,
		};
	}

	render() {
		return (
			<div className="wrapper profile-box">
				<img
					className="profile-image"
					style={{ margin: '0.5em' }}
					src={this.state.src}
					alt="React Logo"
				/>
				<h1 className="parentheses">()</h1>
				<h1 className="heading">Juan Pareles</h1>
				<h3 className="sub-heading">Full-Stack Developer</h3>
			</div>
		);
	}
}

export default Profile;
