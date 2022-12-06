import React, { useEffect, useState } from 'react';
import { LoginCustomer } from './LoginCustomer';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link, useHistory,useNavigate } from "react-router-dom";
import { Register } from './Register';
import logout from "../services/auth.service";

export const Navbar2 = () => {
    const [check,setCheck] = useState(true);
    const [checkcustomer,setCheckcustomer]=useState(true); 
    const navigate = useNavigate();

    const logOut = () => {
        logout.logout();
        setCheck(true);
        setCheckcustomer(true);
        navigate("/");
    };

    const init = () => {

        if(localStorage.getItem("role")=="admin"){
            setCheck(false);
          };
        if(localStorage.getItem("role")=="user"){
            setCheckcustomer(false);
        }
    };
    useEffect(() => {
        init();
    }, []);

    return (
        <div className='Navbar'>
            <div className="container-fluid">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 ">
                    <a href="/" className="d-flex align-items-center  text-dark text-decoration-none">
                        <h2>CarWash.com</h2>
                    </a>

                    <ul className="nav  align-items-center justify-content-center ">
                        <li><a href="/" className="nav-link px-2 link-dark"><h5>Home</h5></a></li>
                        <li><a href="/about" className="nav-link px-2 link-dark" ><h5>About us</h5></a></li>
                        <li><a href="/blogs" className="nav-link px-2 link-dark"><h5>Blogs</h5></a></li>
                    </ul>
                    {check && (checkcustomer && <>
                    <ul className="nav  justify-content-right ">
                        <li></li>
                        <li>
                            <Popup contentStyle={{height:"65%",width: "55%"}} trigger={<button type="button" className="btn text-dark" >Signup</button>} modal>
                                <Register/>
                            </Popup>
                        </li>
                        <li>
                            <Popup contentStyle={{height:"50%",width: "40%"}} trigger={<button type="button" className="btn btn-primary">Login</button>} modal>
                                <LoginCustomer/>
                            </Popup>
                        </li>
                    </ul></>)}
                    {
                         !check && (checkcustomer && <ul className="nav  justify-content-right ">
                            <a className='btn text-dark' href='/adminprofile'>Admin Dashboard</a>
                            <button className="btn btn-primary"onClick={() => {logOut()}}> Logout</button>
                        </ul>)

                    }
                    {
                        !checkcustomer && (check && <ul className="nav  justify-content-right ">
                            <a className='btn text-dark' href='/profile'>Dashboard</a>
                            <button className="btn btn-primary"onClick={() => {logOut()}}> Logout</button>
                        </ul>)

                    }
                </header>
            </div>
        </div>
    )
}
