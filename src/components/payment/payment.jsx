import React, { useContext, useEffect, useState } from 'react'
import "./payment.css";
import CartHeader from '../cart/cartHeader';
import DebitCredit from './debitCredit';
import Wallet from './wallet';
import Upi from './upi';
import NetBanking from './netBanking';
import CashOndelivery from './cashOndelivery';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { categoryContext } from '../Context/provider';
import Loader from '../loader/loader';

const Payment =()=> {
  const {cartItem,token,totalPrice,setCartItem} = useContext(categoryContext);
  const [addressdata,setAddressdata] = useSearchParams();
  
  const [payment,setPayment] = useState(1);
  const [loader,setLoader] = useState(false);
  const navigate = useNavigate();
  const handlePayment = (id)=>{
    setPayment(id);
  }
  const placeOrder = async(bagData)=>{
    try
    {
        let res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/order`,{
            method:"POST",
            headers : {projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json',Authorization:`Bearer ${token}`},
            body: JSON.stringify(bagData)
        });
        let data = await res.json();
        // console.log("paceorder",data);
        return data;
    }
    catch(error)
    {
        console.log(error);
    }
    
  }
  async function clearCart(){
    try
    {
      let res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart`,{
          method:"DELETE",
          headers : {projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json',Authorization:`Bearer ${token}`}
          
      });
      let data = await res.json();
      console.log("data.status",data.status);
      if(data.status==="success")
        setCartItem(data.data.items);
    }
    catch(error)
    {
        console.log(error);
    }
  }
  let formValue = {
    productId:"",
    quantity:"",
    address:JSON.parse(addressdata.get("address")),
    addressType:addressdata.get("addressType")
  }
  const fetchAllOrders = async () => {
    
    setLoader(true);
    for(var i=0;i<cartItem.length;i++)
    {
      let updated={...formValue,
        productId:cartItem[i].product._id,
        quantity:cartItem[i].quantity,
        address:JSON.parse(addressdata.get("address")),
        addressType:addressdata.get("addressType")
    }
   placeOrder(updated);
  }
  
  setLoader(false);
  clearCart();
  navigate(`/orderplaced`);
};
useEffect(()=>{
  window.scrollTo(0, 0);
},[]);
  return (
    <>
      <CartHeader email={localStorage.getItem("email")}/>
      {loader?<Loader/>:""}
      
      <div className='cartcontainer'>
        <div className='leftcart'>
          <h3 className='paymentHeading'>Choose Your Payment option</h3>
          
          <div id="payment-mode">
            <div id="left-payment-mode">
              
              <button id="payment-debit-button" onClick={()=>{handlePayment(1)}} style={payment==1?{borderLeft:"3px solid #42a2a2",background:"white"}:null}>
                <img src='https://images.bewakoof.com/web/bank-card-fill-1645697857.svg' className='paymentImg' style={payment==1?{opacity:"1"}:null}/>
                <span>Debit & Credit Card</span>
              </button>
              <button id="payment-wallet-button" onClick={()=>{handlePayment(2)}} style={payment==2?{borderLeft:"3px solid #42a2a2",background:"white"}:null}>
                <img src='https://images.bewakoof.com/web/Group-1645705428.png' className='paymentImg' style={payment==2?{opacity:"1"}:null}/>
                <span>Wallet</span>
              </button>
              <button id="payment-upi-button" onClick={()=>{handlePayment(3)}} style={payment==3?{borderLeft:"3px solid #42a2a2",background:"white"}:null}>
                <img src='https://images.bewakoof.com/web/upi-icon-1645705429.png' className='paymentImg' style={payment==3?{opacity:"1"}:null}/>
                <span>UPI</span>
              </button>
              <button id="payment-net-banking-button" onClick={()=>{handlePayment(4)}} style={payment==4?{borderLeft:"3px solid #42a2a2",background:"white"}:null}>
                <img src='https://images.bewakoof.com/web/nb-icon-1645705428.png' className='paymentImg' style={payment==4?{opacity:"1"}:null}/>
                <span>Net banking</span>
              </button>
              <button id="payment-cod-button" onClick={()=>{handlePayment(5)}} style={payment==5?{borderLeft:"3px solid #42a2a2",background:"white"}:null}>
                <img src='https://images.bewakoof.com/web/cod-icon-1645705427.png' className='paymentImg' style={payment==5?{opacity:"1"}:null}/>
                <span>Cash on Delivery</span>
              </button>
            </div>
            <div id="right-payment-mode">
              {payment==1?(<DebitCredit/>):(payment==2?<Wallet/>:(payment==3?<Upi/>:(payment==4?<NetBanking/>:(payment==5?<CashOndelivery/>:null))))} 
            </div>
          </div>
        </div>
        
        <div className='separater'></div>
        <div className='rightcart'>
          <div>
            <span className="f-b3-r clr-shade1 ml-[-237px]" style={{fontSize: "13px"}}>Delivering order to </span>{" "}
            <span className="f-b3-s clr-shade1">{localStorage.getItem("userName")} </span>
            <div className="d-flex align-items-center ml-1" style={{borderBottom:"1px solid grey"}}>
              <p className="f-b2-r clr-shade3 bkf-ellipsis mt-0" style={{ maxWidth: "85%",fontSize: "13px" }}>
                {JSON.parse(addressdata.get("address")).city},
                {JSON.parse(addressdata.get("address")).landmark} {JSON.parse(addressdata.get("address")).country}, 
                {JSON.parse(addressdata.get("address")).city}, 
                {JSON.parse(addressdata.get("address")).state}, 
                {JSON.parse(addressdata.get("address")).zipCode}
              </p>
              <img className="ml-1 mt-[-20px]"
                src="https://images.bewakoof.com/web/right-arrow-addr-1645078965.svg"
                alt="address change"
              />
            </div>
          </div>
          <div className="shipmentWrapper ">
            <p className="ml-[-134px] text-sm text-gray-600 mb-3">You are paying for these items</p>
            <div>
              {cartItem.map((item)=>{
                return(
                  <div className="shipmentinner d-flex align-items-center">
                <p className="count bgclr-p-black clr-so-white f-b3-m">{item.quantity}</p>
                <img
                  src={item.product.displayImage}
                  alt="Women's Grey Super Loose Fit Cargo Joggers"
                />
                <div className="shipmentinnerText ml-3" style={{ width: "85%" }}>
                  <p className="f-b3-r clr-shade2 bkf-ellipsis" style={{fontSize:"10px",textAlign:"left"}}>
                    {item.product.name}
                  </p>
                </div>
              </div>
              
                )
              })}
              
            </div>
          </div>
          <div className='priceSummary' style={{background:'white'}}>
            <h1 style={{background: "#eae8e8",padding: "10px",textAlign:"left"}}>Price Summary</h1>
              <div className="divprice flex flex-1">
                  <span className='span1'>Total MRP (Incl. of taxes) </span>
                  <span className='span2'>₹{totalPrice}</span>
              </div>
              <div className="divprice flex flex-1">
                  <span className='span1'>Delivery Fee</span>
                  <span className='span2'>₹100</span>
              </div>
              <div className="divprice flex flex-1" style={{borderBottom:"1px solid gray"}}>
                  <span className='span1'>Discount on MRP</span>
                  <span className='span2'>₹000</span>
              </div>
              <div className="divprice flex flex-1">
                  <span className='span1' style={{fontWeight:"600"}}>Final amount </span>
                  <span className='span2' style={{fontWeight:"600"}}>₹{totalPrice+100}</span>
              </div>
            </div>
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
                            <img loading="lazy" alt="offer" src="https://images.bewakoof.com/web/original-icon.png" width={"30px"}/>
                            <span className="trustBadgeTitle font-light">100% GENUINE PRODUCT</span>
                        </div>
                    </div>
                </div>
                <div style={{color:"#8f98a9"}}>____________We Accept____________</div>
                <div className="flex flex-row justify-evenly connectWithTitle">
                  <img
                    loading="lazy"
                    alt="offer"
                    src="https://images.bewakoof.com/web/google-pay-logo.svg"
                  />
                  <img
                    loading="lazy"
                    alt="offer"
                    src="https://images.bewakoof.com/web/upi-sign.svg"
                  />
                  <img
                    loading="lazy"
                    alt="offer"
                    src="https://images.bewakoof.com/web/phone-pay-logo.svg"
                  />
                  <img
                    loading="lazy"
                    alt="offer"
                    src="https://images.bewakoof.com/web/visa-card-logo-9.svg"
                  />
                  <img
                    loading="lazy"
                    alt="offer"
                    src="https://images.bewakoof.com/web/master-card.svg"
                  />
                </div>

        </div>
        
      </div>
      <div className='flex gap-1 ml-[576px] mt-[-190px]'>
      <button className="showPayBtn" type="button" style={{ width: "17%",height:"36px" }}
        onClick={fetchAllOrders}>
            Place Order
        </button>
        <Link to={`/addtocart`}>
        <button className="showPayBtn" type="button" style={{ width: "100%",height:"36px" }}
        >
            Cancel
        </button>
        </Link>
      </div>
    </>
  )
}
export default Payment
