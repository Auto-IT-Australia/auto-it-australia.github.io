import styled from 'styled-components';
import { ColumnComponent } from '@autoit/placement';

export const ComponentsWrapper = styled.div`
	display: flex;
`;

export const ComponentRouter = styled.div`
	flex-grow: 1;
`;

export const NavigationWrapper = styled.div`
	flex-basis: 240px;
	flex-shrink: 0;
	padding-right: 32px;
`;

export const ButtonHeading = styled.span`
	font-size: 24px;
	font-weight: 300;
	display: block;
	color: ${(props) => props.theme.fontColor};
	text-transform: capitalize;
`;

export const ComponentsByAlphaWrapper = styled.div`
	padding: 16px 0;
`;

export const ComponentButtonCol = styled(ColumnComponent)`
	margin-bottom: 30px;
`;

export const ButtonSubLabel = styled.span`
	color: #007dba;
`;

export const ButtonSubLabelDate = styled.small`
	color: #999;
`;
