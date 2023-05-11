import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

const ErrorPage = () => {
    return (
        <Wrapper>
            Error 페이지 , 잘못된 접근입니다.
        </Wrapper>
    );
};

export default ErrorPage;