import React from 'react';
import {
	Container,
	CardHeader,
	CardDescription,
	CardImage,
	CardTextContainer,
} from './styles';

export default (props) => {
	const { header, message, ...properties } = props;

	return (
		<Container {...properties}>
			<CardTextContainer>
				<CardHeader>{header}</CardHeader>
				<CardDescription>{message}</CardDescription>
			</CardTextContainer>
		</Container>
	);
};
