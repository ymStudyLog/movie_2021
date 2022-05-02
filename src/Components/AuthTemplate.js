import { Children } from 'react';
import styled from 'styled-components';

/*
 * 회원가입/로그인 페이지 레이아웃 담당 컴포넌트
 */

const AuthTemplateSample = styled.div`
    width: 40%;
    position: relative;
    top: 4;
    margin: auto;
    background-color: black;
    padding: 1rem;
`;

const AuthTemplate = ({ children }) => {
    return(
        <AuthTemplateSample>
            {children}
        </AuthTemplateSample>
    );
};

export default AuthTemplate;