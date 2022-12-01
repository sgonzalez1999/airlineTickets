import React, {useState} from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const LoginComponent = () => {
    
    const url = "http://localhost:9000/users"


    const navigate = useNavigate();

    const [name, setName] = useState('');

    const [uri, setUri] = useState('/');

    const handleChange = event => {
        setName(event.target.value);
    };



    function login() {
        axios.get(url+"/"+name).then(function (returned) {
            if(returned.status == "200"){
                navigate("/FlightChooserPage");
            }
        });
    }

        return (
        <form className='m-5'>
            <div className="m-4">
                <div className="d-flex justify-content-center" ><label htmlFor="exampleInputEmail1" className="form-label">Email</label></div>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} value={name}/>
            </div>
            <div className="d-flex justify-content-center">
                <Link className='btn btn-primary' onClick={() => login()}>
                    Sing in
                </Link>
            </div>
        </form>
        );
      }
export default LoginComponent;
