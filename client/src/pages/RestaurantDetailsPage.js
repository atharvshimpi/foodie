import React from "react";

import NavbarRestaurantDetails from "../components/Navbar/NavbarRestaurantDetails";
import SidenavRestaurants from "../components/Sidenav/SidenavRestaurants";
import RestaurantDetails from "../containers/RestaurantDetails/RestaurantDetails";

/**
* @author
* @function RestaurantDetailsPage
**/

const RestaurantDetailsPage = ({ isOpen, toggleOpen }) => {
    return(
        <>
            <NavbarRestaurantDetails isOpen={isOpen} toggleOpen={toggleOpen} />
            <SidenavRestaurants isOpen={isOpen} toggleOpen={toggleOpen} />
            <RestaurantDetails />        
        </>
    );
}

export default RestaurantDetailsPage;