import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import updateuser from "../services/auth.service";
import getUser from "../services/auth.service";

let p = localStorage.getItem("username");

export const CustomerUpdate = () => {
    const [emailId,SetEmailId] = useState("")
    const [firstName,SetFirstName] = useState("");
    const [lastName,SetLastName] = useState("");
    const [location,SetLocation] = useState("");
    const [car,SetCar] = useState("");
    const [password,SetPassword] = useState("");
    const [role,SetRole] = useState("user");
    const update = (e) =>{
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
        updateuser
        .updateuser(customer)
        .then((response) => {
          console.log("customer data registered", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }

    useEffect(() => {
        if (p) {
            getUser
            .getUser(p)
            .then((customer) => {
              SetEmailId(customer.data.emailId)
              SetFirstName(customer.data.firstName);
              SetLastName(customer.data.lastName)
              SetLocation(customer.data.location)
              SetCar(customer.data.car)
              SetPassword(customer.data.password)
              }
            )
            .catch((error) => {
              console.log("Something went wrong", error);
            });
        }
      }, []);

    return (

        <div className='row'>
            <div className='col-md-6'>
                <img className="featurette-image img-fluid mx-auto" alt="500x500" style={{ "width": "100%", "height": "90%" }} src="assets/signup.jpg" data-holder-rendered="true" />
            </div>
            <div className='Register container col-md-6' style={{ width: "45%" }}>
                <center><h3>Update Customer</h3></center>
                <form class="row g-3 needs-validation" novalidate>
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
                    <div class="col-md-6">
                        <label for="validationCustom13" class="form-label">Location</label>
                        <input type="text" class="form-control" id="validationCustom13" value={location} onChange={(e) => SetLocation(e.target.value)} required />
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom14" class="form-label">Car</label>
                        <input type="text" class="form-control" id="validationCustom14" value={car} onChange={(e) => SetCar(e.target.value)} required />
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom15" class="form-label">Password</label>
                        <input type="password" class="form-control" id="validationCustom15" value={password} readonly/>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" onClick={(e) => update(e)} type="submit">Submit form</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
