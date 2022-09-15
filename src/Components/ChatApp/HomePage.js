import React from "react";
import "./HomePage.css";

const HomePage = () => {

    return (

        <div>
           <div className="header">
            <h2>ONLINE CHAT APP</h2>
           </div>
           <div className="sidebar">
            <h5>ONLINE STATUS</h5><br/>
            
           </div>
           <div className="body">
            <h5>BODY</h5>
            <div className="msgbox">
                Message
            </div>
            <div className="input">
                <input type="text" placeholder="Enter Message" />
                <button>Send</button>
            </div>
           </div>
        </div>
        
    );
}

export default HomePage;