import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
        background: 'rgb(233, 236, 238)'
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '80%',
        minHeight: '80vh',
        background: 'rgb(255, 255, 255)',
        borderRadius: '10px'
    },
    imgContainer: {
        marginTop: '40px'
    }
})