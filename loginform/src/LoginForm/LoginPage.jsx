import React from 'react'
import './LoginPage.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const LoginPage = () => {
  return (
    <section className="mainblock"><form action="">
    <div className="header"> <h1>Student Login</h1></div>
    
    <div className="inputbox">
    <input type="text" placeholder="StudentID" required/><FaUser className="icons"/><br></br>
    </div>
    
    <div className="inputbox">
    <input type="password" placeholder="password" required/><FaLock className="icons" /><br></br>
    </div>
    <div className="remember-forget">
      <label><input type="checkbox"/>Remember me</label>
      <a href="#">forget password</a>
    </div>
    <div>
    <button className="loginbtn">Login</button>
    </div>
    </form>    
    </section>
    
    

   
  )
}

export default LoginPage;
