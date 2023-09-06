import React from "react";

import { BsSearch } from "react-icons/bs";
import { FiPercent } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { GoSignIn } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Button } from "@material-ui/core";
import { SidenavContainer, SidenavHeader, SidenavHeading, SidenavCloseBtn, SidenavHr, SidenavLinksWrapper, SidenavLink, SidenavVideoWrapper } from "./Elements";
import { AiOutlineClose } from "react-icons/ai";

/**
* @author
* @function SidenavRestaurants
**/

const SidenavRestaurants = ({ isOpen, toggleOpen }) => {
    return(
        <SidenavContainer isOpen={ isOpen }>
            <SidenavHeader>
                <SidenavHeading to="/">Foodie</SidenavHeading>
                <SidenavCloseBtn onClick={ toggleOpen }>
                    <AiOutlineClose />
                </SidenavCloseBtn>
            </SidenavHeader>
            <SidenavHr />
            <SidenavLinksWrapper onClick={ toggleOpen }>
                <SidenavLink to="/search">
                    <Button
                        startIcon={<BsSearch />}
                    >
                        Search
                    </Button>
                </SidenavLink>
                <SidenavLink to="/offers">
                    <Button
                        startIcon={<FiPercent />}
                    >
                        Offers
                    </Button>
                </SidenavLink>
                <SidenavLink to="/help">
                    <Button
                        startIcon={<BiHelpCircle />}
                    >
                      Help
                    </Button>
                </SidenavLink>
                <SidenavLink to="/signin">
                    <Button
                        startIcon={<GoSignIn />}
                    >
                        Signin
                    </Button>
                </SidenavLink>
                <SidenavLink to="/cart">
                    <Button
                        startIcon={<AiOutlineShoppingCart />}
                    >
                      Cart
                    </Button>
                </SidenavLink>
            </SidenavLinksWrapper>
            <SidenavVideoWrapper>
                
            </SidenavVideoWrapper>
        </SidenavContainer>
    );
}

export default SidenavRestaurants;