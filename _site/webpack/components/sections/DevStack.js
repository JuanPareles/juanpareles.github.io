import React from 'react';
import Section from '../Section';
import { devData } from './components/progress-data';
import ProgressList from './components/ProgressList';

const DevStack = () => {
	return (
		<Section title="Dev Stack">
			<ProgressList data={devData} />
		</Section>
	);
};

export default DevStack;
