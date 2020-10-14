import React from 'react';
import { MenuItemStyle } from './style';

export default ({ title, onClick, ...props }) => {
	return (
		<MenuItemStyle {...props} onClick={onClick}>
			{title}
		</MenuItemStyle>
	);
};
