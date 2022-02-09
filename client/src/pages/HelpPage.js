import React from 'react';

import NavbarLanding from '../components/Navbar/NavbarLanding';
import SidenavLanding from '../components/Sidenav/SidenavLanding';
import Help from '../components/Misc/Help';

/**
* @author
* @function LandingPage
**/

const LandingPage = ({ isOpen, toggleOpen }) => {
    return(
        <>
            <NavbarLanding isOpen={isOpen} toggleOpen={toggleOpen} />
            <SidenavLanding isOpen={isOpen} toggleOpen={toggleOpen} />
            <Help />
        </>
    );
}

export default LandingPage;