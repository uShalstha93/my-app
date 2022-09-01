import React, { useState } from "react";

const DeleteItem = () => {

    const friends = ['ajay', 'shyam', 'bibek', 'pankaj', 'roshan', 'akash']

    const [friendList, setFriendList] = useState(friends)
    const [name, setName] = useState("")

    const removeFriend = () => {
        if (friendList.includes(name)) {
            const newList = friendList.filter((item, idx) => {
                return item !== name
            })
            setFriendList(newList)
        }
        else {
            alert("No Name Found")
        }
    }

        return (

            <div className="container mt-5">
                <div className="card text-center">
                    <div className="row">
                        <div className="column">
                            <h2><u>FRIENDS</u></h2>
                            {friendList.map((data, id) => {
                                return (
                                    <li><i>{data}</i></li>
                                )
                            })}
                        </div>
                        <div className="column">
                            <h3>NAME:</h3>
                            <input type="text" placeholder="Enter Name To Delete" onChange={(e) => setName(e.target.value)} />
                            <br />
                            <br />
                            <button className="btn btn-outline-danger" onClick={() => removeFriend()}>DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

export default DeleteItem;