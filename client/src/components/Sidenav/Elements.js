import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidenavContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    width: 70%;
    top: 0;
    z-index: 12;
    background: rgba(252, 128, 25, 1);
    transition: all 0.3s ease-in-out !important;
    left: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
`

export const SidenavHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SidenavHeading = styled(Link)`
    text-decoration: none !important;
    font-size: 2rem;
    color: #fff;
    margin-bottom: 5px;
    padding: 20px;

    &:hover {
        color: #fff;
    }
`

export const SidenavCloseBtn = styled.div`
    margin: 0 10px;
    font-size: 1.8rem;
    color: #fff;
    cursor: pointer;
`

export const SidenavHr = styled.hr`
    background: #be5600;
    border: 0;
    margin: 0 100px 0 2px;
    height: 1px;
`

export const SidenavLinksWrapper = styled.div`
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
`

export const SidenavLink = styled(Link)`
    padding: 40px;
    text-decoration: none !important;
    color: #fff;
    font-size: 1.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: #fff;
        color: #2c688be0;
    }

    @media screen and (max-width: 768px) {
        padding: 35px;
        font-size: 1.3rem;
    }

    /* Galaxy Fold like devices */
    @media screen and (max-width: 280px) {
        padding: 40px;
        font-size: 1rem;
    }
`

export const SidenavVideoWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 80px;
`

export const SidenavButton = styled.button`
    outline: none;
    border: 0;
    font-size: 1.1rem;
    padding: 20px 28px;
    border-radius: 40px;
    background: #61bdfec7;
    color: #333;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: #101010;
        opacity: 0.9;
        color: #fff;
    }
`

export const Video = styled.video`
    width: 200px;
`