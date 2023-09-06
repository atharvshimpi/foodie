import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cartActions";

import CartItemsCard from "../../components/Cards/CartItemsCard";
import CartEmpty from "../../components/Misc/CartEmpty";

import { CartContainer, CartContent, CartBottom, CartHeading, CartBillDetailsContainer, CartSubHeading, CartCostHeading, CartCheckoutButton, Rupee } from "./Elements";

/**
* @author
* @function Cart
**/

const Cart = ({ match }) => {
    const foodId = match.params.id;
    const restId = match.params.restId;
    const historyy = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(foodId) {
            dispatch( addToCart(restId, foodId, 1, historyy) )
        }
    }, [dispatch, historyy, restId, foodId])

    const { cartItems } = useSelector(state => state.cart);
    let sum = cartItems.reduce((acc, item) => acc + item.cost * item.quantity, 0);
    const deliveryCharge = 50; // delivery charges (static for now)
    const tax = (5*sum)/100.0; // 5% GST

    return(
        <CartContainer>
            <CartContent>
                {   cartItems.length === 0 ? 
                    <CartEmpty /> 
                    :
                    (
                        cartItems.map((food, key) => {
                            return (
                                <CartItemsCard key={key} food={food} />
                            )
                        })
                    )
                }
            </CartContent>
            <CartBottom>
                <CartHeading>Bill Details (<b style={{ color: '#fc8019eb' }}>{ cartItems.reduce((acc, item) => acc + item.quantity, 0) }</b> items)</CartHeading>
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
                <CartCheckoutButton disabled={cartItems.length === 0} onClick={ () => { window.location.assign('/checkout') } }>CHECKOUT</CartCheckoutButton>
            </CartBottom>
        </CartContainer>
    );
}

export default Cart;

 // login?redirect=checkout