import styled from 'styled-components';

export const MenuItemStyle = styled.span`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 21px;

	letter-spacing: 0.1px;

	color: #171725;

	padding: 15px 20px;
	text-align: center;

	${(props) =>
		props.active &&
		`background-color: #0062FF; border-radius: 4px; color: #fff;`}

	${(props) => props.bold && `font-size: 20px;`}

	${(props) =>
		props.underline && `border-bottom: 1px solid #979797`}

	&:hover {
		opacity: 0.8;
		cursor: pointer;
	}
`;
