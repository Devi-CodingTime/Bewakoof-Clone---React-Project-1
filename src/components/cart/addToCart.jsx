import React from 'react'
import "./addToCart.css";

const AddToCart =()=> {
  const [size, setSize] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const handleChange = (event) => {
    setSize(event.target.value);
    setQuantity(event.target.value);
  };
  return (
    <>
    <div className='Bewakoofimg'>
      <img
        src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
        title="Bewakoof Logo"
        alt="bewakoof_logo"
        style={{ height: 30, padding: 2 ,margin:"0 176px"}}
        />
      </div>
      <div style={{borderBottom:"1px solid grey"}}></div>
    <h1 style={{margin:"0 190px",textAlign:"left"}} className='py-8'>My Bag 1 item</h1>
    <div className='flex flex-1 py-4 px-4 gap-4' style={{margin:"0 176px"}}>
      <div className='leftCart'>
        
        <div className='DeliveryBox flex flex-col gap-2'>
          <img src='https://images.bewakoof.com/web/Red-truck.png' className='df-img'/>
          <p className='pp'>Yay! You get FREE delivery on this order</p></div>
        <div className='CART flex gap-[1.5rem]'>
          <div className='leftside'>
            <p>Men's White Batman Poster Graphic Printed T-Shirt</p>
            <p className='pricepara'>₹449</p>
            <div className='flex gap-2'>
              <select className='border' onChange={handleChange}>
                <option value="1">Size</option>
                <option value="1">1</option>
                <option value="1">1</option>
              </select>
              <select className='border' onChange={handleChange}>
                <option value="1">Qty</option>
                <option value="1">1</option>
                <option value="1">1</option>
              </select>
            </div>

          </div>
          <div className=''>
            <img className='w-20 h-24 rounded-md' src='https://images.bewakoof.com/t320/men-batman-poster-printed-t-shirt-555348-1669273619-1.jpg'/>
          </div>
          
        </div>
        <div className='flex gap-2 cartbyn'>
          
          <span className='w-40 rmv'>Remove</span>
          <span className='w-80'>Move To WishList</span>
        </div>
        
      </div>
      <div className='rightCart'>
        <div className='extra'>Save extra ₹40 with TriBe</div>
        <div className='wishpara'>
            Whistles! Get extra 15% cashback on prepaid orders above Rs.699. Coupon code - YEAREND
            
        </div>
        <div className='priceSummary'>
        <h1 style={{background: "#eae8e8",padding: "10px",textAlign:"left"}}>Price Summary</h1>
            <div className="divprice flex flex-1">
                <span className='span1'>Total MRP (Incl. of taxes) </span>
                <span className='span2'>₹1099</span>
            </div>
            <div className="divprice flex flex-1">
                <span className='span1'>Delivery Fee  </span>
                <span className='span2'>₹1099</span>
            </div>
            <div className="divprice flex flex-1">
                <span className='span1'>Bag Discount </span>
                <span className='span2'>₹1099</span>
            </div>
            <div className="divprice flex flex-1">
                <span className='span1'>Subtotal </span>
                <span className='span2'>₹1099</span>
            </div>
        </div>
        <div className="addsection">
            <span className='m-1'>total</span>
            <span className='mr-[90px]'>₹1099</span>
            <button id="web_continue_submit" style={{width:"width: 56%"}} type="button" className="loginSubmit">
              ADD ADDRESS
            </button>
            
            <div className="flex justify-center items-center gap-3 py-4 ">
                    <div className="flex flex-row  containerInner">
                        <div className="flex flex-col items-center">
                        <img loading="lazy" alt="offer" width={"33px"} height={"33px"} src="https://images.bewakoof.com/web/trust-cart.svg"/>
                        <span className="trustBadgeTitle">100% SECURE PAYMENTS</span>
                        </div>
                    </div>
                    <div className="flex flex-row  containerInner">
                        <div className="flex flex-col items-center">
                        <img loading="lazy" alt="offer" src="https://images.bewakoof.com/web/Easy-Returns.svg"/>
                        <span className="trustBadgeTitle"> EASY RETURNS &amp; INSTANT REFUNDS
                        </span>
                        </div>
                    </div>
                    <div className="d-flex flex-row  containerInner">
                        <div className="d-flex flex-col align-items-center">
                            <img loading="lazy" alt="offer" src="https://images.bewakoof.com/web/Globe.svg"/>
                            <span className="trustBadgeTitle font-light">SHIPPING GLOBALLY</span>
                        </div>
                    </div>
                </div>

        </div>
      </div>
    </div>
    </>
  )
}
export default AddToCart