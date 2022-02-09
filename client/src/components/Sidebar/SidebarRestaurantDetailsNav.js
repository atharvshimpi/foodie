import React from "react";

import { SidebarRestaurantDetailsNavData } from "./Data";
import { SidebarRestaurantDetailsContainer, Ul, Li, Title } from "./Elements";

/**
* @author
* @function SidebarRestaurantDetailsNav
**/

const SidebarRestaurantDetailsNav = (props) => {
    return(
        <SidebarRestaurantDetailsContainer>
            <Ul>
            {SidebarRestaurantDetailsNavData.map((val, key) => {
                return (
                    <Li
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={-35*window.innerHeight/100 - 60}
                        to={val.link}
                        key={key}
                    >
                        <Title>{val.title}</Title>
                    </Li>
                );
            })}
            </Ul>
        </SidebarRestaurantDetailsContainer>
    );
}

export default SidebarRestaurantDetailsNav;