import React from 'react';
import { Link } from "react-router-dom";

const LoginComponent = (props) => {
    // function loginHandler() {
    //     console.log("buton");
    //     console.log(this.state.users);
    //   }
        return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <a className='btn btn-primary' href='/peme'>
                {/* <button type="submit" className="btn btn-primary ">
                    Submit
                </button> */}
                Sing in
            </a>
        </form>
        );
      }
export default LoginComponent;
