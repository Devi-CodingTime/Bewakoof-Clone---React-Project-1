import React from 'react';

const DebitCredit=()=> {
  return (
    <>
      <div id="payment-debit">
        <div className='flex' style={{padding:"11px 317px 11px 11px"}}>
          <img
            className="desktop"
            src="https://images.bewakoof.com/web/ic-visa-gray-payment-v1.jpg"
            alt="add card url"
          />
          <img
            className="desktop"
            src="https://images.bewakoof.com/web/ic-master-card-payment-v1.jpg"
            alt="add card url"
          />
          <img
            className="desktop"
            src="https://images.bewakoof.com/web/ic-rupay-payment-v1.jpg"
            alt="add card url"
          />
          <img
            className="desktop"
            src="https://images.bewakoof.com/web/ic-american-express-payment-v1.jpg"
            alt="add card url"
          />
        </div>
        <input className='myinput' type="text" id="card-number" placeholder="Card Number" />
          <input className='myinput' type="text" id="card-name" placeholder="Name on Card" />
            <div className='flex gap-3 justify-center'>
              <input className='myinput' type="text" id="card-expiry" placeholder="Expiry (MM/YY)" />
              <input className='myinput' type="password" id="card-password" placeholder="CVV" />
            </div>
            <div id="card-payment-div2">
              <input className='myinput' type="checkbox" id="card-checkbox" />
              <label id="optionlabel">
                Save card details for later.
              </label>
            </div>
              <p>
                This transaction you make is totally secure. We don't save your CVV
                number.
              </p>
              <button className="showPayBtn">PAY NOW</button>
            </div>
    </>
  )
}


export default DebitCredit

