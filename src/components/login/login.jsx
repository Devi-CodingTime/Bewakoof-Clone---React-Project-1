import React, { useContext } from "react";
import TopHeader from "../home/header/topHeader";
import SideNavbar from "../home/header/sideNavbar";
import "../login/login.css"

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { categoryContext } from "../Context/provider";
const Login = ()=>{
  const {loggedIn,token,handleLogin,handleToken} = useContext(categoryContext);
  console.log("initial loggerdIn value",loggedIn);
  console.log("initial token value",token);
  console.log("initial handleLogin value",handleLogin);
  console.log("initial handleToken value",handleToken);

  const navigate = useNavigate();

  const  [loginData , setLoginData] = useState({
    email: '', 
    password: '',
    "appType" : "ecommerce"
 })


 const handleChange = (e)=> {
  const updatedData = {...loginData};
  updatedData[e.target.name] = e.target.value;
  setLoginData(updatedData)
}

  const handleContinue= async()=> {
    
    const options = {
        method: 'POST',
        headers : {projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json'},
        // headers: new Headers({projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json'} ),
        body: JSON.stringify(loginData)
    }
    console.log("options",options);
    const res = await fetch('https://academics.newtonschool.co/api/v1/user/login' ,options);
    
    const resJson = await res.json();

    console.log("token :",resJson.token);
    // localStorage.setItem('token' , resJson.token)
    if(resJson.status==="success")
    {
      handleLogin(true);
      handleToken(resJson.token);
      navigate('/');
    }
    else
    {
      handleLogin(false);
      navigate('/login');
    }

  }
    return(<>
    <TopHeader/>
    <SideNavbar/>
    <div className="login-signup-body">
      <div className="log-sign-desk-wrap">
        <div className="col-md-6 col-sm-6 lgs-section welcome">
          <div className="login-welcom-text">
            <h2 style={{fontSize:"30px", marginLeft:"80px"}}>
              Welcome to the world of Bewakoof<span className="tradeMark">®</span>!
            </h2>
          </div>
          <div className="login-wlcm-img">
            <img
              src="https://images.bewakoof.com/web/group-19-1617704502.png"
              alt="login_welcome"
            />
          </div>
        </div>
        {/* welcomeLOGO section */}
        <div className="col-md-6 col-sm-6 lgs-section form">
          <div className="form-wrap">
            <div className="login-text-desk-wrap">
              <h1 style={{ fontSize:"24px",
                fontFamily: "montserrat-bold sans-serif",
                marginBottom: "22px"}}>Login</h1>
              <p className="login-text">
                for Latest trends, exciting offers and everything Bewakoof
                <span className="tradeMark">®</span>!
              </p>
            </div>
            <div className="form-body">
              <form name="loginForm" noValidate="" autoComplete="off" className="loginForm">
               
                  <input className="email" onChange={handleChange} id="email" type="email" name="email" placeholder="Enter Your Email"/>
                  <input className="pass" onChange={handleChange} id="password" type="password" name="password" placeholder="Enter Your Password"/>
                  <Link to="/forgetpassword" className="block mt-3">Forget Password</Link>
                
                <button id="web_continue_submit" type="button" className="loginSubmit" onClick={handleContinue} >
                  Login
                </button>
                <section className='flex flex-row gap-2 w-[50%] ml-[177px] justify-center items-center'>
                  <p>Don't have an account ?</p>
                  <Link to="/signup" style={{padding:"7px", width:"20%",color:"#42a2a2",cursor:"pointer"}}>Signup</Link>
              </section>
              </form>
              
              <p className="termsAndConditions">
                By creating an account or logging in, you agree with Bewakoof
                <span className="tradeMark">®</span>'s{" "}
                <a
                  href="https://www.bewakoof.com/terms-and-conditions"
                  target="_blank"
                >
                  Terms and Conditions{" "}
                </a>
                and{" "}
                <a
                  href="https://www.bewakoof.com/privacy-policy-and-disclaimer"
                  target="_blank"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        {/* login section */}
      </div>
    </div>
   </> )
}
export default Login