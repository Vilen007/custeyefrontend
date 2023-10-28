import './style.css'
import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Email from '@mui/icons-material/Email';
import Password from '@mui/icons-material/Password';
import swal from 'sweetalert';
import appLogo from "./icon.png";

async function loginUser(credentials) {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      // If the response status code is not in the range 200-299,
      // it means there was an error. We throw an error to be caught in the catch block.
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch or JSON parsing process
    console.error('Error while logging in:', error.message);
    // You can return a specific error message or use a custom error object here
  }
}


function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Check for empty email and password fields
        if (!email || !password) {
          swal("Error", "Please enter both email and password.", "error");
          return;
        }
      
        // Validate the email format using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          swal("Error", "Please enter a valid email address.", "error");
          return;
        }
        if( email === "admin@gmail.com" && password === "Q!W@E#R$"){
            localStorage.setItem("user", "logged");
            window.location.href = "/home";
        }
        else{
          swal("Failed", "Invalid Credentials", "error");
        }
        // All validation passed, proceed with the API call
        // const response = await loginUser({
        //   email,
        //   password,
        // });
      
      //   if(response){
      //   if ("accessToken" in response) {
      //     swal("Success", response.message, "success", {
      //       buttons: false,
      //       timer: 2000,
      //     }).then((value) => {
      //       localStorage.setItem("accessToken", response["accessToken"]);
      //       localStorage.setItem("user", JSON.stringify(response["user"]));
      //       window.location.href = "/dashboard";
      //     });
      //   } else {
      //     swal("Failed", response.message, "error");
      //   }
      // }else{
      //   swal("Failed", "Error From Server", "error");
      // }
       };
      

    return ( 
        <React.Fragment>
              <section id="login" className="d-flex flex-column justify-content-center align-items-center vh-100">
                <div className="col-lg-4 col-md-4 col-sm-12 border p-5 rounded-3 bg-light" id="logincard">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                    <form noValidate onSubmit={handleSubmit}>
                    <div class="text-center">
                        <div class="d-flex justify-content-center align-items-center">
                            <img src={appLogo} width="80px" height="80px" alt="" />
                            <h1 class="mt-3 mx-1">CustEye</h1>
                        </div>
                    </div>
                        <div className="form-outline form-white mb-4">
                        <TextField
                            id="input-with-icon-textfield"
                            name="email"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <Email />
                                </InputAdornment>
                            ),
                            }}
                            variant="standard"
                            onChange={e => setEmail(e.target.value)}
                            style={{ width: '100%' }}
                        />
                       </div>

                        <div className="form-outline form-white mb-4">
                        <TextField
                            id="input-with-icon-textfield"
                            name="password"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <Password />
                                </InputAdornment>
                            ),
                            }}
                            variant="standard"
                            onChange={e => setPassword(e.target.value)}
                            style={{ width: '100%' }}
                        />
                        </div>
                        <div className="d-grid">
                        <Button type="submit" variant="contained" color="primary">
                            Login
                        </Button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </section>
        </React.Fragment>
     );
    }

export default Login;