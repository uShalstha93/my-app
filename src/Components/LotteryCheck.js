import React, { useState } from "react";

const LotteryCheck = () => {

    const [checkName, setCheckName] = useState("")
    const [checkLotteryNo, setCheckLotteryNo] = useState("")
    const [fetchData, setFetchData] = useState({})
    // const [isLoading, setIsLoading] = useState(false)
    // const [err, setErr] = useState("")

    const CheckStatus = () => {
        // alert(`${checkName} and ${checkLotteryNo}`)
        fetch("http://localhost:2500/users/"+checkName)
        .then((res) => res.json())
        .then((result) => {
            setFetchData(result)
        })
    }

    return (

        <div className="container mt-5">
            <div>
                Name: <input type="text" placeholder="Enter Your Name" onKeyUp={(e) => setCheckName(e.target.value)} />
                <br />
                <br />
                Lottery No: <input type="number" placeholder="Enter Lottery Number" onKeyUp={(e) => setCheckLotteryNo(e.target.value)} />
                <br />
                <br />
                <button className="btn btn-outline-primary" onClick={() => CheckStatus()}>Check status</button>
            </div>
            <div className="container" style={{textAlign: 'center'}}>
                {Object.values(fetchData).map((item) => {
                    return(
                        <p>{item}</p>
                    )
                })}
            </div>
        </div>
    );
}

export default LotteryCheck;