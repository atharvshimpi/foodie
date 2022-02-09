import React from "react";

import NavbarRestaurants from '../components/Navbar/NavbarRestaurants';
import SidenavRestaurants from '../components/Sidenav/SidenavRestaurants';
import Summary from '../containers/Checkout/Summary';

/**
* @author
* @function SummaryPage
**/

const SummaryPage = ({ isOpen, toggleOpen }) => {
    return(
        <>
            <NavbarRestaurants isOpen={isOpen} toggleOpen={toggleOpen} />
            <SidenavRestaurants isOpen={isOpen} toggleOpen={toggleOpen} />
            <Summary />
        </>
    );
}

export default SummaryPage;