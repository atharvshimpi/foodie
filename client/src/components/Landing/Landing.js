import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import Typewriter from "typewriter-effect";
import { Link, useHistory } from "react-router-dom";

import { Button, TextField, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import posterAnimation from "../videos/foodie.mp4";
import poster from "../../images/poster.jpg";
import { setLocation } from '../../actions/locationActions';

/**
* @author
* @function Landing
**/

const Landing = (props) => {
    const [area, setArea] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleClick = () => {
        if(area) {
            dispatch( setLocation(area, history) )
            history.push(`/${area}/restaurants`);
        } else {
            window.alert("Please Enter an Area");
        }
    }

    return(
        <div className={classes.container}>
            <div className={classes.top}>
                <div className={classes.topRight}>
                    <div className={classes.videoContainer}>
                        <video 
                            className={classes.video}
                            autoPlay
                            muted
                            src={posterAnimation} 
                            loop 
                            type="video/mp4"
                        />
                    </div>
                    <div className={classes.typewriter}>
                        <Typewriter  
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                .typeString("Late Night Cravings?")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Movie Nights?")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Tired of Cooking?")
                                .pauseFor(1000)
                                .deleteAll()
                                .start()
                            }}
                        />
                    </div>
                    <h3 className={classes.margin}>Order from your favourite restaurants!</h3>
                    <div className={classes.inputContainer}>
                        <TextField
                            fullWidth
                            value={area}
                            onChange={ (e) => { setArea(e.target.value) } }
                            className={classes.textField}
                            label="Area" 
                            variant="outlined" 
                        />
                        <Typography component="div" variant="h6" className={classes.areas}>
                            <Link onClick={ () => { dispatch( setLocation('Pune') ) } } className={classes.links} to={`/Pune/restaurants`}>Pune </Link>
                            <Link onClick={ () => { dispatch( setLocation('Mumbai') ) } } className={classes.links} to={`/Mumbai/restaurants`}>Mumbai </Link>
                            <Link onClick={ () => { dispatch( setLocation('Goa') ) } } className={classes.links} to={`/Goa/restaurants`}>Goa </Link>
                            <Link onClick={ () => { dispatch( setLocation('Bangalore') ) } } className={classes.links} to={`/Bangalore/restaurants`}>Bangalore </Link>
                            <Link onClick={ () => { dispatch( setLocation('Delhi') ) } } className={classes.links} to={`/Delhi/restaurants`}>Delhi </Link>
                        </Typography>
                        <Button fullWidth onClick={ handleClick } className={classes.button}>Search Food</Button>
                    </div>
                </div>
                <img className={classes.img} src={poster} alt='poster' />
            </div>
            <div className={classes.middle}>

            </div>
            <div className={classes.bottom}>
                
            </div>
        </div>
    );
}

export default Landing;