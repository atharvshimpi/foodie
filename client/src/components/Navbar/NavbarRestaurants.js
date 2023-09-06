import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { setLocation } from "../../actions/locationActions";
import { logout } from "../../actions/authActions";

import { Button, Menu, MenuItem, makeStyles } from "@material-ui/core";
import { ImLocation } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import { FiPercent } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import { GoSignIn } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { NavContainer, NavbarIcon, NavbarHeading, NavbarFaBars, NavbarLinksWrapper } from './Elements';
import { FaBars } from 'react-icons/fa';
import foodie from "../../images/foodie.png";

/**
* @author
* @function NavbarRestaurants
**/

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        marginRight: '5px'
    },
    button: {
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            background: 'rgb(215 98 0 / 92%)',
        },
        '&:focus': {
            transform: 'scale(1.1)'
        }
    },
    buttonArea: {
        color: '#fff',
        fontSize: '1.7rem',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            background: 'rgb(215 98 0 / 92%)',
        },
    }
});

const NavbarRestaurants = ({ isOpen, toggleOpen }) => {
    const area = JSON.parse(localStorage.getItem('location'));
    const user = JSON.parse(localStorage.getItem('user'));
    const [anchorEl, setAnchorEl] = useState(null);
    const [userAnchorEl, setUserAnchorEl] = useState(null);
    const { cartItems } = useSelector(state => state.cart);
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleOpenMenu = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleCloseMenu = (x) => {
        dispatch( setLocation(x) )
        setAnchorEl(null);
        window.location.assign(`/${x}/restaurants`);
    }

    return(
        <NavContainer>
            <NavbarFaBars isOpen={ isOpen } onClick={ toggleOpen }>
                <FaBars />
            </NavbarFaBars>
            <NavbarIcon to={`/${area}/restaurants`}><img src={foodie} alt="icon" width="60px" /></NavbarIcon>
            { area && 
                <NavbarHeading to={`/${area}/restaurants`}>
                    <Button 
                        className={classes.buttonArea} 
                        onClick={ handleOpenMenu } 
                        aria-controls="simple-menu" 
                        aria-haspopup="true" 
                    >
                        <ImLocation />{area}
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={ handleCloseMenu }
                    >
                        {['Pune', 'Mumbai', 'Goa', 'Bangalore', 'Delhi'].map((x) => {
                            return (
                                <MenuItem key={x} onClick={ () => handleCloseMenu(x) }>{x}</MenuItem>
                            )
                        })}
                    </Menu>
                </NavbarHeading>
            }
            <NavbarLinksWrapper>
                
            </NavbarLinksWrapper>
            <NavbarLinksWrapper>
                <Link className={classes.link} to='/search'>
                    <Button 
                        className={classes.button}
                        startIcon={<BsSearch />}        
                    >
                        Search
                    </Button>
                </Link>
                <Link className={classes.link} to='/offers'>
                    <Button 
                        className={classes.button}
                        startIcon={<FiPercent />}                               
                    >
                        Offers
                    </Button>
                </Link>
                <Link className={classes.link} to='/help'>
                    <Button 
                        className={classes.button}
                        startIcon={<BiHelpCircle />}
                    >
                        Help
                    </Button>
                </Link>
                { user ? (
                    <>
                        <Button 
                            className={classes.button}
                            startIcon={ <MdArrowDropDown /> }
                            onClick={ (e) => setUserAnchorEl(e.currentTarget) } 
                            aria-controls="user-dropdown" 
                            aria-haspopup="true" 
                        >
                            { user.name }
                        </Button>
                        <Menu
                            id="user-dropdown"
                            anchorEl={ userAnchorEl }
                            open={Boolean(userAnchorEl)}
                            onClose={ () => setUserAnchorEl(null) }
                            onClick={ () => console.log("Log: " + userAnchorEl) }
                        >
                            
                            <MenuItem onClick={ () => { window.location.assign('/myprofile') } }>My Profile</MenuItem>
                            <MenuItem onClick={ () => { window.location.assign('/myorders') } }>My Orders</MenuItem>
                            <MenuItem onClick={ () => { dispatch( logout(history) ) } }>Logout</MenuItem>
                        </Menu>
                    </>
                ) : (
                    <Link className={classes.link} to='/login'>
                        <Button 
                            className={classes.button}
                            startIcon={ <GoSignIn /> }
                        >
                            Sign In
                        </Button>
                    </Link>
                )}
                <Link className={classes.link} to='/cart'>
                    <Button 
                        className={classes.button}
                        startIcon={cartItems.length === 0 ? <AiOutlineShoppingCart /> : <FaShoppingCart />}
                    >
                        {cartItems.length === 0 ? 'Cart' : cartItems.length}
                    </Button>
                </Link>
            </NavbarLinksWrapper>
        </NavContainer>
    );
}

export default NavbarRestaurants;