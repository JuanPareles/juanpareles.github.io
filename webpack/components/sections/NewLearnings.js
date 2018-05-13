import React from 'react';
import Section from '../Section';
import { learningsData } from './components/progress-data';
import ProgressList from './components/ProgressList';

const NewLearnings = () => {
	return (
		<Section title="New stuffs I'm leaning">
			<ProgressList data={learningsData} />
		</Section>
	);
};

export default NewLearnings;
