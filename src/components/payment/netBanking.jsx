import React, { useContext, useState } from 'react'
import { categoryContext } from '../Context/provider';

const NetBanking=()=> {
    const {totalPrice} = useContext(categoryContext);
    const [clicked,setclicked] = useState("");
    const handleClick = (id)=>{
        setclicked(id);
        // console.log(id);
    }
  return (
    <>
      <div id="payment-net-banking">
                <div className='paymentRadio'>
                  <img
                    src="https://images.bewakoof.com/web/icici-1556185960.png"
                    alt=""/>
                  <p>ICICI</p>
                  <input className='myinput' type="radio" name='radio' onChange={()=>{handleClick(1)}}/>  
                </div>
                {clicked==1?(
                <button className='showPayBtn'>PAY {" "} <span style={{fontSize:"15px"}}>₹{totalPrice}</span></button>
                  ):null}
                <div className='paymentRadio'>
                  <img
                    src="https://images.bewakoof.com/web/axis-1556185962.png"
                    alt=""
                  />
                  <p>Axis</p>
                  <input className='myinput' type="radio" name='radio' value="Axis" onChange={()=>{handleClick(2)}}/>
                  
                </div>
                {clicked==2?(
                <button className='showPayBtn'> PAY {" "} <span style={{fontSize:"15px"}}>₹{totalPrice}</span></button>
                  ):null}
                <div className='paymentRadio'>
                  <img
                    src="https://images.bewakoof.com/web/sbi-1556185961.png"
                    alt=""
                  />
                  <p>SBI</p>
                  <input className='myinput' type="radio" name='radio' value="SBI" onChange={()=>{handleClick(3)}}/>
                  
                </div>
                {clicked==3?(
                <button className='showPayBtn'>PAY {" "} <span style={{fontSize:"15px"}}>₹{totalPrice}</span></button>
                  ):null}
                <div className='paymentRadio'>
                  <img
                    src="https://images.bewakoof.com/web/hdfc-1556185961.png"
                    alt=""
                  />
                  <p>HDFC</p>
                  <input className='myinput' type="radio" name='radio' value="HDFC" onChange={()=>{handleClick(4)}}/>
                  
                </div>
                {clicked==4?(
                <button className='showPayBtn'>PAY {" "} <span style={{fontSize:"15px"}}>₹{totalPrice}</span></button>
                  ):null}
                <div className='paymentRadio'>
                  <img
                    src="https://images.bewakoof.com/web/kotak-1556185967.png"
                    alt=""
                  />
                  <p>Kotak</p>
                  <input className='myinput' type="radio" name='radio' value="Kotak" onChange={()=>{handleClick(5)}}/>
                  
                </div>
                {clicked==5?(
                <button className='showPayBtn'>PAY {" "} <span style={{fontSize:"15px"}}>₹{totalPrice}</span></button>
                  ):null}
                <p style={{color:"#42a2a2",fontSize:"15px"}}>Other banks</p>
              </div>
    </>
  )
}

export default NetBanking
