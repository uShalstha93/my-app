import React from "react";
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPass, setErrorPass] = useState("")
    // const [isSubmit, setIsSubmit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorEmail(validateEmail(email))
        setErrorPass(validatePassword(password))
        // setIsSubmit(true)
    }

    const validateEmail = (values1) => {
        let errEmail = "";
        const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!values1) {
            errEmail = "Email is Required!";
        } else if (!regex.test(values1)) {
            errEmail = "Please enter a valid email address!"
        }
        return errEmail
    }

    const validatePassword = (values2) => {
        let errPassword = "";
        if (!values2) {
            errPassword = "Password is Required!";
        } else if (values2.length < 10) {
            errPassword = "Password must be atleast of 10 character!"
        } 
        return errPassword
    }

    return (

        <div className="container">
            
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>LOGIN FORM</h1>
                </div>
                <div>
                    <label>Email :</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email"
                        onKeyUp={(e) => setEmail(e.target.value)} />
                </div>
                <p>{errorEmail}</p>
                <br />
                <div>
                    <label>Password :</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter Password"
                        onKeyUp={(e) => setPassword(e.target.value)} />
                </div>
                <p>{errorPass}</p>
                <div>
                    <input type="checkbox" class="form-check-input" id="rememberme" />
                    <label class="form-check-label">Remember Me</label>
                </div><br />
                <div>
                    <button type="submit" class="btn btn-primary">Sign In</button>
                </div>
            </form>
        </div>

    );
}

export default Login;