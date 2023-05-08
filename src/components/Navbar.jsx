import "../components/css/navbar.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { useEffect } from "react";
function Navbar() {

const {login,setLogin}=useContext(AppContext)
const {id,setId}=useContext(AppContext)

const logOutClick =()=>{
  setLogin(false)
  sessionStorage.clear()
 
}



  return (
    <>
      <div className="header">
        <div className="container">
          <Link className="logo" aria-current="page" to="/">
            Logo
          </Link>

          <ul className="main-nav">
            <li>
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" aria-current="page" to="/my-application">
                My Application
              </Link>
            </li>
            <li>
              <Link className="nav-link" aria-current="page" to={`/my-profile/${id}`}>
                My Profile
              </Link>
            </li>
            <li>
              {login ?  <Link onClick={logOutClick} className="nav-link login" aria-current="page" to="/login">
                Log Out
              </Link> :  <Link className="nav-link login" aria-current="page" to="/login">
                Login
              </Link> }
             
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
