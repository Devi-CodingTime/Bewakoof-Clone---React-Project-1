import React, {useState} from 'react'
import '../login/login.css';
import TopHeader from '../home/header/topHeader';
import SideNavbar from '../home/header/sideNavbar';
import { Link } from 'react-router-dom';

const Signup =()=> {
    const  [signUpData , setSignUpData] = useState({
        name: '' ,
        email: '', 
        password: '',
        "appType" : "ecommerce"
     })
     const[success,setSuccess] = useState(false);
     const handleContinue= async()=> {
        const options = {
            method: 'POST',
            headers: new Headers({projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json'} ),
            body: JSON.stringify(signUpData)
        }
        const res = await fetch('https://academics.newtonschool.co/api/v1/user/signup' ,options);
        const resJson = await res.json();
        console.log(resJson , 'signup')
        setSuccess(true);
        
    }

     const handleChange = (e)=> {
            const updatedData = {...signUpData};
            updatedData[e.target.name] = e.target.value;
            console.log("updatedData,",updatedData);
            setSignUpData(updatedData);
     }

  return (<>
  {console.log("success",success)}
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
            <img src="https://images.bewakoof.com/web/group-19-1617704502.png" alt="login_welcome"/>
          </div>
        </div>
        {/* welcomeLOGO section */}

        {console.log("success1",success)}
        <div className="col-md-6 col-sm-6 lgs-section form">
          <div className="form-wrap">
            <div className="login-text-desk-wrap">
              <h1 style={{ fontSize:"24px",
                fontFamily: "montserrat-bold sans-serif",
                marginBottom: "22px"}}><Link to="/login">Log in / </Link><Link to="/signup">Sign up</Link></h1>
              <p className="login-text">
                for Latest trends, exciting offers and everything Bewakoof
                <span className="tradeMark">®</span>!
              </p>
            </div>
            <div className="form-body">
            <form name="loginForm" noValidate="" autoComplete="off" className="loginForm">
            <input onChange = {handleChange} name = 'name' placeholder = 'Enter UserName' type= 'text' className='name'/>      
            <input onChange = {handleChange} className="email" id="email" type="email" name="email" placeholder="Enter Email"/>
            <input onChange = {handleChange} className="pass" id="password" type="password" name="password" placeholder="Enter Password"/>

        
            <button id="web_continue_submit" type="submit" className="loginSubmit"
            onClick={handleContinue}>
                SignUp
            </button>
            {console.log("success2",success)}
            {success===true?<div style={{color:"green"}}>Registered Successfully !</div>:<div></div>}
        
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
   </>
  )
}
export default Signup