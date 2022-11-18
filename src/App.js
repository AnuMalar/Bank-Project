import "./styles.css";
import React, {useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import UserContext from "./context";
import NavBar from "./navbar";
import NavBar2 from "./navbar2";
import Home from "./home";
import CreateAccount from "./createaccount";
import Login from "./login";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import AllData from "./alldata";
import Logout from "./Logout";




function App() {
   const[show,setShow]=useState(false);
  console.log("show:"+show);
  
 const navShow=(p)=>{
  setShow(p)
 }
 
  return (
    <HashRouter>
      {show?<NavBar2 />:<NavBar />}
      {/* <UserContext.Provider
        value={{
          users: [
            {
              name: "guest",
              email: "guest@gmail.com",
              password: "secret",
              balance: 0
            }
          ]
        }}
      > */}
        
        <div className="container" style={{ padding: "30px",paddingLeft:"10px", backgroundImage: "linear-gradient(to bottom,slategrey,darkslategrey)"}} >
        <Routes>
            <Route path="/home" exact element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login setshow={navShow} />} />
            <Route path="/deposit" element={<Deposit/>} />
            <Route path="/withdraw" element={<Withdraw/>} />
            <Route path="/alldata" element={<AllData/>} />
            <Route path="/logout" element={<Logout setshow={navShow}/>} />




            {/* <Route path="/navbar2" element={<With/>} /> */}


          </Routes>
        </div>
      {/* </UserContext.Provider> */}
    </HashRouter>
  );
}

export default App;
