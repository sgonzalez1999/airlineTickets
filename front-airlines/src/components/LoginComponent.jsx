import React from 'react';
import { Link } from "react-router-dom";

const LoginComponent = () => {
        return (
        <form className='m-5'>
            <div className="m-4">
                <div className="d-flex justify-content-center" ><label htmlFor="exampleInputEmail1" className="form-label">Email</label></div>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="d-flex justify-content-center">
                <a className='btn btn-primary' href='/FlightChooserPage'>
                    Sing in
                </a>
            </div>
        </form>
        );
      }
export default LoginComponent;
