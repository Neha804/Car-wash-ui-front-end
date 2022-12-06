import React, { useEffect, useState } from 'react';
import './Register.css';
import Reg from "../services/auth.service";

export const Register = () => {
    const [emailId,SetEmailId] = useState("");
    const [firstName,SetFirstName] = useState("");
    const [lastName,SetLastName] = useState("");
    const [location,SetLocation] = useState("");
    const [car,SetCar] = useState("");
    const [password,SetPassword] = useState("");
    const [role,SetRole] = useState("");

    const handleRegister = (e) =>{
        e.preventDefault();
        const customer = {
            emailId,
            firstName,
            lastName,
            location,
            password,
            car,
            role
        };
        if(emailId){
        Reg
        .Reg(customer)
        .then((response) => {
          console.log("customer data registered", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });}
        else{
            console.log("Give the value of the fields")
        }
    }


    return (

        <div className='row'>
            <div className='col-md-6'>
                <img className="featurette-image img-fluid mx-auto" alt="500x500" style={{ "width": "100%", "height": "90%" }} src="assets/signup.jpg" data-holder-rendered="true" />
            </div>
            <div className='Register container col-md-6' style={{ width: "45%" }}>
                <center><h3>Register</h3></center>
                <form class="row g-3 was-validated" novalidate>
                    <div class="col-md-6">
                        <label for="validationCustom11" class="form-label">First name</label>
                        <input type="text" class="form-control" id="validationCustom11" value={firstName} onChange={(e) => SetFirstName(e.target.value)} required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom12" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="validationCustom12" value={lastName} onChange={(e) => SetLastName(e.target.value)} required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-12">
                        <label for="validationCustomUsername" class="form-label">EmailId</label>
                        <div class="input-group has-validation">
                            <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" value={emailId} onChange={(e) => SetEmailId(e.target.value)} required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please choose a email.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom13" class="form-label">Location</label>
                        <input type="text" class="form-control" id="validationCustom13" value={location} onChange={(e) => SetLocation(e.target.value)} required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please provide a location
                            </div> 
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom14" class="form-label">Car</label>
                        <input type="text" class="form-control" id="validationCustom14" value={car} onChange={(e) => SetCar(e.target.value)} required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please provide a car
                            </div> 
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom15" class="form-label">Password</label>
                        <input type="password" class="form-control" id="validationCustom15" value={password} onChange={(e) => SetPassword(e.target.value)} required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please provide a password
                            </div> 
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" onClick={(e) => handleRegister(e)} type="submit">Submit form</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
