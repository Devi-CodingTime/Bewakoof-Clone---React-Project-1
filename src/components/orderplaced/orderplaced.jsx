import React, { useEffect } from 'react'
import SideNavbar from '../home/header/sideNavbar'
import Footer from '../home/footer/footer'
import TopHeader from '../home/header/topHeader'
import './orderplaced.css';
import { Link } from 'react-router-dom';
const Orderplaced=() =>{
  useEffect(()=>{
    window.scrollTo(0, 0);
},[]);
  return (
    <>
      <TopHeader/>
      <SideNavbar/>
      {/* <img src='/images/order-animation.gif' width="100%" alt='not available'/> */}
      
      <div id="container2">
      <div className='backtoListing mt-20' >
        <Link to={`/myorder`} id="testBackToList">
        <i className="fa-solid fa-chevron-left" style={{color: "#74C0FC"}}></i>
            <span className='ml-1'>
                Back to My Orders
            </span>
        </Link>
        </div>
        <div className="con">
          <img
            className="greenimage"
            src="https://i0.wp.com/codemyui.com/wp-content/uploads/2015/10/progress-and-tick-icon-animation.gif?fit=880%2C440&ssl=1"
          />
          <h1 id="h1tag">Your Order Placed</h1>
          <h1 id="tq">Thank You</h1>
        </div>
        <Link to={`/`}>
        <span style={{color:"rgb(81, 204, 204)"}}>Continue Shopping</span>
        </Link>
      </div>
      <Footer/>
    </>
  )
}

export default Orderplaced
