import React from 'react';

import NavbarRestaurants from '../components/Navbar/NavbarRestaurants';
import SidenavRestaurants from '../components/Sidenav/SidenavRestaurants';
import Cart from '../containers/Cart/Cart';

/**
* @author
* @function CartPage
**/

const CartPage = ({ isOpen, toggleOpen, history, match, location }) => {
    return(
        <>
            <NavbarRestaurants isOpen={isOpen} toggleOpen={toggleOpen} />
            <SidenavRestaurants isOpen={isOpen} toggleOpen={toggleOpen} />
            <Cart history={history} match={match} location={location} />
        </>
    );
}

export default CartPage;