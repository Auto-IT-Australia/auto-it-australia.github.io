import React from 'react';

import Text from '@autoit/text';
import {
	RowComponent as Row,
	ColumnComponent as Column,
} from '@autoit/placement';

import { PropTypeCard, PropTypesContainer, Required } from './style';
import { Header, SubHeader } from '../../components/markdownRenderer/style';

const Value = ({ value, name, raw }) => {
	const shapeNames = name === 'shape' ? Object.keys(value) : null;

	return name === 'enum' ? (
		<>
			<Header level={5} style={{ color: '#565663' }}>
				one of:&nbsp; [
				{value.map &&
					value.map((childValue, key) => (
						<span key={key}>
							<em>{childValue.value}</em>
							{value.length > key + 2
								? ', '
								: value.length === key + 2
								? ' or '
								: ''}
						</span>
					))}
				]
			</Header>
		</>
	) : name === 'union' ? (
		<>
			<Header level={5} style={{ color: '#565663' }}>
				One of:&nbsp;
				{value.map((childValue, key) => (
					<span key={key}>
						<em>{childValue.name}</em>
						{value.length > key + 2
							? ', '
							: value.length === key + 2
							? ' or '
							: ''}
					</span>
				))}
			</Header>
		</>
	) : name === 'shape' ? (
		shapeNames.map((shapeName, key) => (
			<React.Fragment key={key}>
				<Header level={5} style={{ color: '#565663' }}>
					<strong>{shapeName}</strong> &nbsp;{' '}
					<em>
						{value[shapeName].name}{' '}
						{value[shapeName].required ? (
							<Required>required</Required>
						) : null}
					</em>
				</Header>
				{value[shapeName].value && (
					<Value
						value={value[shapeName].value}
						name={value[shapeName].name}
					/>
				)}
				{value[shapeName].description && (
					<Header>{value[shapeName].description}</Header>
				)}
			</React.Fragment>
		))
	) : name === 'arrayOf' ? (
		<Value value={value.value} name={value.name} raw={value.raw} />
	) : name === 'custom' ? (
		<Header level={5} style={{ color: '#565663' }}>
			<strong>{name}</strong> &nbsp; <em>{raw}</em>
		</Header>
	) : name === 'object' ? (
		<Header level={5} style={{ color: '#565663' }}>
			<strong>{name}</strong>
		</Header>
	) : (
		<Header level={5} style={{ color: '#565663' }}>
			Value: {JSON.stringify(value)}
		</Header>
	);
};

const Prop = ({ prop, propName }) => (
	<PropTypeCard>
		<Header level={4}>
			<strong>{propName}</strong> &nbsp;{' '}
			<em>
				{prop.type ? prop.type.name : prop.name}{' '}
				{prop.required && <Required>required</Required>}
			</em>
		</Header>
		{prop.description && (
			<Header level={5} style={{ lineHeight: 'normal' }}>
				{prop.description}
			</Header>
		)}
		{prop.type && prop.type.value && (
			<Value value={prop.type.value} name={prop.type.name} />
		)}
	</PropTypeCard>
);

const PropTypes = ({ props }) => {
	let hasProps = false;
	for (const i in props) {
		if (props[i].props) {
			hasProps = true;
		}
	}

	return hasProps ? (
		<PropTypesContainer>
			<SubHeader
				style={{ fontWeight: 500, fontSize: 20, marginBottom: 10 }}>
				Prop types
			</SubHeader>
			{props.map((component, key) => {
				const propNames = component.props
					? Object.keys(component.props)
					: null;
				return propNames ? (
					<React.Fragment key={key}>
						{props.length > 1 && (
							<Text type='caption'>{component.displayName}</Text>
						)}
						<Row style={{ flexWrap: 'wrap' }}>
							{propNames
								? propNames.map((propName, key) => (
										<Column
											style={{ flex: '1 0 45%' }}
											key={key}>
											<Prop
												prop={component.props[propName]}
												propName={propName}
											/>
										</Column>
								  ))
								: null}
						</Row>
					</React.Fragment>
				) : null;
			})}
		</PropTypesContainer>
	) : null;
};

export default PropTypes;
