import React, { useState } from 'react';
import { StyledInput } from './styles';

export default (props) => {
	const { onChange = () => {}, ...properties } = props;

	const [value, setValue] = useState('');

	return (
		<StyledInput
			{...properties}
			value={value}
			onChange={(e) => {
				setValue(e.target.value);
				onChange(e.target.value);
			}}
		/>
	);
};
