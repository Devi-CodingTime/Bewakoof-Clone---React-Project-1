import React from 'react'
import { Link } from 'react-router-dom'

const CartHeader=({email})=> {
  return (
    <>
      <div className='Bewakoofimg'>
      <Link to="/">
      <img
        src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
        title="Bewakoof Logo"
        alt="bewakoof_logo"
        style={{ height: 30, padding: 2 ,margin:"0 176px"}}
        /></Link>
        <span style={{position: "absolute",
        top: "10px",
        right: "333px",
        color: "#afadad",fontSize: "12px"}}>
          signed as</span>
          <span style={{position: "absolute",
        top: "26px",
        right: "304px",
        fontSize: "13px"}}>{email}</span>
      </div>
      <div style={{borderBottom:"1px solid grey"}}></div>
    </>
  )
}

export default CartHeader
