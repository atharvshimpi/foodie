import React from 'react';

import NavbarRestaurants from '../components/Navbar/NavbarRestaurants';
import SidenavRestaurants from '../components/Sidenav/SidenavRestaurants';
import Restaurants from '../containers/Restautants/Restaurants';

/**
* @author
* @function RestaurantsPage
**/

const RestaurantsPage = ({ isOpen, toggleOpen }) => {
    return(
        <>
            <NavbarRestaurants isOpen={isOpen} toggleOpen={toggleOpen} />
            <SidenavRestaurants isOpen={isOpen} toggleOpen={toggleOpen} />
            <Restaurants />
        </>
    );
}

export default RestaurantsPage;