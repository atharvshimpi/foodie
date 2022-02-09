import React from 'react';

import NavbarLanding from '../components/Navbar/NavbarLanding';
import SidenavLanding from '../components/Sidenav/SidenavLanding';
import Register from '../auth/Register';

/**
* @author
* @function RegisterPage
**/

const RegisterPage = ({ isOpen, toggleOpen, location }) => {
    return(
        <>
            <NavbarLanding isOpen={isOpen} toggleOpen={toggleOpen} />
            <SidenavLanding isOpen={isOpen} toggleOpen={toggleOpen} />
            <Register location={location} />
        </>
    );
}

export default RegisterPage;