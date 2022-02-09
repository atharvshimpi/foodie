import React from "react";

import NavbarRestaurants from '../components/Navbar/NavbarRestaurants';
import SidenavRestaurants from '../components/Sidenav/SidenavRestaurants';
import OrderDetails from "../containers/Checkout/OrderDetails";

/**
* @author
* @function OrderDetailsPage
**/

const OrderDetailsPage = ({ isOpen, toggleOpen }) => {
    return(
        <>
            <NavbarRestaurants isOpen={isOpen} toggleOpen={toggleOpen} />
            <SidenavRestaurants isOpen={isOpen} toggleOpen={toggleOpen} />
            <OrderDetails />
        </>
    );
}

export default OrderDetailsPage;