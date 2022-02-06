import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import googleLogo from '../../../Images/google-icon.png';
import './login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const location = useLocation();
    const navigate = useNavigate();
    const destination = location.state?.from || '/';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                navigate(destination);
            })
    }
    return (
        <div className="login-box">
            <h2 className="text-color mt-5 mb-3"> Client Login with </h2>
            <Button onClick={handleGoogleLogin} className="rounded-pill google-btn mb-3"><img className="google-icon" src={googleLogo} alt="" /> Continue with Google </Button>
            <p> Don't have an google account? <Link to='' className="text-warning fw-bold">Create an account </Link> </p>
        </div>
    );
};

export default Login;