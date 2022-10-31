import React from "react";
import ColorDuplicateName from "./Components/ColorDuplicateName";
import HomePage from "./Components/ChatApp/HomePage";
import UserList from "./Components/ChatApp/UserList";
import ImagePosition from "./Components/ImagePosition";
import LikedCount from "./Components/LikedCount";
import DeleteItem from "./Components/DeleteItem";
import ConCatName from "./Components/ConCatName";
import Test from "./Components/Test";
import LotteryCheck from "./Components/LotteryCheck";
import AddParticipants from "./Components/AddParticipants";
import Login from "./Components/ChatApp/Login";
import Register from "./Components/ChatApp/Register";
import "./style.css";

const App = () => {
  
  return (
  <>
  {/* <div><ColorDuplicateName /></div> */}
    <div className="header"><h1><i>WELCOME TO MERN SESSION</i></h1></div>
    {/* <div><HomePage /></div> */}
    {/* <div><Register /></div> */}
    {/* <div><Login /></div> */}
    {/* <div><UserList /></div> */}
    {/* <div><LikedCount /></div> */}
    {/* <div><ImagePosition /></div> */}
    {/* <div><DeleteItem /></div>
    <div><ConCatName /></div> */}
    {/* <div><LotteryCheck /></div> */}
    <div><AddParticipants /></div>
    {/* <div><Test /></div> */}
  </>
  );
}

export default App;
