import React, { useContext, useEffect, useState } from "react";
import "./category.css";
import {categoryContext } from "../Context/provider";
import { useNavigate,useSearchParams } from "react-router-dom";
import { wishlisted } from "../utility/storagewishlist";
import Loader from "../loader/loader";

const ShowFilterdCat = (props)=>{
    const [loader,setLoader] = useState(false);
    const[searchParams, setSearhcParams]= useSearchParams();
    const [searcheddata,setSearcheddata] = useSearchParams();

    const {search,searchTerm,addToWishList,wishlistMsg} = useContext(categoryContext);
    const navigate = useNavigate();

    const [product,setProduct] = useState([]);
    
    // api call here
    async function getBestSellerProducts()
    {
        try
        {
            setLoader(true);
            const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"${searchParams.get("data")}":"${searchParams.get("filterdata")}"}&limit=50`,{
               
            method: "GET", // *GET, POST, PUT, DELETE, etc.                        
                headers: {
                    "Content-Type": "application/json",
                    'projectId': 'ctxjid7mj6o5',
                }});
               
            const result = await res.json();
             setProduct(result.data);
        
        }catch (error) {
            console.log(error);
        }
        finally{
            setLoader(false);
        }
    }
    
    async function getsearchedProductsByCategory()
    {
        try{
            setLoader(true);
            var api;
            if(searchTerm==="price")
            {
                api = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?sort={"${searchTerm}":"${search}"}&limit=50`
            }
            else
            {
                api = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"${searchTerm}":"${search}"}&limit=50`;
            }
                console.log("api ",api);
                const data = await fetch(api,{
                method: "GET", // *GET, POST, PUT, DELETE, etc.                        
                headers: {
                    "Content-Type": "application/json",
                    'projectId': 'ctxjid7mj6o5',
                }});
                // console.log("inside filter ",res);
            const res = await data.json();
            setProduct(res.data);
        }                                                                                                          
        // sellerTag=best seller
        catch (error) {
            console.log(error);
        }
        finally{
            setLoader(false);
        }
    }

    async function getproductBySearchAndFilter()
    {
        try
        {
            setLoader(true);
            const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search=${searcheddata.get("searcheddata")}&filter=${searcheddata.get("filtereddata")}&limit=50`,{
               
            method: "GET", // *GET, POST, PUT, DELETE, etc.                        
                headers: {
                    "Content-Type": "application/json",
                    'projectId': 'ctxjid7mj6o5',
                }});
                // console.log("*****************",res);
            const result = await res.json();
            // console.log("result.data : ",result);  https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=1597"
            setProduct(result.data);
        
        }catch (error) {
            console.log(error);
        }
        finally{
            setLoader(false);
        }
    }

    const handlemsgPopUp = ()=>{
        alert(wishlistMsg);
    }
    
    const cardClick = (id)=>{
        navigate(`/allCategory/${id}`)
      }


    useEffect(()=>{
        if(searchParams.get("data")=="sellerTag" || searchParams.get("data")=="subCategory" || searchParams.get("data")=="gender"
        ||searchParams.get("data")=="size" || searchParams.get("data")=="brand" ){
            getBestSellerProducts();
        }
        else
        {
            getproductBySearchAndFilter();
        }
    },[searchParams])
    
    useEffect(()=>{
        if(search)
            {
             getsearchedProductsByCategory();
            }
    },[search]);

    
    return(
    <div className="filtered">
        <img src="https://images.bewakoof.com/uploads/category/desktop/Oversize-cargo-Joggers_RM_Inside-Desktop-banner_(1)-1702821926.jpg"/>
        <div className="flex flex-wrap">
        {loader?<Loader/>:""}
        {product?.map((i,index)=>{
          return(<div className="categorycard relative" style={{padding:"10px"}} key={index}>
            <div className="border-solid border-2 border-gray-200 w-56 rounded-md" style={{height:"370px"}}
            >
                
            {/* <NavLink to = {(`/allCategory?search=${JSON.stringify(i.search)}&filter=${JSON.stringify(i.filter)}`)}> */}
                
                <img src={i.displayImage} style={{height:"278px"}} className="Imagetag"
                onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="../../../../images/notAvailableimages.jpg"}}
                onClick={()=>{cardClick(i._id)}}/>
                
            {/* </NavLink> */}
            <h3 className="absolute top-60 left-2 bg-white ml-0 pl-2">{parseFloat(i.ratings).toFixed(1)}
            <i className="fa-solid fa-star py-1" style={{color: "#eee044", fontSize:"10px" }}></i>
            </h3>
            <h3 className="brand-name rvCardDetails undefined break-all" style={{whiteSpace: "nowrap",width: "184px",overflow: "hidden",textOverflow: "ellipsis"}}>{i.brand}</h3>
            
            <section>
                <h2 style={{fontSize:"10px",whiteSpace: "nowrap",width: "184px",overflow: "hidden",textOverflow: "ellipsis"}}>{i.name}</h2>
                <div onClick={()=>{addToWishList(i._id)}}>
                    {wishlisted.has(i._id)?(<img src="https://images.bewakoof.com/web/Wishlist-selected.svg" className="wishlist-iconCat" onClick={handlemsgPopUp}/>):
                    (<img src="https://images.bewakoof.com/web/Wishlist.svg" className="wishlist-iconCat"/>)}
                </div>
                <div className="PriceText">
                  <span>₹</span>{i.price}
                </div>
            </section>
            </div>
        </div>)
        })}

        </div>
        </div>
    )
}
export default ShowFilterdCat

// <img src="https://images.bewakoof.com/uploads/category/desktop/Oversize-cargo-Joggers_RM_Inside-Desktop-banner_(1)-1702821926.jpg"/>