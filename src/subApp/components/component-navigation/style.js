import styled from 'styled-components';

export const Container = styled.div`
	overflow: auto;
`;

export const ComponentLink = styled.div`
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: -16px;
        width: 4px;
        border-radius: 2px;
        background-color: #004165;
        height: 100%;
        top: 1px
        opacity: 0;
        transition: opacity 0.2xs;
    }

    &[aria-current]::before {
        opacity: 1;
    }
`;
