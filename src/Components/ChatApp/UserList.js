import React, { useState } from "react";

const UserList = () => {

    const [aUser, setAUser] = useState([])
    const [msgUser, setMsgUser] = useState('')

    const users = () => {
        fetch("http://localhost:2500/users")
            .then((res) => res.json())
            .then((result) => {
                setAUser(result.userList)
            })
    }

    const userMsg = (oName) => {
        setMsgUser("I am " + oName)
    }

    return (
        <div className="container">
            <div className="card-body">
                <h1 className="h1">ONLINE CHAT APP</h1>
                <button className="btn btn-outline-primary" onClick={() => users()}>Show User List</button>
                <hr />
                {/* {JSON.stringify(aUser)} */}
                <div className="row">
                    <div className="column">
                        <table className="table">
                            <thead className="h3">ONLINE STATUS</thead>
                            <tbody>
                                {aUser.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td className="td">
                                                <button className="btn btn-outline-primary" style={{ margin: '2px' }} onClick={() => userMsg(item.name)}>{item.name}</button>
                                                {item.online === true ? <img src="https://toppng.com/uploads/preview/hd-green-dot-circle-icon-11642066802ysgbn4cpvp.png" alt="online" height="20px" /> : <img src="https://i.pinimg.com/originals/63/9f/f2/639ff23f2fa0d07258f8d6290136d918.jpg" alt="offline" height="15px" />}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="column">
                        <table className="table">
                            <thead className="h3" style={{ fontSize: '25px' }}>THIS IS MESSAGE FIELD</thead>
                            <tbody>
                                <p>WELCOME TO THIS CHAT APP.</p>
                                <tr>
                                    <p style={{fontSize: 'large'}}>{msgUser}</p>
                                </tr>
                                <td className="td">
                                    <h5>Chat Messages Will Be Here</h5>
                                </td>
                            </tbody>
                        </table>
                        <div>
                            <input type="text" />
                            <button className="btn btn-outline-primary btn-sm" style={{ margin: '5px' }}><img src="https://www.iconpacks.net/icons/2/free-send-mail-icon-2574-thumb.png" alt="send" height="20px" width="20px" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;