import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { saveAddressToCart } from "../../actions/cartActions";

import { TextField } from "@material-ui/core";
import BreadCrumbs from "../../components/Misc/BreadCrumbs";
import { BreadCrumbsContainer, CheckoutHeading, CheckoutBillSummary, DeliveryAddressForm, DeliveryAddressInputWrapper, DeliveryAddressButton, CheckoutContainer, CheckoutColumn, CheckoutCard } from "./Elements";

/**
* @author
* @function Address
**/


const Address = (props) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { deliveryAddress } = useSelector(state => state.cart);
    const initialState = { address: deliveryAddress.address, city: deliveryAddress.city, state: deliveryAddress.state, country: deliveryAddress.country, zipcode: deliveryAddress.zipcode }
    const [addressData, setAddressData] = useState(initialState);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setAddressData({ ...addressData, [e.target.id]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( saveAddressToCart( addressData ) );
        history.push('/payment');
    }

    return(
            <>
                <BreadCrumbsContainer>
                    <BreadCrumbs bc1={user} bc2/>
                </BreadCrumbsContainer>
                <CheckoutContainer>
                    <CheckoutColumn>
                        <CheckoutCard height={'calc(100vh - 130px)'}>
                            <CheckoutHeading>Delivery Address</CheckoutHeading>
                            <DeliveryAddressForm onSubmit={ handleSubmit }>
                                <DeliveryAddressInputWrapper>
                                    <TextField 
                                        required
                                        fullWidth
                                        onChange={ handleChange }
                                        value={ addressData.address }
                                        id="address"
                                        variant="filled"
                                        label="Address"
                                    />
                                </DeliveryAddressInputWrapper>
                                <DeliveryAddressInputWrapper>
                                    <TextField 
                                        required
                                        fullWidth
                                        onChange={ handleChange }
                                        value={ addressData.city }
                                        id="city"
                                        variant="filled"
                                        label="City"
                                    />
                                </DeliveryAddressInputWrapper>
                                <DeliveryAddressInputWrapper>
                                    <TextField 
                                        required
                                        fullWidth
                                        onChange={ handleChange }
                                        value={ addressData.state }
                                        id="state"
                                        variant="filled"
                                        label="State"
                                    />
                                </DeliveryAddressInputWrapper>
                                <DeliveryAddressInputWrapper>
                                    <TextField 
                                        required
                                        fullWidth
                                        onChange={ handleChange }
                                        value={ addressData.country }
                                        id="country"
                                        variant="filled"
                                        label="Country"
                                    />
                                </DeliveryAddressInputWrapper>
                                <DeliveryAddressInputWrapper>
                                    <TextField 
                                        required
                                        fullWidth
                                        onChange={ handleChange }
                                        value={ addressData.zipcode }
                                        id="zipcode"
                                        variant="filled"
                                        label="ZipCode"
                                    />
                                </DeliveryAddressInputWrapper>
                                <DeliveryAddressInputWrapper>
                                    <DeliveryAddressButton type="submit">Proceed</DeliveryAddressButton>
                                </DeliveryAddressInputWrapper>
                            </DeliveryAddressForm>
                        </CheckoutCard>
                    </CheckoutColumn>
                    <CheckoutBillSummary top={'110px'}>
                        <CheckoutHeading>Bill Summary</CheckoutHeading>
                    </CheckoutBillSummary>
                </CheckoutContainer>
            </>
    );
}

export default Address;