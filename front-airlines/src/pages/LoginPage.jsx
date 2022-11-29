import React from 'react';
import LoginComponent from '../components/LoginComponent';

const LoginPage = () => {
    return (
        <div className=" d-flex justify-content-center" >
            <LoginComponent direction='./pages/FlightChooserPage'/>
        </div>
    );
}

export default LoginPage;

