import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: calc(100vh - 60px);
    max-width: calc(100%);
    background: #e9ecee;
    margin-top: 60px;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        overflow: hidden;
        margin-top: 0;
    }
`

export const CartContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 100%;

    @media screen and (max-width: 768px) {
        margin: 0;
    }
`

export const CartBottom = styled.div`
    position: sticky;
    top: 70px;
    padding: 32px 16px 0;
    background: #fff;
    margin: 10px 10px 10px 0;
    height: auto;
    width: 50%;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 85%;
        margin: 50px 10px;
    }
`

export const CartHeading = styled.h1`
    margin-top: 5px;
`

export const CartBillDetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    &:nth-child(5) {
        font-weight: bold;
        font-size: 20px;
        border-top: 2px solid #333;
    }
`

export const CartSubHeading = styled.h3`
    color: #686b78;
`

export const CartCostHeading = styled.h3`
    margin-right: 8px;
    font-weight: 700;
    color: #3e4152;
    letter-spacing: 1px;
    font-family: Arial;
`

export const Rupee = styled.span`
    position: relative;
    top: 0px;
`

export const CartCheckoutButton = styled.button`
    color: #333;
    background: rgba(252,128,25,0.92);
    border: 1px solid #d4d5d9;
    width: 100%;
    height: 50px;
    margin: 10px 0;
    font-size: 20px;
    cursor: pointer;
    transition: transform .5s cubic-bezier(0.22, 0.61, 0.36, 1);

    &:hover {
        box-shadow: 0 2px 8px #d4d5d9;
    }

    &:active {
        transform: scale(0.9);
    }
`

