import React from "react";

import { Link, Breadcrumbs, makeStyles } from "@material-ui/core";


/**
* @author
* @function BreadCrumbs
**/

const useStyles = makeStyles({
    breadCrumbs: {
        
    },
    link: {
        fontSize: '65%',
        fontWeight: 'bold'
    }
});

const BreadCrumbs = ({ bc1, bc2, bc3, bc4 }) => {
    const classes = useStyles();

    return(
        <Breadcrumbs className={classes.breadCrumbs}>
            { bc1 ? (
                <Link className={classes.link} style={{ color: 'green' }} onClick={ () => { window.location.assign('/login') } }>
                    Logged In?
                </Link>
            ) : (
                <Link className={classes.link} color="inherit">
                    Logged In?
                </Link>
            ) }

            { bc2 ? (
                <Link className={classes.link} style={{ color: 'green' }} onClick={ () => { window.location.assign('/checkout') } }>
                    Delivery Address
                </Link>
            ) : (
                <Link className={classes.link} color="inherit">
                    Delivery Address
                </Link>
            ) }

            { bc3 ? (
                <Link className={classes.link} style={{ color: 'green' }} onClick={ () => { window.location.assign('/payment') } }>
                    Payment Setup
                </Link>
            ) : (
                <Link className={classes.link} color="inherit">
                    Payment Setup
                </Link>
            ) }

            { bc4 ? (
                <Link className={classes.link} style={{ color: 'green' }} onClick={ () => { window.location.assign('/placeorder') } }>
                    Place Order
                </Link>
            ) : (
                <Link className={classes.link} color="inherit">
                    Place Order
                </Link>
            ) }
      </Breadcrumbs>
    );
}

export default BreadCrumbs;