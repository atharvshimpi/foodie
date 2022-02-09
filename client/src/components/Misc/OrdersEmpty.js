import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import EmptyOrdersPage from "../../images/templates/emptyOrdersPage.png";

/**
* @author
* @function OrdersEmpty
**/

const OrdersEmpty = (props) => {
    const area = JSON.parse(localStorage.getItem('location'));
    
    return(
        <OrdersEmptyContainer>
            <OrdersEmptyHeading>You have no Orders <OrdersEmptyLink to={`/${area}/restaurants`}>Click Here</OrdersEmptyLink> to go back</OrdersEmptyHeading>
            <OrdersEmptyImage src={ EmptyOrdersPage } alt="cart-empty" />
        </OrdersEmptyContainer>
    );
}

export default OrdersEmpty;

const OrdersEmptyContainer = styled.div`
    margin: 60px auto
`

const OrdersEmptyHeading = styled.h1`

`

const OrdersEmptyLink = styled(Link)`
    text-decoration: none;
    color: rgba(252,128,25,0.92);
`

const OrdersEmptyImage = styled.img`
    width: 500px;
`