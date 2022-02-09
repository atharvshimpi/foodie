import React from "react";

import NavbarRestaurants from '../components/Navbar/NavbarRestaurants';
import SidenavRestaurants from '../components/Sidenav/SidenavRestaurants';
import MyOrders from "../containers/User/MyOrders";

/**
* @author
* @function MyOrdersPage
**/

const MyOrdersPage = ({ isOpen, toggleOpen }) => {
    return(
        <>
            <NavbarRestaurants isOpen={isOpen} toggleOpen={toggleOpen} />
            <SidenavRestaurants isOpen={isOpen} toggleOpen={toggleOpen} />
            <MyOrders />
        </>
    );
}

export default MyOrdersPage;