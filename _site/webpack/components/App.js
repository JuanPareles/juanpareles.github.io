import React from 'react';
import Profile from './Profile';
import SocialMedia from './SocialMedia';

const App = () => {
	return (
		<section className="grid-container">
			<div className="grid-item left-col">
				<Profile />
				<SocialMedia />
			</div>
			<div className="grid-item right-col">
				<div className="section-box">About</div>
				<div className="section-box">Tools</div>
				<div className="section-box">Posts</div>
				<div className="section-box">Contact</div>
			</div>
		</section>
	);
};

export default App;
