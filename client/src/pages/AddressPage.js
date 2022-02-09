import React from "react";

import NavbarRestaurants from '../components/Navbar/NavbarRestaurants';
import SidenavRestaurants from '../components/Sidenav/SidenavRestaurants';
import Address from "../containers/Checkout/Address";

/**
* @author
* @function AddressPage
**/

const AddressPage = ({ isOpen, toggleOpen }) => {
    return(
        <>
            <NavbarRestaurants isOpen={isOpen} toggleOpen={toggleOpen} />
            <SidenavRestaurants isOpen={isOpen} toggleOpen={toggleOpen} />
            <Address />
        </>
    );
}

export default AddressPage;