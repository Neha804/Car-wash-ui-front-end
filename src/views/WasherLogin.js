import React,{ useState} from 'react';
import auth from "../services/auth.service";

export const WasherLogin = () => {
    const [username, setEmailId] = useState("");
	const [password, setPassword] = useState("");


	const Regi = (e) =>{
    e.preventDefault();

	const val = { 
        username,
		password
	};

  auth
	.auth(val)
	.then((response) => {
		console.log("Feedback added successfully", response.data);
        console.log(response.data);
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("username",val.username);
      
        window.location.href="/Adminprofile";
	}
	)
	  .catch((error) => {
		console.log("Something went wrong", error);
	  });
	}

    return (
        <div className='container-fluid row' id="login-model" style={{paddingTop:"7%"}}>
            <div className='col-md-6'>
                <img className="featurette-image img-fluid mx-auto" alt="500x500" style={{"width": "100%", "height": "100%"}} src="assets/adminlogin.jpg" data-holder-rendered="true"/>
            </div>
        <div className='container col-md-6' id="modal-login" style={{width:"50%",paddingLeft:"5%",paddingTop:"5%"}}>
            <form className='LoginCustomer was-validated' novalidate>
                <center><h1 class="h3 mb-3 fw-normal">Washer Login</h1></center>

                <div class="form-floating">
                    <input type="email" class="form-control has-validation" id="floatingInput" placeholder="name@example.com" value={username} onChange={(e) => setEmailId(e.target.value)} required/>
                    <label for="floatingInput">Email address</label>
                </div>
                <br/>
                <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <label for="floatingPassword">Password</label>
                </div>

                <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" required/> Remember me
                </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={(e) => Regi(e)}>Sign in</button>
                <p class="mt-2 mb-3 text-muted">© CarWash.com</p>
            </form>
        </div>
        </div>
    )
}
