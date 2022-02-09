import React from "react";

import posterAnimation from "../videos/foodie.mp4";
import { SidenavContainer, SidenavHeader, SidenavHeading, SidenavCloseBtn, SidenavHr, SidenavLinksWrapper, SidenavLink, SidenavVideoWrapper, Video } from "./Elements";
import { AiOutlineClose } from "react-icons/ai";

/**
* @author
* @function SidenavLanding
**/

const SidenavLanding = ({ isOpen, toggleOpen }) => {
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
                <SidenavLink to="/aboutus">Login</SidenavLink>
                <SidenavLink to="/privacy">Register</SidenavLink>
            </SidenavLinksWrapper>
            <SidenavVideoWrapper>
                <Video 
                    autoPlay
                    muted
                    src={ posterAnimation } 
                    loop 
                    type="video/mp4"
                />
            </SidenavVideoWrapper>
        </SidenavContainer>
    );
}

export default SidenavLanding;