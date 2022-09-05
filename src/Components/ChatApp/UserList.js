import React, { useState } from "react";
import { useEffect } from "react";

const UserList = () => {

    const [aUser, setAUser] = useState([])
    const [msgUser, setMsgUser] = useState('')
    // const [typeMsg, setTypeMsg] = useState('')
    // const [sendTypeMsg, setSendTypeMsg] = useState('')
    const [searchOnlineUser, setSearchOnlineUser] = useState("")

    useEffect(() => {
        fetch("http://localhost:2500/users")
            .then((res) => res.json())
            .then((result) => {
                setAUser(result.userList)
            })
    }, [])

    const userMsg = (oName) => {
        setMsgUser("I am " + oName)
    }

    // const sendMsg = () => {
    //     setSendTypeMsg(typeMsg)
    // }
    
    const filteredUser = aUser.filter((item) => {
        return item.name.includes(searchOnlineUser)
    })
    
    return (
        <div className="container">
            <div className="header">
                <h1>ONLINE CHAT APP</h1>
            </div>
            {/* <div>
                <button className="btn btn-outline-primary" onClick={() => users()}>Show User List</button>
            </div> */}
                {/* {JSON.stringify(aUser)} */}
                <div className="row">
                    <div className="column">
                        <table className="table">
                            <thead className="userlist">ONLINE STATUS</thead>
                            <tbody>
                            <input type="text" placeholder="Search" style={{borderRadius: "5px", marginTop: "5px"}} onKeyUp={(e) => setSearchOnlineUser(e.target.value)} />
                                {filteredUser.length === 0 ? <p>User Not found</p> :
                                filteredUser.map((item) => {
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
                            <thead className="userlist">THIS IS MESSAGE FIELD</thead>
                            <tbody>
                                <p>WELCOME TO THIS CHAT APP.</p>
                                <tr>
                                    <p style={{fontSize: 'large'}}>{msgUser}</p>
                                </tr>
                                {/* <td className="td">
                                    <h5>{sendTypeMsg}</h5>
                                </td> */}
                            </tbody>
                        </table>
                        <div>
                            <input type="text" style={{borderRadius: "5px"}} onKeyUp={(e) => null} />
                            <button className="btn btn-outline-primary btn-sm"
                            onClick={()=> null}
                            style={{ margin: '5px' }}>
                                <img src="https://www.iconpacks.net/icons/2/free-send-mail-icon-2574-thumb.png" alt="send" height="20px" width="20px" />
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default UserList;