import React from 'react';
import { useHistory } from "react-router-dom";
import { Paper, Button } from "@material-ui/core";
import { useStyles } from "./styles";

/**
* @author
* @function NotFound
**/

const NotFound = (props) => {
    const history = useHistory();
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Paper className={classes.paper}>
                <h1>ERROR 404 - NotFound</h1>
                <Button onClick={() => history.goBack()}>Click Here To Go Back</Button>
                <div className={classes.imgContainer}>
                    <img src="https://foodiey.netlify.app/static/media/error404.6c6e4297.png" alt="Error 404" width="400px" />
                </div>
            </Paper>
        </div>
    );
}

export default NotFound;