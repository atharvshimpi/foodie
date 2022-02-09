import React from "react";

import { SidebarRestaurantsData } from "./Data";
import { SidebarContainer, Ul, Li, Title, Avatar } from "./Elements";

/**
* @author
* @function SidebarRestaurants
**/

const SidebarRestaurants = (props) => {
    return(
        <SidebarContainer>
            <Ul>
            {SidebarRestaurantsData.map((val, key) => {
                return (
                    <Li
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={val.offset}
                        to={val.link}
                        key={key}
                    >
                        <Title><Avatar>{val.icon}</Avatar>{" "}{val.title}</Title>
                    </Li>
                )
            })}
            </Ul>
        </SidebarContainer>
    );
}

export default SidebarRestaurants;