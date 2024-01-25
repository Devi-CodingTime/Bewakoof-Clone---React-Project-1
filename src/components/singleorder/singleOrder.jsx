import React, { useContext, useEffect, useState } from 'react'
import TopHeader from '../home/header/topHeader'
import "./singleOrder.css";
import { Link, useParams } from 'react-router-dom';
import { categoryContext } from '../Context/provider';
import FooterWithoutAbout from '../home/footer/footerWithoutAbout';
import Loader from '../loader/loader';
import SideNavbar from '../home/header/sideNavbar';

const SingleOrder =()=> {
    const {token,totalPrice} = useContext(categoryContext);
    const [singleorderItem,setSingleOrderItem]= useState({});
    const {id} = useParams();
  const [loader,setLoader] = useState(false);

    console.log("id is ",id);
    async function fetchSingleOrder()
    {
        setLoader(true);
        try
        {
            setLoader(true);
            const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/order/${id}`,{
                method: "GET", // *GET, POST, PUT, DELETE, etc.                        
                headers: {
                    "projectId": 'ctxjid7mj6o5',
                    "Content-Type": "application/json",
                    "Authorization":`Bearer ${token || localStorage.getItem("token")}`
                }});
            const result = await res?.json();
            console.log("single load--------- : ",result.data); 
            setSingleOrderItem(result?.data);
            
        }catch (error) {
            console.log(error);
        }
        finally{
            setLoader(false);
        }
    }

    useEffect(()=>{
        fetchSingleOrder();
        window.scrollTo(0, 0);
    },[]);
  return (
   
    <div className='singleOrderWrpr'>
      <TopHeader/>
      <SideNavbar/>
      {loader?<Loader/>:""}
      <div className='backtoListing'>
        <Link to={`/myorder`} id="testBackToList">
        <i className="fa-solid fa-chevron-left" style={{color: "#74C0FC"}}></i>
            <span className='ml-1'>
                Back to My Orders
            </span>
        </Link>
    </div>
    {/* <div className='orderidcontent'>
        <span>Order# {singleorderItem?.items[0]?._id}</span>
        <span>Date {singleorderItem?.orderDate.substring(0, 10)}</span>
    </div> */}
    <div className='sigleOrderdata'>
        <div className='leftScreen'>
            {singleorderItem?.items?.length>0 && <div className='singleOrderItem'>
                
                <img src={singleorderItem?.items[0]?.product?.displayImage} className='imgpart'/>
                <div className='descpart' style={{textAlign:"left",paddingLeft:"10px"}}>
                    
                    <p style={{lineHeight:"14px"}}>{singleorderItem.items[0].product.name}</p>
                    <p>Size : {singleorderItem.items[0].size}</p>
                    <p>Price : {singleorderItem.totalPrice}</p>
                    <p>Status : {singleorderItem.status}</p>
                </div>
            </div>}

            <div className="addressPaymentWrapper">
                <div className="shippingAddress--wrapper-new" style={{textAlign:"left"}}>
                    <div className="shippingAddressType">
                    <label>other</label>
                    </div>
                    <div className="userDetails">
                    <h6>{localStorage.getItem("userName")} | {localStorage.getItem("email")} </h6>
                    </div>
                    <div className="shippingaddressData">
                    {singleorderItem?.items?.length>0 && <p>{singleorderItem.shipmentDetails.address.city} {singleorderItem.shipmentDetails.address.street}, {singleorderItem.shipmentDetails.address.city} {singleorderItem.shipmentDetails.address.zipCode}, {singleorderItem.shipmentDetails.address.state}, 
                        {singleorderItem.shipmentDetails.address.country}
                    </p>}
                    </div>
                    <div className="returnProductBar" />
                    </div>
                    
            </div>
             <div className="orderHelpWrapper">
                <h5 className="orderHelpWrapper--heading">NEED HELP WITH YOUR ORDER?</h5>
                <div className="orderHelpWrapper--buttons">
                    <div className="orderHelp--buttonWrapper">
                    <button className="" style={{fontSize:"14px",cursor:"none"}}>
                        HELP AND SUPPORT
                        <i className="fa-solid fa-chevron-right fa-solid1" style={{color: "#74C0FC",marginLeft:"535px"}}></i>
                    </button>
                    </div>
                </div>
            </div> 
        </div>
        
        {singleorderItem?.items?.length>0 &&  <div className='rightScreen'>
        <div>
            <span className="f-b3-r clr-shade1 ml-1" style={{fontSize: "13px"}}>SHIPPING DETAILS </span>{" "}
            <span className="f-b3-s clr-shade1">{localStorage.getItem("userName")} </span>
            <div className="d-flex align-items-center ml-1" style={{borderBottom:"1px solid grey"}}>
              <p className="f-b2-r clr-shade3 bkf-ellipsis mt-0" style={{ maxWidth: "85%",fontSize: "13px" }}>
              {singleorderItem.shipmentDetails.address.city} {singleorderItem.shipmentDetails.address.street}, 
              {singleorderItem.shipmentDetails.address.city} {singleorderItem.shipmentDetails.address.zipCode}, 
              {singleorderItem.shipmentDetails.address.state}, 
                {singleorderItem.shipmentDetails.address.country}
              </p>
              <img className="ml-1 mt-[-20px]"
                src="https://images.bewakoof.com/web/right-arrow-addr-1645078965.svg"
                alt="address change"
              />
            </div>
          </div>
          <div className='pricedetail' style={{fontSize:"16px",background:"white"}}>
        <h1 style={{padding: "10px",textAlign:"left"}}>PAYMENT SUMMARY</h1>
            <div className="divprice flex flex-1">
                <span className='span1'>Cart total </span>
                <span className='span2'>₹{singleorderItem.totalPrice}</span>
            </div>
            <div className="divprice flex flex-1">
                <span className='span1'>Delivery Fee  </span>
                <span className='span2'>Free</span>
            </div>
            <div className="divprice flex flex-1">
                <span className='span1'>COD </span>
                <span className='span2'>₹000</span>
            </div>
            <div className="divprice flex flex-1">
                <span className='span1'>Amount to be paid </span>
                <span className='span2'>₹{singleorderItem.totalPrice+100}</span>
            </div>
        </div>
        </div> }

      </div>
      
      <FooterWithoutAbout/>
      
    </div>
  )
}

export default SingleOrder
