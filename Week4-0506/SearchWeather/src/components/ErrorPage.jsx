import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    font-size: xx-large;
`

const ErrorPage = () => {
    return (
        <Wrapper>
            🌦️ Error 페이지 , 잘못된 접근입니다.
        </Wrapper>
    );
};

export default ErrorPage;