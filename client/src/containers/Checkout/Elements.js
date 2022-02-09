import styled from 'styled-components';

export const CheckoutContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: calc(100vh - 120px);
    max-width: calc(100%);
    background: #e9ecee;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

export const CheckoutColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-right: 10px;

    @media screen and (max-width: 768px) {
        width: 88%;
    }
`

export const CheckoutCard = styled.div`
    padding: 32px 16px 0;
    background: ${({user}) => (user) ? 'rgba(252,128,25,0.92)' : '#fff'};
    margin: 10px;
    height: ${({height}) => (height)};
    width: 100%;
`

export const CheckoutIcon = styled.span`
    color: green;
`

export const CheckoutHeading = styled.h1`
    margin-top: 0;
`

export const CheckoutP = styled.p`
    color: #7e808c;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.12;
`

export const CheckoutAuthButton = styled.button`
    padding: auto;
    color: ${({isLogin}) => (isLogin) ? 'rgba(252,128,25,0.92)' : '#fff'};
    background: ${({isLogin}) => (isLogin) ? '#fff' : 'rgba(252,128,25,0.92)'};
    border: 1px solid rgba(252,128,25,0.92);
    width: 100px;
    height: 40px;
    margin-top: 10px;
    margin-right: 10px;
    font-size: 20px;
    cursor: pointer;
    transition: transform .5s cubic-bezier(0.22, 0.61, 0.36, 1);

    &:hover {
        box-shadow: 0 2px 8px rgba(252,128,25,0.92);
    }

    &:active {
        transform: scale(0.9);
    }
`

export const CheckoutLoginImage = styled.img`
    width: 400px;
    
    @media screen and (max-width: 768px) {
        width: 350px;
    }
`

export const CheckoutBillSummary = styled.div`
    position: sticky;
    top: ${({top}) => (top)};
    padding: 32px 16px 0;
    background: #fff;
    margin: 10px 10px 10px 50px;
    height: auto;
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 88%;
        margin: 10px;
    }
`

// Delivery Address styles
export const DeliveryAddressForm = styled.form`
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

export const DeliveryAddressInputWrapper = styled.div`
    width: 100%;
    margin: 10px 0;
`

export const DeliveryAddressButton = styled.button`
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

// Payment styles
export const BreadCrumbsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background: #e9ecee;
    margin-top: 60px;
    position: sticky;
    top: 60px;
    box-shadow: 1px 0px 3px 1px #333;
    z-index: 8;

    @media screen and (max-width: 768px) {
        z-index: 0;
    }
`

export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 100px);
    background: #e9ecee;
`

export const PaymentHeading = styled.h1`

`

export const PaymentForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: auto;
    background: #fff;
    padding: 10px;

    @media screen and (max-width: 768px) {
        width: 75%;
    }
`

export const PaymentInputWrapper = styled.div`
    width: 100%;
    margin: 10px 0;
`

export const PaymentButton = styled.button`
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

// Summary styles
export const SummaryContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: calc(100vh - 100px);
    max-width: calc(100%);
    background: #e9ecee;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

export const SummaryCard = styled.div`
    padding: 32px 16px 0;
    background: #fff;
    margin: 10px 10px 10px 50px;
    height: auto;
    width: 50%;
`

// Main Container
export const MainContainer = styled.div`
    
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow: hidden;
    }
`