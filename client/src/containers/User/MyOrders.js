import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";

import { fetchMyOrders } from "../../actions/orderActions";

import SummaryItemsCard from "../../components/Cards/SummaryItemsCard";
import OrdersEmpty from "../../components/Misc/OrdersEmpty";
import { UserCard, UserCardContainer, UserCardHeading, UserContainer, UserCardBackground, UserCardSubContainer, UserCardPayment,  } from "./Elements";

/**
* @author
* @function MyOrders
**/

const MyOrders = (props) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const area = JSON.parse(localStorage.getItem('location'));
    const { myOrders } = useSelector(state => state.order);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( fetchMyOrders() )
        if(!user) {
            history.push(`/${area}/restaurants`);
        }
    }, [])

    return(
        <UserContainer>
            { myOrders.length === 0 ? (
                <OrdersEmpty />
            ) : (
                <UserCardContainer>
                    { myOrders.map((order, key) => {
                        return (
                            <UserCard key={key}>
                                <UserCardHeading>Order Number - <UserCardBackground>{order._id}</UserCardBackground> ( {moment(order.createdAt).fromNow()} ) </UserCardHeading>
                                <UserCardSubContainer>
                                    <UserCardPayment>{order.paymentMethod}</UserCardPayment>
                                </UserCardSubContainer>
                                <UserCardSubContainer>
                                    {order.orderItems.map((food, key1) => {
                                        return (
                                            <SummaryItemsCard key={key1} food={food} />
                                        )
                                    })}
                                </UserCardSubContainer>
                            </UserCard>
                        )
                    } )}
                </UserCardContainer>
            ) }
        </UserContainer>
    );
}

export default MyOrders;