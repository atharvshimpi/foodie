import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    height: 60px;
    width: 100%;
    background: rgba(252, 128, 25, 0.92);
    top: 0;
    right: 0;
    margin-bottom: 60px;
    z-index: 2;

    @media screen and (max-width: 768px) {
        justify-content: space-between;
    }
`

export const NavRestaurantDetailsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    height: 60px;
    width: 100%;
    background: rgba(252, 128, 25, 0.92);
    top: 0;
    right: 0;
    z-index: 12;

    @media screen and (max-width: 768px) {
        justify-content: space-between;
        position: fixed;
    }
`

export const NavbarIcon = styled(Link)`
    display: inline-block;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavbarHeading = styled(Link)`
    text-decoration: none !important;
    display: inline-block;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        margin-right: 10px;
        transition: all 0.2s ease-in-out;
        display: ${({isOpen}) => (isOpen ? 'none' : 'inline-block')};
        opacity: ${({isOpen}) => (isOpen ? '0' : '100%')};
    }
`

export const NavbarFaBars = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: ${({isOpen}) => (isOpen ? 'none' : 'flex')};
        justify-content: flex-start;
        margin-left: 10px;
        font-size: 1.8rem;
        color: #fff;
        cursor: pointer;
    }
`

export const NavbarLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavbarUserAlias = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavbarLink = styled(Link)`
    text-decoration: none !important;
    color: #fff;
    font-size: 1rem;
    padding: 20px;
    transition: all 0.2s ease-in-out;
    &:hover {
        background: #fff;
        color: #333;
    }
`

export const NavbarButton = styled.button`
    outline: none;
    border: 0;
    padding: 12px 18px;
    margin: 0 10px;
    background: #333;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-out;

    &:hover {
        background: #101010;
        opacity: 0.9;
        color: #fff;
        box-shadow: 0 2px 8px #101010;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
` 