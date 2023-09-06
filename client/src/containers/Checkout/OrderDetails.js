import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import SummaryItemsCard from "../../components/Cards/SummaryItemsCard";
import CartEmpty from "../../components/Misc/CartEmpty";
import { CheckoutContainer, CheckoutColumn, CheckoutCard, CheckoutP, CheckoutHeading } from "./Elements";
import { fetchOrderById } from "../../actions/orderActions";

/**
* @author
* @function OrderDetails
**/

const OrderDetails = (props) => {
    const area = JSON.parse(localStorage.getItem('location'));
    const { id } = useParams();
    const dispatch = useDispatch();
    const { orderDetails } = useSelector(state => state.order);

    useEffect(() => {
        dispatch( fetchOrderById(id) );
        setTimeout(function() {
            window.location.replace(`/${area}/restaurants`);
        }, 5000);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, id])

    return(
        <CheckoutContainer style={{ marginTop: '60px', overflow: 'hidden' }}>
            <CheckoutColumn style={{ width: '96%' }}>
                <CheckoutCard>
                    <CheckoutHeading>ORDER PLACED !!! </CheckoutHeading>
                    <CheckoutP>Order ID {orderDetails._id}</CheckoutP>
                </CheckoutCard>
                <CheckoutCard height={'auto'}>
                    <CheckoutHeading>ORDER SUMMARY</CheckoutHeading>
                    { 1 === 0 ? (
                        <CartEmpty />
                    ) : (
                        orderDetails.orderItems.map((food, key) => {
                            return (
                                <SummaryItemsCard key={key} food={food} />
                            )
                        })
                    ) }
                </CheckoutCard>
                <CheckoutCard height={'15vh'}>
                    <CheckoutHeading>DELIVERY ADDRESS</CheckoutHeading>
                    <CheckoutP>{orderDetails.deliveryAddress.address}, {orderDetails.deliveryAddress.city} - {orderDetails.deliveryAddress.zipcode}, {orderDetails.deliveryAddress.state}, {orderDetails.deliveryAddress.country}</CheckoutP>
                </CheckoutCard>
                <CheckoutCard height={'15vh'}>
                    <CheckoutHeading>PAYMENT METHOD</CheckoutHeading>
                    <CheckoutP>{orderDetails.paymentMethod}</CheckoutP>
                </CheckoutCard>
            </CheckoutColumn>
        </CheckoutContainer>
    );
}

export default OrderDetails;