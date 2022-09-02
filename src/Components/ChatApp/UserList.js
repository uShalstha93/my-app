import React, { useState } from "react";

const UserList = () => {

    const [aUser, setAUser] = useState([])

    const users = () => {
        fetch("http://localhost:2500/users")
            .then((res) => res.json())
            .then((result) => {
                setAUser(result.userList)
            })

    }

    return (
        <div className="container">
            <div className="card-body">
                <h1>Show Available User List</h1>
                <button className="btn btn-outline-primary" onClick={() => users()}>Show User List</button>
                <hr />
            </div>
            {/* {JSON.stringify(aUser)} */}
            <div className="card-body">
                <h3 className="container">ONLINE USER</h3>
                <div className="container">
                    {aUser.map((item) => {
                        return (
                            <button>
                                {item.online === true ? item.name : null}
                                <img src="https://www.pngfind.com/pngs/m/180-1807233_location-dot-grey-grey-colour-circle-png-transparent.png" alt="onlineIcon" height="10px"/>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default UserList;