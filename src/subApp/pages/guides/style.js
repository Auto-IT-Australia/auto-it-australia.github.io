import styled from 'styled-components';
import { Icon } from '../../components';

export const Logo = styled.span`
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 30px;

	color: #171725;
	margin-top: 20px;
	margin-left: 63px;
	margin-bottom: 17px;
`;

export const MenuAccordionContainer = styled.div`
	margin: 20px;
`;

export const MenuAccordionTitleContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	&:hover {
		opacity: 0.8;
		cursor: pointer;
	}
`;

export const MenuAccordionTitleIconContainer = styled.div`
	flex: 10;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const MenuAccordionTitle = styled.span`
	flex: 10;
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: 0.1px;
	align-items: center;
	color: #171725;
	margin-left: 20px;
`;

export const MenuAccordionTitleIcon = styled(Icon)`
	${(props) => props.isOpen && `transform: rotate(180deg);`}
`;

export const MenuAccordionChildren = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`;
