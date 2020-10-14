import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background: #fff;
	border: 1px solid #e2e2ea;
	border-radius: 20px;
	width: 100px;
	justify-content: center;
	align-items: center;

	&:hover {
		opacity: 0.8;
		cursor: pointer;
	}

	&:active {
		transform: scale(0.95);
	}
`;

export const CardHeader = styled.span`
	margin: 22px 20px 10px 20px;

	font-weight: 600;
	font-size: 18px;
	line-height: 27px;

	color: #171725;
`;

export const CardDescription = styled.span`
	margin: 2px 20px 22px 20px;

	font-weight: normal;
	font-size: 14px;
	line-height: 22px;

	letter-spacing: 0.1px;

	color: #92929d;
`;

export const CardImage = styled.div`
	padding: 27px 16px;
`;

export const CardTextContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
