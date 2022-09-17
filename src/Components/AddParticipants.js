import React, { useEffect } from 'react'
import { useState } from 'react';

const AddParticipants = () => {

    const [getName, setGetName] = useState("")
    const [getLotteryNo, setGetLotteryNo] = useState("")
    // const [result, setResult] = useState([])
    const [userlist, setUserlist] = useState([])
    const [errmsg, setErrmsg] = useState("")
    const [randomInt, setRandomInt] = useState(null)
    // const [getData, setGetData] = useState(false)

    const fetchUser = () => {
        fetch("http://localhost:2500/participants")
            .then((res) => res.json())
            .then(data => {
                setUserlist(data.detail)
            })
    }
    //display participants list in UI
    useEffect(() => {
        // if (getData === true) {
        fetchUser()
        // }
        // else {
        //     console.log("hello")
        // }
    }, [])

    //add participants name & lottery Number in MongoDB
    const addParticipants = () => {

        //variable assign for POST
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": getName,
                "lotteryNo": getLotteryNo,
                "isWinner": false
            })
        };
        //name & lottery Number validation
        if (getName === "" && getLotteryNo === "") {
            return setErrmsg("Please Enter Name & Lottery No!!")
        }
        else {
            //POST in mongoDB
            fetch("http://localhost:2500/participants", requestOptions)
                // .then((res) => res.json())
                // .then(data => {
                //     setResult(data.body)
                // })
                .then(alert("participants added!"))
                .then(res => fetchUser())
            // .then(setGetData(true))
            // .then(setGetName(""))
        }
    }

    //update participants isWinner state to true
    const updateParticipants = () => {
        const updateOption = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": userlist[randomInt].name,
                "lotteryNo": userlist[randomInt].lotteryNo,
                "isWinner": false
            })
        }
        fetch("http://localhost:2500/participants", updateOption)
            .then(alert("Winner List Updated!!"))
        // .then((res) => res.json())
        // .then(data => {
        //     setResult(data.body)
        // })
    }

    //delete participants
    const deleteParticipants = (delName) => {
        const delOption = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": delName
            })
        }
        fetch("http://localhost:2500/participants", delOption)
            .then(alert("Participant Deleted!!"))
            .then(res => fetchUser())

    }

    //generate random number after clicking button
    const luckyWinner = () => {
        const randomNo = Math.floor(Math.random() * userlist.length)
        setRandomInt(randomNo)
        const timeOut = setTimeout(() => {
            luckyWinner() //function call within itself for color moving
        }, 200)
        // console.log(randomNo)
        // console.log(timeOut)
        if (timeOut === 50) {
            clearTimeout(timeOut)
            alert(`CONGRATULATIONS!! ${userlist[randomNo].name}`)
        }
    }

    return (

        <div>
            <div className='container'>
                <div>
                    <h1>SUPER ADMIN</h1>
                </div>
                <br />
                <div>
                    Name: <input type="text" placeholder="Enter Your Name" onKeyUp={(e) => setGetName(e.target.value)} />
                    <br />
                    <br />
                    Lottery No: <input type="number" placeholder="Enter Lottery Number" onKeyUp={(e) => setGetLotteryNo(e.target.value)} />
                    <br />
                    {errmsg}
                    <br />
                    <br />
                </div>
                <button className="btn btn-outline-primary" onClick={() => addParticipants()}>ADD PARTICIPANT</button>
                <br />
                <br />
                <div className='row'>
                    <div className='column'>
                        <h5>PARTICIPANTS LIST</h5>
                        <div>
                            <tr>Name</tr>
                            {userlist.length > 0 ? userlist.map((item, index) => {
                                return (
                                    <tr>
                                        <td><button className='btn btn-secondary' style={{ backgroundColor: index === randomInt ? "red" : null }}>{item.name}</button></td>
                                        <td><button className='btn btn-danger' onClick={() => deleteParticipants(item.name)}>Delete</button></td>
                                    </tr>
                                )
                            }) : "Loading..."}
                        </div>
                    </div>
                    <div className='column-1'>
                        <div>
                            {`Winner is ${randomInt}`}
                        </div>
                        <div>
                            <button className='btn btn-primary' onClick={() => luckyWinner()}>LUCKY DRAW</button><br /><br />
                            <button className='btn btn-primary' onClick={() => updateParticipants()}>CONFIRM UPDATE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddParticipants;