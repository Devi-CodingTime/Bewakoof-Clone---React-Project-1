import React, { useContext,useState,useEffect } from 'react'
import SideNavbar from '../home/header/sideNavbar'
import Footer from '../home/footer/footer'
import "./myorder.css";
import { categoryContext } from '../Context/provider'
import TopHeader from '../home/header/topHeader';
import { Link, useNavigate } from 'react-router-dom';
import { GET_ORDERLIST } from '../utility/api';
import FooterWithoutAbout from '../home/footer/footerWithoutAbout';

function Myorder() {
    const{cartItem,loggedIn,token} = useContext(categoryContext);
    const [orderItem,setOrderItem]= useState([]);
    const navigate = useNavigate();
    async function fetchOrderList()
    {
        // setLoader(true);
      // if(loggedIn)
      // {
        try
        {
            const res = await fetch(GET_ORDERLIST,{
                method: "GET", // *GET, POST, PUT, DELETE, etc.                        
                headers: {
                    "Content-Type": "application/json",
                    projectId: 'ctxjid7mj6o5',
                    Authorization:`Bearer ${token}`
                }});
            const result = await res.json();
            console.log("order.data : ",result.data[0].order.items[0].product); 
            setOrderItem(result.data);

        }catch (error) {
            console.log(error);
        }
      // }
      // else{
      //   navigate('/login');
      // }
    }
    const ViewClicked = (id)=>{
      navigate(`/singleorder/${id}`);
    }
    useEffect(()=>{
      fetchOrderList();
    },[]);
  return (
    <>
      <TopHeader/>
      <SideNavbar/>
        <div className='holdOrders'>
            <h1 className='orderHeading'>My Orders</h1>
            <div className='orderSpan'></div>
            {orderItem.map((cartitem)=>{
                return (<div className='orderConatiner'>
                    <img src={cartitem.order.items[0].product.displayImage} className='leftpart'/>
                    <div className='rightpart'>
                        <p>{cartitem.order.items[0].product.name}</p>
                        <p>PRICE : {cartitem.order.items[0].product.price}</p>
                    </div>
                    <button className='viewMoreOrder' onClick={()=>{ViewClicked(cartitem.order._id)}}>Order Info</button>
                    </div>)
            })}
            
        </div>
      <FooterWithoutAbout/>
    </>
  )
}

export default Myorder


