import styled from 'styled-components';

export const Image = styled.img`
	max-width: 100%;
`;

export const Code = styled.code`
	background: #f7f7f7;
	padding: 0 3px;
	font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier,
		monospace;
	font-size: 0.75rem;
	border-radius: 3px;
	border: 1px solid #e0e0e0;
`;

export const TableStyle = styled.table`
	width: 100%;
	border-radius: ${(props) => props.theme.defaultRadius};
	margin: 20px 0;
	border: none !important;
`;

export const TableRow = styled.tr`
	background: ${(props) =>
		props.selected ? props.theme.warning : props.theme.white};
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background: ${(props) => props.theme.extraLightGrey};
	}

	&:active {
		opacity: 0.8;
	}
	border: none !important;
`;

export const TableEntry = styled.td`
	padding: 21px 32px;
	text-align: center;
	font-size: 14px;
	font-weight: normal;
	color: ${(props) => props.theme.rowColor};
	border-bottom: 1px solid ${(props) => props.theme.borderColor};

	&:first-child {
		text-align: left;
	}

	&:last-child {
		text-align: right;
	}
`;

export const TableHeader = styled.th`
	padding: 21px 30px;
	font-weight: 500;
	font-size: 14px;
	color: ${(props) => props.theme.darkGrey};
	background-color: #f1f1f5;
	text-align: center;

	&:first-child {
		border-radius: ${(props) => props.theme.defaultRadius} 0px 0px 0px;
		text-align: left;
	}

	&:last-child {
		border-radius: 0px ${(props) => props.theme.defaultRadius} 0px 0px;
		text-align: right;
	}
`;

export const Header = styled.span`
	${(props) => console.log({ props })}
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: ${(props) => {
		switch (props.level) {
			case 6:
				return '12';
			case 5:
				return '14';
			case 4:
				return '16';
			case 3:
				return '18';
			case 2:
				return '24';
			case 1:
			default:
				return '28';
		}
	}}px;
	line-height: 42px;
	letter-spacing: 0.116667px;
	display: block;
	overflow-wrap: break-word;

	color: #171725;
`;

export const Body = styled.span`
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 26px;
	display: block;

	letter-spacing: 0.1px;

	color: #696974;
`;

export const SubHeader = styled.span`
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 27px;
	display: block;

	color: #171725;
`;
