import styled from 'styled-components';

export const PropTypesContainer = styled.div`
	margin: 48px 0 0;
`;

export const PropTypeCard = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 0 32px;
`;

export const Required = styled.span`
	color: ${(props) => props.theme.danger};
`;
