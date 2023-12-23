import React from 'react'
import "../login/login.css";
import '../forgetPassword/forgetPassword.css';
import TopHeader from '../home/header/topHeader';
import SideNavbar from '../home/header/sideNavbar';
import { Link } from 'react-router-dom';

const ForgetPassword =()=> {
    const handleChange = ()=>{
        alert("hello");
    }
  return (
    <div>
        <TopHeader/>
        <SideNavbar/>
        <div className='forgetPass'>
            <h1 className='mb-4'>Forget Password</h1>
      <input onChange = {handleChange} className="pass" id="password" type="password" name="password" placeholder="Enter New Password"/>
      <input onChange = {handleChange} className="pass" id="password" type="password" name="password" placeholder="Confirm Password"/>
      <Link to="/login">
      <button id="web_continue_submit" type="submit" className="forgetbtn"  >
        Save
        </button>
        </Link>
        <Link to="/login">
          <button id="web_continue_submit" type="submit" className="forgetbtn"  >
          Cancel
          </button>
        </Link>
        
        </div>
    </div>
  )
}
export default ForgetPassword