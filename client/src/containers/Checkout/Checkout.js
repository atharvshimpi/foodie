import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import LoginTemplate from "../../images/templates/loginTemplate.png";
import BreadCrumbs from "../../components/Misc/BreadCrumbs";
import { MainContainer, BreadCrumbsContainer, CheckoutContainer, CheckoutColumn, CheckoutCard, CheckoutHeading, CheckoutIcon, CheckoutP, CheckoutLoginImage, CheckoutAuthButton, CheckoutBillSummary } from "./Elements";

/**
* @author
* @function Checkout
**/

const Checkout = (props) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const history = useHistory();

    useEffect(() => {
        if(user) {
            history.push('/address');
        }
    }, [user, history])

    return(
        <MainContainer>
            <BreadCrumbsContainer>
                <BreadCrumbs bc1={user}/>
            </BreadCrumbsContainer>
            <CheckoutContainer>
                <CheckoutColumn>
                    <CheckoutCard height={'calc(100vh - 120px)'}>
                        <CheckoutHeading>Not Logged In, yet?</CheckoutHeading>
                        <CheckoutP>To place your order now, log in to your existing account or sign up.</CheckoutP>
                        <CheckoutLoginImage src={ LoginTemplate } alt="login-template" /><br />
                        <CheckoutAuthButton onClick={ () => { window.location.assign('/login?redirect=address') } } isLogin={true} >Login</CheckoutAuthButton>
                        <CheckoutAuthButton onClick={ () => { window.location.assign('/register') } } isLogin={false} >Register</CheckoutAuthButton>
                        
                    </CheckoutCard>
                </CheckoutColumn>
                <CheckoutBillSummary top={'110px'}>
                    <CheckoutHeading>Bill Summary</CheckoutHeading>
                </CheckoutBillSummary>
            </CheckoutContainer>
        </MainContainer>
    );
}

export default Checkout;