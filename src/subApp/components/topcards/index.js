import React from 'react';
import { Card } from '..';
import { CardContainer } from './styles';

export default (props) => {
	const { cardList = [] } = props;

	const generateCard = (details, index) => (
		<Card
			header={details.header}
			message={details.message}
			style={{ flex: '1 0 20%', margin: 16 }}
			onClick={details.onClick}
		/>
	);

	return <CardContainer>{cardList.map(generateCard)}</CardContainer>;
};
