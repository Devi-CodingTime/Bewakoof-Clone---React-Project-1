import React, { useContext } from 'react'
import { categoryContext } from '../Context/provider'

const Upi=()=> {
    const {totalPrice} = useContext(categoryContext);
  return (
    <>
      <div id="payment-upi">
                <div className='upiDiv'>
                <img className="upi-desktop"
                  src="https://images.bewakoof.com/web/ic-gpay-payment-gray-v1.jpg"
                  alt="add upi url"
                />
                <img className="upi-desktop"
                  src="https://images.bewakoof.com/web/ic-bhim-upi-gray-payment-v1.jpg"
                  alt="add upi url"
                />
                <img className="upi-desktop"
                  src="https://images.bewakoof.com/web/ic-phone-pe-gray-payment-v1.jpg"
                  alt="add upi url"
                />
                <img className="upi-desktop"
                  src="https://images.bewakoof.com/web/ic-more-option-payment-v1.jpg"
                  alt="add upi url"
                />
                </div>
                <input className='myinput' type="text" placeholder="Enter UPI ID" />
                <p>UPI ID is in the format of mobilenumber@bank or username@bank</p>
                
                <div id="payment_upi">
                  <input type="checkbox" id="card-checkbox"  className='w-[50%] myinput'/>
                  <label id="optionlabelUpi">
                  Save this UPI ID for future payments.
                </label>
              </div>
                <button className='showPayBtn'>VERIFY</button>
              </div>
    </>
  )
}

export default Upi
