import React from 'react';
import { useEffect, useState } from "react";
import { Link, useHistory,useNavigate } from "react-router-dom";
import getUser from "../services/auth.service";
import logout from "../services/auth.service";
import "./AdminDashboard.css";
import SearchTable from '../components/SearchTable';
import {RegisterWasher} from '../components/RegisterWasher'
import {WasherTable} from '../components/WasherTable';
import { BigHead } from '@bigheads/core';
import {getRandomOptions} from '../components/getRandomOptions';
import AllOrders from '../components/AllOrders';


let p = localStorage.getItem("username");

export const AdminDashboard = () => {
    const [showChild, setShowChild] = useState(false);
    const [showWasherReg, setWasherReg] = useState(false);
    const [showWasher, setWasher] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const navigate = useNavigate();
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
                if(response.data.role=="user"){
                    logOut();
                }
            })
            .catch((error) => {
                console.log("Something went wrong", error);
            });
    };
    useEffect(() => {
        init();
    }, []);


    return (
        <div className='AdminDashboard' >
            <div className='row'>
                <div className='col-md-3' style={{ backgroundImage: "linear-gradient(to right top, #07ca9d, #51dc8a, #88eb70, #c1f752, #ffff31)"}}>
                    <br/>
                    <a className='btn btn-success' href="/" style={{marginLeft:"10px"}}>Home</a>
                    <div className='container'>
                        {/* <center><img src="assets/person2.jpg" class="rounded-circle" alt="profile_pic" style={{ height: "200px", width: "200px", margin: "70px" }} /></center> */}
                        <center><BigHead {...getRandomOptions()} /></center>
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
                        <button className="btn btn-danger ml-2" onClick={() => {logOut()}}>
                            Logout
                        </button>
                    </div>
                </div>
                <div className='col-md-9'  id="AdminDashboardArea" style={{height:"750px",paddingTop:"20px"}} >
                    <div className='row'>
                        <div className='col-md-3'>
                            <button onClick={() => {setShowChild(!showChild);
                                                    setWasherReg(false);
                                                    setWasher(false);
                                                    setShowOrder(false);} } className="btn btn-primary">Show all Customers</button>
                        </div>
                        <div className='col-md-3'>
                            <button onClick={() => {setWasherReg(!showWasherReg);
                                                    setShowChild(false);
                                                    setWasher(false);
                                                    setShowOrder(false);} } className="btn btn-primary">Register Washer</button>
                            <br/>
                        </div>
                        <div className='col-md-3'>
                            <button onClick={() => {setWasher(!showWasher);
                                                     setShowChild(false);
                                                     setWasherReg(false);
                                                     setShowOrder(false);}} className="btn btn-primary">Show all Washers</button>
                            <br/>
                        </div>
                        <div className='col-md-3'>
                            <button onClick={() => {setShowOrder(!showOrder);
                                                    setWasher(false);
                                                     setShowChild(false);
                                                     setWasherReg(false);}} className="btn btn-primary">Show all Order</button>
                            <br/>
                        </div>
                    </div>
                    {showChild && <SearchTable/>}
                        {showWasherReg && <div className='container' style={{background:"white",width:"80%"}}><RegisterWasher/></div>}
                        {showWasher && <WasherTable/>}
                        {showOrder && <AllOrders/>}
                </div>
            </div>
        </div>
    )
}
