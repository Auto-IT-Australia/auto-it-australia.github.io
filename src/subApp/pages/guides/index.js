import React, { useState, useEffect } from 'react';
import { asyncComponent } from 'react-async-component';
import {
	Spinner,
	MarkdownRenderer,
	MenuItem,
	Searchbar,
	Icon,
} from '../../components';
import data from '../../../data';
// import { guides } from '../../../data';
import {
	RowComponent as Row,
	ColumnComponent as Column,
} from '@autoit/placement';
import { SubHeader, Header } from '../../components/markdownRenderer/style';
import {
	Logo,
	MenuAccordionTitle,
	MenuAccordionTitleContainer,
	MenuAccordionContainer,
	MenuAccordionTitleIcon,
	MenuAccordionTitleIconContainer,
	MenuAccordionChildren,
} from './style';

export default (props) => {
	const guides = {};
	const {
		match: {
			params: { guide },
			url,
		},
		history,
	} = props;

	const [searchInput, setSearchInput] = useState('');

	const generateMenu = (item, key) => (
		<MenuItem
			title={item}
			onClick={() => history.push(`/component/${item}`)}
			key={key}
		/>
	);

	const MenuAccordion = ({ iconName, title, children, match }) => {
		const [isOpen, setIsOpen] = useState(url.includes(match) || false);

		return (
			<MenuAccordionContainer>
				<MenuAccordionTitleContainer onClick={() => setIsOpen(!isOpen)}>
					<MenuAccordionTitleIconContainer>
						<Icon height={24} width={24} name={iconName} />
						<MenuAccordionTitle>{title}</MenuAccordionTitle>
					</MenuAccordionTitleIconContainer>
					<MenuAccordionTitleIcon name='arrow' isOpen={isOpen} />
				</MenuAccordionTitleContainer>
				{isOpen && (
					<MenuAccordionChildren>{children}</MenuAccordionChildren>
				)}
			</MenuAccordionContainer>
		);
	};
	return guide ? (
		<Row>
			<div
				style={{
					flex: 1.5,
					background: '#FCFCFE',
					minHeight: '100%',
					display: 'flex',
					flexDirection: 'column',
				}}>
				<Logo>DocMe</Logo>
				<MenuAccordion
					title='Components'
					iconName='components'
					match='component'>
					{Object.keys(data)
						.sort()
						.filter((item) => item.includes(searchInput))
						.map(generateMenu)}
				</MenuAccordion>
				<MenuAccordion title='Guides' iconName='book' match='guides'>
					<MenuItem
						title={'Style'}
						active={'Style' === guide}
						onClick={() => history.push(`/guides/Style`)}
					/>
				</MenuAccordion>
			</div>
			<div
				style={{ flex: 10.5, padding: '50px 60px', minHeight: '100%' }}>
				<div
					style={{
						margin: '-50px -60px 50px -60px',
						padding: 10,
						display: 'flex',
						flexDirection: 'row',
						background: '#FFFFFF',
					}}>
					<Searchbar
						placeholder='Search for a component...'
						onChange={setSearchInput}
					/>
				</div>
				<MarkdownRenderer src={guides.style.docs()} />
			</div>
		</Row>
	) : (
		<React.Fragment>
			<Header>No documentation found for {guide}.</Header>
			<SubHeader>
				Please select a guide from the left hand navigation.
			</SubHeader>
		</React.Fragment>
	);
};
