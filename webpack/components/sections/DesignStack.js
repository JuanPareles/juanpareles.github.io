import React from 'react';
import Section from '../Section';
import ProgressList from './components/ProgressList';
import { designData } from './components/progress-data';

const DesignStack = () => {
	return (
		<Section title="Design Stack">
			<ProgressList data={designData} />
		</Section>
	);
};

export default DesignStack;
