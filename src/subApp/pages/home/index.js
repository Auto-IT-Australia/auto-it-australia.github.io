import React, { useState } from 'react';
import { Navbar, Searchbar, TopCards } from '../../components';
import { ContentContainer, Header } from './style';
import data from '../../../data';

export default (props) => {
	const [searchInput, setSearchInput] = useState('');

	const ComponentList = Object.keys(data).map((key) => {
		const componentData = data[key];

		return {
			header: componentData.name,
			message: componentData.description,
			onClick: () =>
				props.history.push(`/component/${componentData.key}`),
		};
	});

	return (
		<ContentContainer>
			<Header>Hello, May I help you?</Header>
			<Searchbar
				placeholder='Search for a component...'
				style={{ marginBottom: 96 }}
				onChange={setSearchInput}
			/>
			<TopCards
				cardList={ComponentList.filter((component) => {
					return component.header.includes(searchInput);
				})}
			/>
		</ContentContainer>
	);
};
