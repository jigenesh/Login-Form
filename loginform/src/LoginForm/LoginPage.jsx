import React from 'react'
import { useState } from "react";
import './LoginPage.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const LoginPage = () => {
  const [action,setAction] =useState("Signup");

  
  return (
    <section className="mainblock">
      <form action="">
          
            <div className="header">
             
                <button className={action=="Login" ? "  active": ""}onClick={()=>{setAction("Login")}} >Login</button>
                <button className={action=="Signup" ? "active": ""}onClick={()=>{setAction("Signup")}}>Signup</button>
            
              
            </div>

                <div className="inputs">
                  {action=="Login" ? <div></div> :  <div className="inputbox">
                    <input type="text" placeholder="Name" required/><br></br>
                  </div>}
                 
              
                  <div className="inputbox">
                    <input type="text" placeholder="StudentID" required/><FaUser className="icons"/><br></br>
                  </div>
    
                  <div className="inputbox">
                    <input type="password" placeholder="password" required/><FaLock className="icons" /><br></br>
                  </div>
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
