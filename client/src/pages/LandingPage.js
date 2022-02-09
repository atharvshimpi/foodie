import React from 'react';

import NavbarLanding from '../components/Navbar/NavbarLanding';
import SidenavLanding from '../components/Sidenav/SidenavLanding';
import Landing from '../components/Landing/Landing';

/**
* @author
* @function LandingPage
**/

const LandingPage = ({ isOpen, toggleOpen }) => {
    return(
        <>
            <NavbarLanding isOpen={isOpen} toggleOpen={toggleOpen} />
            <SidenavLanding isOpen={isOpen} toggleOpen={toggleOpen} />
            <Landing />
        </>
    );
}

export default LandingPage;