import React, { Component } from 'react';
import codepen from '../../assets/images/logo-codepen.svg';
import github from '../../assets/images/logo-github.svg';
import instagram from '../../assets/images/logo-instagram.svg';
import linkedin from '../../assets/images/logo-linkedin.svg';
import spotify from '../../assets/images/logo-spotify.svg';

class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div className="social-media-container">
				<a target="_black" href="https://codepen.io/juanpareles">
					<img className="codepen-logo" style={{ margin: '0.5em' }} src={codepen} alt="codepen logo" />
				</a>
				<a target="_black" href="https://github.com/JuanPareles">
					<img className="github-logo" style={{ margin: '0.5em' }} src={github} alt="github logo" />
				</a>
				<a target="_black" href="/">
					<img className="instagram-logo" style={{ margin: '0.5em' }} src={instagram} alt="instagram logo" />
				</a>
				<a target="_black" href="https://www.linkedin.com/in/juan-pareles/">
					<img className="linkedin-logo" style={{ margin: '0.5em' }} src={linkedin} alt="linkedin logo" />
				</a>
				<a target="_black" href="https://open.spotify.com/user/juanpar23?si=obG4VqHzR8iftyJ_7-dgwQ">
					<img className="spotify-logo" style={{ margin: '0.5em' }} src={spotify} alt="spotify logo" />
				</a>
			</div>
		);
	}
}

export default Profile;
