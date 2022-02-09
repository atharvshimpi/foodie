import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { placeOrder } from "../../actions/orderActions";

import SummaryItemsCard from "../../components/Cards/SummaryItemsCard";
import CartEmpty from "../../components/Misc/CartEmpty";
import BreadCrumbs from "../../components/Misc/BreadCrumbs";

import { CheckoutColumn, CheckoutCard, CheckoutHeading, CheckoutBillSummary, BreadCrumbsContainer, SummaryContainer, CheckoutP, MainContainer } from "./Elements";
import { CartBillDetailsContainer, CartSubHeading, CartCostHeading, Rupee, CartCheckoutButton } from "../Cart/Elements";

/**
* @author
* @function Summary
**/

const Summary = (props) => {
    const paymentMethod = JSON.parse(localStorage.getItem('payment'));
    const { deliveryAddress, cartItems } = useSelector(state => state.cart);
    const { order, success } = useSelector(state => state.order);
    const history = useHistory();
    const dispatch = useDispatch();

    let sum = cartItems.reduce((acc, item) => acc + item.cost * item.quantity, 0);
    const deliveryCharge = 50; // delivery charges (static for now)
    const tax = (5*sum)/100.0; // 5% GST
    const totalPrice = sum + deliveryCharge + tax;

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        dispatch( placeOrder({
            orderItems: cartItems,
            deliveryAddress: deliveryAddress,
            paymentMethod: paymentMethod,
            totalPrice: totalPrice
        }) );
    }

    useEffect(() => {
        if(success) {
            history.push(`/order/${order._id}`);
        }
    }, [history, success])

    return(
        <MainContainer>
            <BreadCrumbsContainer>
                <BreadCrumbs bc1 bc2 bc3 bc4/>
            </BreadCrumbsContainer>
            <SummaryContainer>
                <CheckoutColumn>
                    <CheckoutCard height={'auto'}>
                        <CheckoutHeading>ORDER SUMMARY</CheckoutHeading>
                        { cartItems.length === 0 ? (
                            <CartEmpty />
                        ) : (
                            cartItems.map((food, key) => {
                                return (
                                    <SummaryItemsCard key={key} food={food} />
                                )
                            })
                        ) }
                    </CheckoutCard>
                    <CheckoutCard height={'15vh'}>
                        <CheckoutHeading>DELIVERY ADDRESS</CheckoutHeading>
                        <CheckoutP>{deliveryAddress.address}, {deliveryAddress.city} - {deliveryAddress.zipcode}, {deliveryAddress.state}, {deliveryAddress.country}</CheckoutP>
                    </CheckoutCard>
                    <CheckoutCard height={'15vh'}>
                        <CheckoutHeading>PAYMENT METHOD</CheckoutHeading>
                        <CheckoutP>{paymentMethod}</CheckoutP>
                    </CheckoutCard>
                </CheckoutColumn>
                <CheckoutBillSummary>
                    <CheckoutHeading>Bill Summary</CheckoutHeading>
                    <CartBillDetailsContainer>
                        <CartSubHeading>Item Total</CartSubHeading>
                        <CartCostHeading><Rupee>&#8377;</Rupee>{" "}{sum}</CartCostHeading>
                    </CartBillDetailsContainer>
                    <CartBillDetailsContainer>
                        <CartSubHeading>Delivery Partner Fee</CartSubHeading>
                        <CartCostHeading><Rupee>&#8377;</Rupee>{" "}{deliveryCharge}</CartCostHeading>
                    </CartBillDetailsContainer>
                    <CartBillDetailsContainer>
                        <CartSubHeading>Taxes and Charges</CartSubHeading>
                        <CartCostHeading><Rupee>&#8377;</Rupee>{" "}{tax}</CartCostHeading>
                    </CartBillDetailsContainer>
                    <CartBillDetailsContainer>
                        <CartSubHeading style={{ color: '#333' }}>TO PAY</CartSubHeading>
                        <CartCostHeading><Rupee>&#8377;</Rupee>{" "}{sum + deliveryCharge + tax}</CartCostHeading>
                    </CartBillDetailsContainer>
                    <CartCheckoutButton onClick={ handlePlaceOrder }>PLACE ORDER</CartCheckoutButton>
                </CheckoutBillSummary>
            </SummaryContainer>
        </MainContainer>
    );
}

export default Summary;