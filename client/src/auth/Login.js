import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login, isUserAuthenticated } from "../actions/authActions";

import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import { TextField, InputAdornment, IconButton, FormControlLabel, Checkbox, CircularProgress, withStyles } from "@material-ui/core";
import { AuthContainer, AuthHeading, AuthForm, AuthInputWrapper, AuthP, AuthLink, AuthButton } from "./Elements";

/**
* @author
* @function Login
**/

const initialState = { email: '', password: '' };

const Login = ({ location }) => {
    const [userData, setUserData] = useState(initialState);
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const area = JSON.parse(localStorage.getItem('location'));
    const auth = useSelector(state => state.auth);
    const { isAuthenticated } = auth;
    const dispatch = useDispatch();

    // If user is logged in, redirect user to home
    useEffect(() => {
        const redirect = location.search ? location.search.split('=')[1] : `/${area}/restaurants`;

        if(!isAuthenticated) {
            dispatch( isUserAuthenticated() );
        }
        if(isAuthenticated) {
            window.location.assign(redirect);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, isAuthenticated]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( login( {...userData, rememberMe: rememberMe} ) );
    }

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.id]: e.target.value });
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return(
        <AuthContainer>
            <AuthHeading>Have an account? LOG IN</AuthHeading>
            <AuthForm onSubmit={ handleSubmit }>
                <AuthInputWrapper>
                    <TextField 
                        error={ (auth.email || auth.emailExists) ? true : false }
                        onChange={ handleChange }
                        value={ userData.email }
                        id="email"
                        fullWidth 
                        label="Email"
                        helperText={ (auth.email) ? auth.email : auth.emailExists }
                        variant="filled" 
                    />
                </AuthInputWrapper>
                <AuthInputWrapper>
                    <TextField 
                        error={ (auth.password || auth.passwordIncorrect) ? true : false }
                        onChange={ handleChange }
                        value={ userData.password }
                        id="password"
                        fullWidth 
                        label="Password"
                        helperText={ (auth.password) ? auth.password : auth.passwordIncorrect }
                        variant="filled" 
                        type={ (showPassword) ? 'password' : 'text' }
                        InputProps={{ endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={ handleShowPassword }>
                                { (showPassword) ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            )
                        }}
                    />
                </AuthInputWrapper>
                <AuthInputWrapper>
                    <FormControlLabel
                        control={
                            <OrangeCheckbox 
                                checked={ rememberMe } 
                                onChange={ () => setRememberMe(!rememberMe) } 
                                name="checkbox" 
                            />
                        }
                        label="Remember Me"
                    />
                </AuthInputWrapper>
                <AuthInputWrapper style={{ margin: '0' }}>
                    <AuthP>
                        Forgot Password? <AuthLink>Click Here</AuthLink>
                    </AuthP>
                </AuthInputWrapper>
                <AuthInputWrapper>
                    <AuthButton type="submit">
                        { auth.loading ? <CircularProgress size="2rem" /> : 'LOG IN'}
                    </AuthButton>
                </AuthInputWrapper>
            </AuthForm>
        </AuthContainer>
    );
}

export default Login;

const OrangeCheckbox = withStyles({
    root: {
      color: 'rgba(252,128,25,0.92)',
      '&$checked': {
        color: 'rgba(252,128,25,0.92)',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);