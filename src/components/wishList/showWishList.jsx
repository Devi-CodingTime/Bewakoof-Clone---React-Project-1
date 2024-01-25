import React, { useEffect,useState,useContext } from 'react'
import TopHeader from '../home/header/topHeader';
import SideNavbar from '../home/header/sideNavbar';
import FooterWithoutAbout from '../home/footer/footerWithoutAbout';
import './showWishList.css';
import { categoryContext } from '../Context/provider';

import { Link, useNavigate } from 'react-router-dom';
import { wishlisted } from '../utility/storagewishlist';
import Loader from '../loader/loader';

const ShowWishList = ()=> {
    const {wishlist,getWishListData,removeFromWishList,getCartItems,token} = useContext(categoryContext);
    const [loader,setLoader] = useState(false);
    const [bagItem,setBagItem] = useState({});
    const navigate = useNavigate();
    const addItemToBag = async(bagData,id) =>{     
    try
    {
      setLoader(true);
        // let bagData = {size:'S',quantity:'1'}
        let res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,{
            method:"PATCH",
            headers : {projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json',Authorization:`Bearer ${token}`},
            body: JSON.stringify(bagData)    
        });
        let data = await res.json();
        setBagItem(data.data.items);
        removeFromWishList(id);
        getCartItems();
    }
    catch(error)
    {
        console.log(error);
    }
    finally{
      setLoader(false);
    }
  }
  // const imgClick = (id)=>{
  //   navigate(`/allCategory/${id}`)
  // }
    useEffect(()=>{
        getWishListData();
    },[]);

  return (
    <div>
      <TopHeader/>
      <SideNavbar/>
      {loader?<Loader/>:""}
        <div className="flex flex-wrap px-14 showWishList">
          
        {wishlist?.map((i,index)=>{
          return(<div className="card" style={{padding:"10px"}} key={index}>
            <div className="border-solid border-2 border-gray-200 w-56 rounded-md" style={{height:"380px"}}>
                
              <img src={i.products.displayImage} style={{height:"278px"}} className="Imagetag relative cursor-default"
              onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src="../../../../images/notAvailableimages.jpg"}}/>
                 {/* onClick={()=>{imgClick(i._id)}} */}
              {/* <h3 className="brand-name rvCardDetails undefined absolute top-60 left-2 bg-white ml-0 pl-[3.5rem]">{i.products.ratings}
              <i className="fa-solid fa-star py-1" style={{color: "#eee044", fontSize:"10px" }}></i>
              </h3> */}
            
              <section>
                <h2 style={{fontSize:"10px",whiteSpace: "nowrap",width: "184px",overflow: "hidden",textOverflow: "ellipsis"}}>{i.products.name}</h2>
                <div>
                    <img src="https://images.bewakoof.com/web/Wishlist-selected.svg" className="my-wishList"/>
                </div>
                <div className="PriceText">
                  <span>₹</span>{i.products.price}
                </div>
              </section>
              <div className='flex gap-1 justify-center items-center cursor-pointer mt-[6px]' style={{borderTop:"1px solid #e8e5e5",marginTop:"3px"}}>
                <img src="https://images.bewakoof.com/web/ic-web-head-cart.svg" alt="bag"
                className="bag-icon w-[19px]"/>
                <span style={{fontSize:"14px",wordBreak:"break-all"}} onClick={()=>addItemToBag({size:'S',quantity:'1'},i.products._id)}>Add To Bag</span>
              </div>
            </div>
            <span className='cross' onClick={()=>{removeFromWishList(i.products._id)}}>X</span>
        </div>)
        })}
        
        </div>
      <FooterWithoutAbout/>
      
    </div>
  )
}
export default ShowWishList
