import React from 'react'
import styled from "styled-components";

/**
* @author
* @function Help
**/

const Help = (props) => {
    return(
        <HelpContainer>
            <HelpHeading>Help</HelpHeading>
            <HelpUl>
                <HelpLi>What is this site about?</HelpLi>
                <HelpP>It's a food ordering site, through which you can order your favourite food items from your favourite restaurants!</HelpP>
                <HelpLi>Can I order non - veg items?</HelpLi>
                <HelpP>Yes, you can order if the restaurants provides so.</HelpP>
                <HelpLi>Can I search for my favourite food?</HelpLi>
                <HelpP>Yes, by clicking on the search button on the navingation bar, you can do so.</HelpP>
                <HelpLi>Can I order from multiple restaurants?</HelpLi>
                <HelpP>Yes, you can order as many dishes from as many restaurants you want.</HelpP>
                <HelpLi>Can I see my orders?</HelpLi>
                <HelpP>Yes, you can see your orders in 'My Orders' section.</HelpP>
            </HelpUl>
        </HelpContainer>
    );
}

export default Help;

const HelpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: #e9ecee;
    margin-top: 60px;
    min-height: calc(100vh - 60px);
`

const HelpHeading = styled.h1`
    text-align: center;
    width: 100%;
`

const HelpUl = styled.ul`

`

const HelpLi = styled.li`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 50px;
`

const HelpP = styled.p`
    font-size: 1.2rem;
    font-family: Arial;
    color: #645e5e;
`