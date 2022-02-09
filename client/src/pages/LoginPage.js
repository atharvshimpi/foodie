import React from 'react';

import NavbarLanding from '../components/Navbar/NavbarLanding';
import SidenavLanding from '../components/Sidenav/SidenavLanding';
import Login from '../auth/Login';

/**
* @author
* @function LoginPage
**/

const LoginPage = ({ isOpen, toggleOpen, location }) => {
    return(
        <>
            <NavbarLanding isOpen={isOpen} toggleOpen={toggleOpen} />
            <SidenavLanding isOpen={isOpen} toggleOpen={toggleOpen} />
            <Login location={location} />
        </>
    );
}

export default LoginPage;