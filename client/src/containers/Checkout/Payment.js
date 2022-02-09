import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { savePaymentMethodToCart } from "../../actions/cartActions";

import BreadCrumbs from "../../components/Misc/BreadCrumbs";
import { RadioGroup, FormControlLabel, Radio, withStyles } from "@material-ui/core";
import { BreadCrumbsContainer, PaymentContainer, PaymentHeading, PaymentForm, PaymentInputWrapper, PaymentButton } from "./Elements";

/**
* @author
* @function Payment
**/

const Payment = (props) => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const { deliveryAddress } = useSelector(state => state.cart);
    const history = useHistory();
    const dispatch = useDispatch();

    if(!deliveryAddress) {
        history.push('/checkout');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( savePaymentMethodToCart( paymentMethod ) );
        history.push('/summary');
    }

    return(
        <>
            <BreadCrumbsContainer>
                <BreadCrumbs bc1 bc2 bc3/>
            </BreadCrumbsContainer>
            <PaymentContainer>
                <PaymentHeading>Select a Payment Method</PaymentHeading>
                <PaymentForm onSubmit={ handleSubmit }>
                    <RadioGroup>
                        <FormControlLabel 
                            value="paypal" 
                            control={
                                <OrangeRadio 
                                    onChange={ (e) => { setPaymentMethod(e.target.value) } }
                                    value="Paypal"
                                    id="paypal"
                                />
                            } 
                            label="Paypal" 
                        />
                        <FormControlLabel 
                            value="cod" 
                            control={
                                <OrangeRadio
                                    onChange={ (e) => { setPaymentMethod(e.target.value) } }
                                    value="Cash On Delivery"
                                    id="cod"
                                />
                            } 
                            label="COD (Cash On Delivery)" 
                        />
                    </RadioGroup>
                    <PaymentInputWrapper>
                        <PaymentButton type="submit">Proceed</PaymentButton>
                    </PaymentInputWrapper>
                </PaymentForm>
            </PaymentContainer>
        </>
    );
}

export default Payment;

const OrangeRadio = withStyles({
    root: {
      color: 'rgba(252,128,25,0.92)',
      '&$checked': {
        color: 'rgba(252,128,25,0.92)',
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);