import React from "react";
import UserList from "./Components/ChatApp/UserList";
// import ImagePosition from "./Components/ImagePosition";
// import LikedCount from "./Components/LikedCount";
// import DeleteItem from "./Components/DeleteItem";
// import ConCatName from "./Components/ConCatName";
// import Test from "./Components/Test";
// import LotteryCheck from "./Components/LotteryCheck";
import "./style.css";

const App = () => {
  
  return (
  <>
    <div className="h1"><h1><i>WELCOME TO MERN SESSION</i></h1></div>
    <div><UserList /></div>
    {/* <div><LikedCount /></div> */}
    {/* <div><ImagePosition /></div> */}
    {/* <div><DeleteItem /></div>
    <div><ConCatName /></div> */}
    {/* <div><LotteryCheck /></div> */}
    {/* <div><Test /></div> */}
  </>
  );
}

export default App;
