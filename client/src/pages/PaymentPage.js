import React from "react";

import NavbarRestaurants from '../components/Navbar/NavbarRestaurants';
import SidenavRestaurants from '../components/Sidenav/SidenavRestaurants';
import Payment from "../containers/Checkout/Payment";

/**
* @author
* @function PaymentPage
**/

const PaymentPage = ({ isOpen, toggleOpen }) => {
    return(
        <>
            <NavbarRestaurants isOpen={isOpen} toggleOpen={toggleOpen} />
            <SidenavRestaurants isOpen={isOpen} toggleOpen={toggleOpen} />
            <Payment />
        </>
    );
}

export default PaymentPage;