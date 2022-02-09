import styled from "styled-components";
import { Link } from "react-scroll";

export const SidebarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    -webkit-position: sticky;
    height: calc(100vh - 60px);
    width: 300px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgb(48 56 97 / 20%);
    top: 60px;
    left: 0;

    @media screen and (max-width: 510px) {
        display: none;
    }
`

export const SidebarRestaurantDetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    -webkit-position: sticky;
    max-height: calc(65vh);
    min-width: 250px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgb(48 56 97 / 20%);
    top: calc(35vh);
    left: 0;
`

export const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(252, 128, 25, 0.92);
    width: 25px;
    height: 25px;
    padding: 15px;
    border-radius: 120px;
    margin-right: 5px;
`

export const Ul = styled.ul`
    width: 100%;
    height: 100%;
    padding: 0;
`

export const Li = styled(Link)`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    list-style-type: none;
    width: 100%;
    cursor: pointer;

    &:hover {
        background: rgba(252,128,25,0.92);
        color: #fff;
        ${Avatar} {
            background: #fff;
            color: rgba(252,128,25,0.92);
            transform: scale(1.2);
            transition: transform .5s cubic-bezier(.215,.61,.355,1);
            margin-right: 10px;
        }
    }

    &.active {
        background: rgba(252,128,25,0.92);
        color: #fff;
        ${Avatar} {
            background: #fff;
            color: rgba(252,128,25,0.92);
            margin-right: 10px;
        }
    }
`

export const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
`
