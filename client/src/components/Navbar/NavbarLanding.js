import React from 'react';
import { Link } from "react-router-dom";

import { NavContainer, NavbarButton, NavbarHeading, NavbarFaBars, NavbarLinksWrapper } from './Elements';
import { FaBars } from 'react-icons/fa';

/**
* @author
* @function NavbarLanding
**/

const NavbarLanding = ({ isOpen, toggleOpen }) => {

    return(
        <NavContainer>
            <NavbarFaBars isOpen={ isOpen } onClick={ toggleOpen }>
                <FaBars />
            </NavbarFaBars>
            <NavbarHeading isOpen={ isOpen } to="/">Foodie</NavbarHeading>
            <NavbarLinksWrapper>
                
            </NavbarLinksWrapper>
            <NavbarLinksWrapper>
                <Link to='/login'><NavbarButton>Login</NavbarButton></Link>
                <Link to='/register'><NavbarButton>Register</NavbarButton></Link>
            </NavbarLinksWrapper>
        </NavContainer>
    );
}

export default NavbarLanding;