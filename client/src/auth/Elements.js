import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #e9ecee;
    min-height: calc(100vh - 60px);
    width: 100%;
    margin-top: 60px;
`

export const AuthHeading = styled.h1`
    text-align: center;
    width: 100%;
`

export const AuthForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: auto;
    background: #fff;
    padding: 10px;

    @media screen and (max-width: 768px) {
        width: 75%;
    }
`

export const AuthInputWrapper = styled.div`
    width: 100%;
    margin: 10px 0;
`

export const AuthP = styled.p`
    font-size: 20px;
    font-family: Arial;
`

export const AuthLink = styled(Link)`
    text-decoration: none;
    font-family: 'Raleway';
    font-weight: bolder;
    color: #333;

    &:hover {
        color: rgba(252,128,25,0.92);
    }
`

export const AuthButton = styled.button`
    width: 100%;
    height: 40px;
    border: 1px solid #d4d5d9;
    outline: none;
    font-size: 20px;
    color: #333;
    background: rgba(252,128,25,0.92);
    cursor: pointer;
    transition: transform .5s cubic-bezier(0.22, 0.61, 0.36, 1);

    &:hover {
        box-shadow: 0 2px 8px #d4d5d9;
    }

    &:active {
        transform: scale(0.9);
    }
`