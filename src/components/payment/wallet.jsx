import React, { useContext, useState } from 'react'
import { categoryContext } from '../Context/provider';

const Wallet=()=> {
  const {totalPrice} = useContext(categoryContext);
    const [clicked,setclicked] = useState("");
    const handleClick = (id)=>{
        setclicked(id);
        // console.log(id);
    }
  return (
    <>
      <div id="payment-wallet" >
                <div className='paymentRadio'>
                  <img src="https://images.bewakoof.com/web/paytm-1556185965.png"/>
                  <p>Paytm</p>
                  <input className='myinput' type="radio" name='radio' onChange={()=>{handleClick(1)}} />
                </div>
                {clicked==1?(
                <button className='showPayBtn'>PAY {" "} <span style={{fontSize:"15px"}}>₹{totalPrice}</span></button>
                  ):null}
                <div className='paymentRadio'>
                  <img
                    src="https://images.bewakoof.com/web/phonepe-1556185963.png"/>
                  <p>Phone Pe</p>
                  <input className='myinput' type="radio" name='radio' onChange={()=>{handleClick(2)}} />
                </div>
                {clicked==2?(
                <button className='showPayBtn'>PAY {" "} <span style={{fontSize:"15px"}}>₹{totalPrice}</span></button>
                  ):null}
                <div className='paymentRadio'>
                  <img
                    src="https://images.bewakoof.com/web/amazonpay-icon-1600094438.png"/>
                  <p>Amazon Pay</p>
                  <input className='myinput' type="radio" name='radio' onChange={()=>{handleClick(3)}} />
                </div>
                {clicked==3?(
                <button className='showPayBtn'>PAY {" "} <span style={{fontSize:"15px"}}>₹{totalPrice}</span></button>
                  ):null}
                <div className='paymentRadio'>
                  <img
                    src="https://images.bewakoof.com/web/mobikwik-1556185968.png"/>
                  <p>Mobikwik</p>
                  <input className='myinput' type="radio" name='radio' onChange={()=>{handleClick(4)}} />
                </div>
                {clicked==4?(
                <button className='showPayBtn'>PAY {" "} <span style={{fontSize:"15px"}}>₹{totalPrice}</span></button>
                  ):null}
                <div className='paymentRadio'>
                  <img src="https://images.bewakoof.com/web/bitmap-copy.jpg" alt="" />
                  <p>Freecharge</p>
                  <input className='myinput' type="radio" name='radio' onChange={()=>{handleClick(5)}} />
                </div>
                {clicked==5?(
                <button className='showPayBtn'>PAY {" "} <span style={{fontSize:"15px"}}>₹{totalPrice}</span></button>
                  ):null}
              </div>
    </>
  )
}

export default Wallet
