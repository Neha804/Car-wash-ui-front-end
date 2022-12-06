import React from 'react';
import { useEffect, useState } from "react";
import { Link, useHistory,useNavigate } from "react-router-dom";
import getUser from "../services/auth.service";
import logout from "../services/auth.service";
import "./CustomerDashboard.css";
import { BigHead } from '@bigheads/core';
import {getRandomOptions} from '../components/getRandomOptions';
import {WasherTable} from '../components/WasherTable';
import YourOrders from '../components/YourOrders';


let p = localStorage.getItem("username");

export const CustomerDashboard = () => {
    const navigate = useNavigate();
    const [showWasher, setWasher] = useState(false);
    const [LoginCustomer, setCustomer] = useState([]);

    const logOut = () => {
        logout.logout();
        navigate("/");
    };

    const init = () => {
        getUser
            .getUser(p)
            .then((response) => {
                console.log("Getting current Customer data", response.data);
                setCustomer(response.data);
            })
            .catch((error) => {
                console.log("Something went wrong", error);
            });
    };
    useEffect(() => {
        init();
    }, []);


    return (
        <div className='CustomerDashboard'>
            <div className='row'>
                <div className='col-md-3' style={{ backgroundImage: "linear-gradient(to right top, #07ca9d, #51dc8a, #88eb70, #c1f752, #ffff31)",paddingTop:"0"}}>
                    <br/>
                    <a className='btn btn-success' href="/" style={{marginLeft:"5px"}}>Home</a>
                    <div className='container'>
                        <center><BigHead {...getRandomOptions()} style={{height:"250px",width:"250px"}}/></center>
                    </div>
                    <br/>
                    <strong>
                        <div className='row container'>
                            <h6>First Name: {LoginCustomer.firstName}</h6>
                        </div>
                        <br />
                        <div className='row container'>
                            <h6>Last Name: {LoginCustomer.lastName}</h6>
                        </div>
                        <br />
                        <div className='row container'>
                            <h6>Location: {LoginCustomer.location}</h6>
                        </div>
                        <br />
                        <div className='row container'>
                            <h6>Car: {LoginCustomer.car}</h6>
                        </div>
                        <br />
                        <div className='row container'>
                            <h6>Email Id: {LoginCustomer.emailId}</h6>
                        </div>
                    </strong>
                    <br />
                    <div className='row container'>
                        <button className="btn btn-danger ml-2" onClick={() => {logOut();}}>
                            Logout
                        </button>
                    </div>
                    <br/>
                    <div className='row container'>
                        <Link className="btn btn-danger ml-2" to="/updatecustomer">
                            Update
                        </Link>
                    </div>
                </div>
                <div className='col-md-9'  id="custDashboardArea" style={{height:"750px",paddingTop:"20px"}}>

                    <button className='btn btn-primary' onClick={() => setWasher(!showWasher) }>Show List of Washers</button>
                    {showWasher && <WasherTable/>}
                    <YourOrders/>
                    
                </div>
            </div>
        </div>
    )
}
