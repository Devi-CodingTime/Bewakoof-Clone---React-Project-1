import React, {useState} from 'react'
import '../login/login.css';
import TopHeader from '../home/header/topHeader';
import SideNavbar from '../home/header/sideNavbar';
import { Link, useNavigate } from 'react-router-dom';

const Signup =()=> {
  const navigate = useNavigate();
    const  [signUpData , setSignUpData] = useState({
        name: '' ,
        email: '', 
        password: '',
        "appType" : "ecommerce"
     })
     const[msg,setMsg] = useState("");
    //  const[error,setError] = useState("");

     const handleContinue= async(e)=> {
      e.preventDefault();
      console.log("signUpData ",signUpData);
      try{
          const options = {
            method: 'POST',
            headers: new Headers({projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json'} ),
            body: JSON.stringify(signUpData)
        }
        const res = await fetch('https://academics.newtonschool.co/api/v1/user/signup' ,options);
        const resJson = await res.json();
        console.log(resJson , 'signup');
        if(resJson.status==="success")
        {
          navigate('/login');
        }
        else{
          navigate('/signup');
        }
        // setMsg("Registered Successfully !");
      }
      catch (error) {
        console.log(error);
        setMsg("User already exists");
      }
        
      //   login // token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODdkYTZkZTY1N2IwZTFkZjBmZjZhMyIsImlhdCI6MTcwMzQwNTYyNCwiZXhwIjoxNzM0OTQxNjI0fQ.WAWQTmfOhITi6MlbdrlQS-9QSbD5CGigK6t6bLcYDa0
      // signup  // "token ": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODdkYTZkZTY1N2IwZTFkZjBmZjZhMyIsImlhdCI6MTcwMzQwMjA5MywiZXhwIjoxNzM0OTM4MDkzfQ.AzV7cVVWwZ4s5X7poX8eLPK_GN_lC69G6jDbyj67bk4"
    }

     const handleChange = (e)=> {
            const updatedData = {...signUpData};
            updatedData[e.target.name] = e.target.value;
            console.log("updatedData,",updatedData);
            setSignUpData(updatedData);
     }

  return (<>
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

        <div className="col-md-6 col-sm-6 lgs-section form">
          <div className="form-wrap">
            <div className="login-text-desk-wrap">
              <h1 style={{ fontSize:"24px",
                fontFamily: "montserrat-bold sans-serif",
                marginBottom: "22px"}}>Sign up</h1>
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

        
            <button id="web_continue_submit" className="loginSubmit"
                onClick={handleContinue}>
                Continue
            </button>
            <section className='flex flex-row gap-2 w-[50%] ml-[177px] justify-center items-center'>
              <p>Already have an account ?</p>
              <Link to="/login" style={{padding:"7px", width:"20%",color:"#42a2a2",cursor:"pointer"}}>Log in</Link>
            </section>
            {msg==="Registered Successfully !"?<div style={{color:"green"}}>Registered Successfully !</div>:""}
            {msg==="User already exists"?(<div style={{color:"red"}}>User already exists</div>):""}
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