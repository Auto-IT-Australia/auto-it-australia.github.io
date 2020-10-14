import React from 'react';
import Text from '@autoit/text';
import Card from '../card';
import {
	RowComponent as Row,
	ColumnComponent as Column,
} from '@autoit/placement';
import data from '../../../data';
import {
	ComponentsWrapper,
	// ComponentRouter,
	// NavigationWrapper,
	ButtonHeading,
	ComponentsByAlphaWrapper,
	ComponentButtonCol,
	ButtonSubLabel,
	// ButtonSubLabelDate,
} from './styles';

const ComponentsByAlpha = ({ componentKeysForAlpha }) => {
	return componentKeysForAlpha.map((componentKey) => (
		<Card
			key={componentKey}
			onClick={() => {}}
			header={`@autoit/${data[componentKey].key.split('-').join(' ')}`}
			message={data[componentKey].version}
		/>
	));
};

const ComponentsList = () => {
	const componentKeys = Object.keys(data);

	const getKeysByAlpha = () => {
		let keysByAlpha = {};
		componentKeys.forEach((key) => {
			const alpha = key.charAt(0);
			if (keysByAlpha[alpha]) {
				keysByAlpha[alpha].push(key);
			} else {
				keysByAlpha[alpha] = [key];
			}
		});

		return keysByAlpha;
	};
	const alphaKeys = Object.keys(getKeysByAlpha());
	console.log(alphaKeys);

	return (
		<Column>
			<Text type='subheader'>All components</Text>
			<Text>
				These are the building blocks you will use to help you create
				beautiful AutoIT experiences
			</Text>
			{alphaKeys.map((alphaKey) => (
				<ComponentsByAlphaWrapper key={alphaKey}>
					<Text>{alphaKey.toUpperCase()}</Text>
					<Row style={{ width: '100%' }}>
						<ComponentsByAlpha
							componentKeysForAlpha={getKeysByAlpha()[alphaKey]}
						/>
					</Row>
				</ComponentsByAlphaWrapper>
			))}
		</Column>
	);
};

const ComponentsHome = () => (
	<ComponentsWrapper>
		<ComponentsList />
	</ComponentsWrapper>
);

export default ComponentsList;
