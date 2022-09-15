import React from "react";
import { useState } from "react";
// import { useEffect } from "react";

const Register = () => {

    const [getName, setGetName] = useState("")
    const [result, setResult] = useState("")

    const checkName = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"name": getName})
        };
        fetch("http://localhost:2500/users", requestOptions)
        .then((res) => res.json())
        .then(data => {
            setResult(data.body)
        })
    }
    
    return (

        <div className="container">

                <div>
                    <h1>REGISTER PAGE</h1>
                </div>
                <div>
                    <label>Name :</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Your Name"
                    onKeyUp={(e)=> setGetName(e.target.value)} />
                    {result}
                </div>
                <br/>
                <div>
                    <button type="submit" className="btn btn-primary" onClick={()=>checkName()}>SIGN UP</button>
                </div>

        </div>
    );
}

export default Register;