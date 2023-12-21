import React from "react";
import TopHeader from "../home/header/topHeader";
import SideNavbar from "../home/header/sideNavbar";
import "../login/login.css"
const Login = ()=>{
    return(<>
    <TopHeader/>
    <SideNavbar/>
    <div className="login-signup-body">
      <div className="log-sign-desk-wrap">
        <div className="col-md-6 col-sm-6 lgs-section welcome">
          <div className="login-welcom-text">
            <h2 style={{fontSize:"30px"}}>
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
                marginBottom: "22px"}}>Log in / Sign up</h1>
              <p className="login-text">
                for Latest trends, exciting offers and everything Bewakoof
                <span className="tradeMark">®</span>!
              </p>
            </div>
            <div className="form-body">
              <form name="loginForm" noValidate="" autoComplete="off" className="loginForm">
               
                  <input className="email" id="email" type="email" name="email" placeholder="Enter Your Email"/>
                  <input className="pass" id="password" type="password" name="password" placeholder="Enter Your Password"/>
                  <a href="/" className="block mt-3">Forget Password</a>
                
                <button id="web_continue_submit" type="submit" className="loginSubmit"  >
                  Login
                </button>
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