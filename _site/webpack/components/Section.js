import React, { PropTypes } from 'react';

const Section = ({ title, children }) => {
	return (
		<div className="section-box">
			<h2 className="title">{title}</h2>
			{ children }
		</div>
	);
};

Section.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
};

Section.defaultProps = {
	title: '',
	children: {},
};

export default Section;
