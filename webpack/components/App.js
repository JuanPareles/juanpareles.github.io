import React from 'react';
import Profile from './Profile';
// import SocialMedia from './social-media/SocialMedia';
import About from './sections/About';
import DevStack from './sections/DevStack';
import DesignStack from './sections/DesignStack';
import NewLearnings from './sections/NewLearnings';
import Posts from './sections/Posts';

const App = () => {
	return (
		<div>
			<section className="background-top">
				<Profile />
				{/* <SocialMedia /> */}
			</section>
			<section className="wrapper">
				<About />
				<DevStack />
				<DesignStack />
				<NewLearnings />
				<Posts />
			</section>
		</div>
	);
};

export default App;
