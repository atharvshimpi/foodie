import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { register, isUserAuthenticated } from "../actions/authActions";

import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import { TextField, InputAdornment, IconButton, FormControl, FormControlLabel, FormHelperText, Checkbox, CircularProgress, withStyles } from "@material-ui/core";
import { AuthContainer, AuthHeading, AuthForm, AuthInputWrapper, AuthButton } from "./Elements";

/**
* @author
* @function Register
**/

const initialState = { email: '', name: '', password: '', confirmPassword: '' };

const Register = ({ location }) => {
    const [userData, setUserData] = useState(initialState);
    const [agreedTerms, setAgreedTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const area = JSON.parse(localStorage.getItem('location'));
    const auth = useSelector(state => state.auth);
    const { isAuthenticated, success } = auth;
    const redirect = location.search ? location.search.split('=')[1] : `/${area}/restaurants`;
    const history = useHistory();
    const dispatch = useDispatch();

    // If user is logged in, redirect user to home
    useEffect(() => {
        if(!isAuthenticated) {
            dispatch( isUserAuthenticated() );
        }
        if(isAuthenticated) {
            history.push(redirect);
        }
        if(success) {
            history.push('/login');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, history, isAuthenticated, success]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( register( {...userData, agreedTerms: agreedTerms } ) );
    }

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.id]: e.target.value });
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return(
        <AuthContainer>
            <AuthHeading>New to foodie? SIGN UP</AuthHeading>
            <AuthForm onSubmit={ handleSubmit }>
                <AuthInputWrapper>
                    <TextField 
                        error={ (auth.email || auth.emailNotFound) ? true : false }
                        onChange={ handleChange }
                        value={ userData.email }
                        id="email"
                        fullWidth 
                        label="Email"
                        helperText={ (auth.email) ? auth.email : auth.emailNotFound }
                        variant="filled" 
                        type="email" 
                    />
                </AuthInputWrapper>
                <AuthInputWrapper>
                    <TextField 
                        error={ (auth.name) ? true : false }
                        onChange={ handleChange }
                        value={ userData.name }
                        id="name"
                        fullWidth 
                        label="Name" 
                        helperText={ auth.name }
                        variant="filled" 
                        type= "text" 
                    />
                </AuthInputWrapper>
                <AuthInputWrapper>
                    <TextField 
                        error={ (auth.password || auth.passwordLength || auth.passwordIncorrect) ? true : false }
                        onChange={ handleChange }
                        value={ userData.password }
                        id="password"
                        fullWidth 
                        label="Password" 
                        helperText={ (auth.password) ? auth.password : ((auth.passwordLength ? auth.passwordLength : auth.passwordIncorrect )) }
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
                    <TextField 
                        error={ (auth.confirmPassword) ? true : false }
                        onChange={ handleChange }
                        value={ userData.confirmPassword }
                        id="confirmPassword"
                        fullWidth 
                        label="Confirm Password" 
                        helperText={ auth.confirmPassword }
                        variant="filled" 
                        type="password" 
                    />
                </AuthInputWrapper>
                <AuthInputWrapper>
                    <FormControl error={!agreedTerms}>
                        <FormControlLabel
                            control={
                                <OrangeCheckbox 
                                    checked={ agreedTerms } 
                                    onChange={ () => setAgreedTerms(!agreedTerms) } 
                                    name="checkbox" 
                                />
                            }
                            label="Agree to terms & conditions"
                        />
                        <FormHelperText>{ auth.agreedTerms }</FormHelperText>
                    </FormControl>
                </AuthInputWrapper>
                <AuthInputWrapper>
                    <AuthButton type="submit">
                        { auth.loading ? <CircularProgress size="2rem" /> : 'SIGN UP'}
                    </AuthButton>
                </AuthInputWrapper>
            </AuthForm>
        </AuthContainer>
    );
}

export default Register;

const OrangeCheckbox = withStyles({
    root: {
      color: 'rgba(252,128,25,0.92)',
      '&$checked': {
        color: 'rgba(252,128,25,0.92)',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);