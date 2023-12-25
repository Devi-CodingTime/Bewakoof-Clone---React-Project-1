import React, { useEffect, useState,useContext } from 'react'
import "./addToCart.css";
import { categoryContext } from '../Context/provider';
import NoCart from './noCart';
import { Link } from 'react-router-dom';

const AddToCart =()=> {
  const [size, setSize] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [addwishList,setAddWishList] = useState([]);
  const {token,wishlist,getWishListData,addToBag} = useContext(categoryContext);
  const[totalPrice,setTotalPrice] = useState(0);
  const handleChange = (event) => {
    setSize(event.target.value);
    setQuantity(event.target.value);
  };

  const [cartItem,setCartItem] = useState([]);
  const getCartItems = async() =>{
    try
    {
      let res = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/cart",{
          method:"GET",
          headers : {projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json',Authorization:`Bearer ${token}`},
      });
      let data = await res.json();
      setCartItem(data.data.items);
        console.log("getCartItems---------",data);
        setTotalPrice(data.data.totalPrice)

    }catch(error){
        console.log(error);
    }
}

const addToWishList = async(id)=>{
  try
      {
          let bagData = { productId : id };
          let res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`,{
              method:"PATCH",
              headers : {projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json',Authorization:`Bearer ${token}`},
              body: JSON.stringify(bagData)
          });
          let data = await res.json();
          setAddWishList(data.data);
          
          console.log("get setWishList -------",data.data);
      }
      catch(error)
      {
          console.log(error);
      }
}

const removeFromCart = async(id)=>{
  try
      {
          let res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,{
              method:"DELETE",
              headers : {projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json',Authorization:`Bearer ${token}`}
              
          });
          let data = await res.json();
          setCartItem(data.data.items);
          
          console.log("cart item set done -------",data.data.items);
      }
      catch(error)
      {
          console.log(error);
      }
}
useEffect(()=>{
  getCartItems();
  getWishListData();
},[]);

  return (
    <>{cartItem.length==0?(<NoCart/>):  (<>
    <div className='Bewakoofimg'>
      <Link to="/">
      <img
        src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
        title="Bewakoof Logo"
        alt="bewakoof_logo"
        style={{ height: 30, padding: 2 ,margin:"0 176px"}}
        /></Link>
      </div>
      <div style={{borderBottom:"1px solid grey"}}></div>
    
    <h1 style={{textAlign:"left"}} className='py-8 myBag'>My Bag {cartItem.length} item</h1>
    <div className='flex flex-1 py-4 px-4 gap-4' style={{margin:"-50px 176px"}}>
      <div className='leftCart'>
        
        <div className='DeliveryBox flex flex-col gap-2'>
          <img src='https://images.bewakoof.com/web/Red-truck.png' className='df-img'/>
          <p className='pp'>Yay! You get FREE delivery on this order</p>
          </div>
          {cartItem?.map((i)=>{
            return(<>
            <div className='CART flex gap-[1.5rem]'>
          
            <div className='leftside'>
            <p>{i.product.name}</p>
            <p className='pricepara'>₹{i.product.price*i.quantity}</p>
            <div className='flex gap-2'>
              <select className='border' onChange={handleChange}>
                <option value="">Size</option>
                <option value={i.size} selected>{i.size}</option>
                {/* <option value="1">L</option> */}
              </select>
              <select className='border' onChange={handleChange}>
                <option value="">Qty</option>
                <option value={i.quantity} selected>{i.quantity}</option>
                {/* <option value="1">3</option> */}
              </select>
            </div>

          </div>
          
          <div className=''>
            <img className='w-20 h-24 rounded-md' src={i.product.displayImage}/>
          </div>
          
        </div>
        <div className='flex gap-2 cartbyn'>
          
          <span className='w-40 rmv' onClick={()=>{removeFromCart(i.product._id)}}>Remove</span>
          <span className='w-80' onClick={()=>{addToWishList(i.product._id)}}>Move To WishList</span>
        </div>
        </>)
      })}
        {/* cart closing */}
        
        
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
                <span className='span2'>₹{totalPrice}</span>
            </div>
            <div className="divprice flex flex-1">
                <span className='span1'>Delivery Fee  </span>
                <span className='span2'>₹100</span>
            </div>
            <div className="divprice flex flex-1">
                <span className='span1'>Bag Discount </span>
                <span className='span2'>₹000</span>
            </div>
            <div className="divprice flex flex-1">
                <span className='span1'>Subtotal </span>
                <span className='span2'>₹{totalPrice+100}</span>
            </div>
        </div>
        <div className="addsection">
            <span className='m-1'>total</span>
            <span className='mr-[50px]'>₹{totalPrice+100}</span>
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
    <div className='wishListHolder' >
    <h2 className='favheading'>My Wishlist</h2>
    
        <div className="flex flex-wrap">
        {wishlist?.map((i)=>{
          return(<div className="card" style={{padding:"10px"}}>
            <div className="border-solid border-2 border-gray-200 w-56 rounded-md" style={{height:"370px"}}
            >
                
                <img src={i.products.displayImage} style={{height:"278px"}} className="Imagetag relative cursor-default"
                onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="../../../../images/notAvailableimages.jpg"}}
                />
                
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
            <div className='flex gap-1 justify-center items-center cursor-pointer' style={{borderTop:"1px solid #e8e5e5", }}>
            <img src="https://images.bewakoof.com/web/ic-web-head-cart.svg" alt="bag"
              className="bag-icon"/>
              <span style={{fontSize:"14px",wordBreak:"break-all"}} onClick={()=>addToBag({size:'S',quantity:'1'},i.products._id)}>Move To Bag</span>
              </div>
            </div>
        </div>)
        })}
        {/* <span className='cross'>X</span> */}
        </div>
        
        
      </div>
    </>
    )}
    </>
  )
}
export default AddToCart