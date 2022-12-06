import httpClient from "../http-common";

let token=localStorage.getItem("token");
let username = localStorage.getItem("username");

const giveFeedback = (data) => {
  return httpClient.post("/feedback/feed", data);
};

// register for customer
const Reg = (data) => {
  return httpClient.post("/user/register", data);
};

// Authentication checker
const auth = (data) => {
  return httpClient.post("/authenticate", data);
};

// Get the logged in user details
const getUser = (id) => {
  return httpClient.get(`/user/getemail/${id}`,{
    headers:{
        
       'Authorization': `Bearer ${token}`
    }
});
};

const updateuser = (data) => {
  return httpClient.put(`/user/updateuser/${data.emailId}`, data,{
    headers:{
        
       'Authorization': `Bearer ${token}`
    }
});
};

// logout a user
const logout = () => {
  return localStorage.clear();
};

const getAllCustomer = () =>{
  return httpClient.get(`/user/getall`,{
    headers:{
        
       'Authorization': `Bearer ${token}`
    }
});
};

const removeCustomer = (id) => {
  return httpClient.delete(`/user/deleteuser/${id}`,{
    headers:{
        
       'Authorization': `Bearer ${token}`
    }
});
};

const washerRegister = (data) => {
  return httpClient.post(`/user/washer`, data,{
    headers:{
        
       'Authorization': `Bearer ${token}`
    }
});
};

const getAllWasher = () =>{
  return httpClient.get(`/washer/getall`);
};


const getWasherByEmail = (id) =>{
  return httpClient.get(`/washer/getemail/${id}`);
};



const removeWasher = (id) => {
  return httpClient.delete(`/user/deletewasher/${id}`,{
    headers:{
        
       'Authorization': `Bearer ${token}`
    }
});
};

const order = (data) => {
  return httpClient.post(`/pgredirect`, data);
};


const getWasher = (id) => {
  return httpClient.get(`/order/Washer/order/${id}}`);
};


const postOrder = (data) => {
  return httpClient.post(`/order/register`, data);
};

const getAllOrders = () =>{
  return httpClient.get(`/order/getall`);
};

const washerLog = (id) => {
  return httpClient.get(`/order/washer/order/${id}`);
}

const getcurrentorders = () =>{
  return httpClient.get(`/order/getemail/${username}`);
};


export default {Reg, auth, logout, getUser, getAllCustomer, removeCustomer,washerRegister, giveFeedback, getAllWasher,removeWasher,updateuser,order,getWasherByEmail,postOrder,getAllOrders,washerLog,getcurrentorders};