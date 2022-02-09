import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import cartEmpty from "../../images/templates/emptyCart.png";

/**
* @author
* @function CartEmpty
**/

const CartEmpty = (props) => {
    const area = JSON.parse(localStorage.getItem('location'));

    return(
        <CartEmptyContainer>
            <CartEmptyHeading>Cart is Empty <CartEmptyLink to={`/${area}/restaurants`}>Click Here</CartEmptyLink> to go back</CartEmptyHeading>
            <CartEmptyImage src={ cartEmpty } alt="cart-empty" />
        </CartEmptyContainer>
    );
}

export default CartEmpty;

const CartEmptyContainer = styled.div`
    margin: 60px auto
`

const CartEmptyHeading = styled.h1`

`

const CartEmptyLink = styled(Link)`
    text-decoration: none;
    color: rgba(252,128,25,0.92);
`

const CartEmptyImage = styled.img`
    width: 500px;
`