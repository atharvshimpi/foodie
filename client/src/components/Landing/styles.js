import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: '60px',
        minHeight: 'calc(100vh - 60px)',
        background: 'rgba(403, 44, 63, 0.1)',
        '@media (max-width: 768px)': {
            minHeight: 'calc(100vh)'
        }
    },
    top: {
        display: 'flex',
        width: '100%',
        '@media (max-width: 768px)': {
            flexDirection: 'column'
        }
    },
    img: {
        maxWidth: '70%',
        minHeight: 'calc(100vh - 60px)',
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    topRight: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '30px 10px'
    },
    inputContainer: {
        minWidth: '100%'
    },
    textField: {
        margin: '5px 0'
    },
    areas: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        '@media (max-width: 768px)': {
            display: 'inline-block',
            textAlign: 'center',
            fontSize: '100%',
            margin: '10px 0'
        }
    },
    links: {
        textDecoration: 'none',
        margin: '15px 25px 15px 0',
        color: '#333',
        '&:hover': {
            color: 'orange',
        }
    },
    button: {
        border: '0.5px solid orange',
        borderRadius: '0',
        background: 'orange',
        boxShadow: '0 1px 2px #101010',
        '&:hover': {
            background: 'orange',
            boxShadow: 'none'
        } 
    },
    typewriter: {
        fontSize: '2rem',
        fontWeight: 'bold',
        letterSpacing: '3px',
        '@media (max-width: 768px)': {
            fontSize: '24px'
        }
    },
    videoContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
        '@media (max-width: 768px)': {
            marginTop: '-100px'
        }
    },
    video: {
        width: '200px',
    },
    margin: {
        letterSpacing: '3px',
        color: '#333'   
    }
});