import React from 'react';

import Text from '@autoit/text';

import { ComponentLink } from './style';
import components from '../../../data';

const componentKeys = Object.keys(components);

export default () => (
	<>
		<Text>Components</Text>
		<Text>
			<ComponentLink to=''>All components</ComponentLink>
		</Text>
		{componentKeys.map((componentKey) => (
			<Text key={componentKey}>
				<ComponentLink to={components[componentKey].key}>
					{components[componentKey].name}
				</ComponentLink>
			</Text>
		))}
	</>
);
