import React, { useState } from "react";

const LotteryCheck = () => {

    const [checkName, setCheckName] = useState("")
    const [checkLotteryNo, setCheckLotteryNo] = useState("")

    return (

        <div className="container mt-5">
            <div>
                <div>
                    <h1>SUPER ADMIN</h1>
                </div>
                <br />
                Name: <input type="text" placeholder="Enter Your Name" />
                <br />
                <br />
                Lottery No: <input type="number" placeholder="Enter Lottery Number" />
                <br />
                <br />
                <button className="btn btn-outline-primary" >Check status</button>
            </div>
        </div>
    );
}

export default LotteryCheck;