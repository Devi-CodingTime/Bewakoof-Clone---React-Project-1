import React, { useEffect,useState,useContext } from 'react'
import TopHeader from '../home/header/topHeader';
import SideNavbar from '../home/header/sideNavbar';
import './showWishList.css';
import { categoryContext } from '../Context/provider';
const ShowWishList = ()=> {
    const {wishlist,getWishListData,addToBag,setWishlist,token} = useContext(categoryContext);

    const removeFromWishList = async(id)=>{
      try
          {
              let res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`,{
                  method:"DELETE",
                  headers : {projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json',Authorization:`Bearer ${token}`}
                  
              });
              let data = await res.json();
              setWishlist(data.data.items);
              
              console.log("wishlist item set done -------",data.data.items);
          }
          catch(error)
          {
              console.log(error);
          }
    }

    useEffect(()=>{
        getWishListData();
    },[]);

  return (
    <div>
      <TopHeader/>
      <SideNavbar/>
        <div className="flex flex-wrap px-14 showWishList">
        {wishlist?.map((i)=>{
          return(<div className="card" style={{padding:"10px"}}>
            <div className="border-solid border-2 border-gray-200 w-56 rounded-md" style={{height:"380px"}}>
                
              <img src={i.products.displayImage} style={{height:"278px"}} className="Imagetag relative cursor-default"
              onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src="../../../../images/notAvailableimages.jpg"}}/>
                
              {/* <h3 className="brand-name rvCardDetails undefined absolute top-60 left-2 bg-white ml-0 pl-[3.5rem]">{i.products.ratings}
              <i className="fa-solid fa-star py-1" style={{color: "#eee044", fontSize:"10px" }}></i>
              </h3> */}
            
              <section>
                <h2 style={{fontSize:"10px"}}>{i.products.name}</h2>
                <div>
                    <img src="https://images.bewakoof.com/web/Wishlist-selected.svg" className="my-wishList"/>
                </div>
                <div className="PriceText">
                  <span>₹</span>{i.products.price}
                </div>
              </section>
              <div className='flex gap-1 justify-center items-center cursor-pointer' style={{borderTop:"1px solid #e8e5e5",marginTop:"3px"}}>
                <img src="https://images.bewakoof.com/web/ic-web-head-cart.svg" alt="bag"
                className="bag-icon w-[19px]"/>
                <span style={{fontSize:"14px",wordBreak:"break-all"}} onClick={()=>addToBag({size:'S',quantity:'1'},i.products._id)}>Add To Bag</span>
              </div>
            </div>
            <span className='cross' onClick={()=>{removeFromWishList(i.products._id)}}>X</span>
        </div>)
        })}
        
        </div>
      
    </div>
  )
}
export default ShowWishList
