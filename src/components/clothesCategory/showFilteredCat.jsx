import React, { useContext, useEffect, useState } from "react";
import "./category.css";
import {categoryContext } from "../Context/provider";
import { Link, NavLink, useNavigate,useSearchParams } from "react-router-dom";

const ShowFilterdCat = (props)=>{
    const {data,filterdata}=props;
    
    const[searchParams, setSearhcParams]= useSearchParams();
    const [searcheddata,setSearcheddata] = useSearchParams();
    console.log("-----------------------------------------");
    // console.log("searchParams",searchParams.get("data"));
    // console.log("setSearhcParams",setSearhcParams.get("filterdata"));
    // console.log("setsearchfilter",setsearchfilter.get("setsearchfilter"));
    // console.log("searchfilter",searchfilter.get("searchfilter"));
    console.log("------------------------------------------");

    const {search,searchTerm} = useContext(categoryContext);
    const navigate = useNavigate();

    const [product,setProduct] = useState([]);
    const [heartClicked,setheartClicked] = useState(false);
    const [searchWithFilter, setSearchWillFilter] = useState("");
    // api call here
    async function getBestSellerProducts()
    {
        try
        {
            console.log("ghaaas ",typeof data);
            console.log("rthuyruyrtr ",typeof filterdata);

            const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"${searchParams.get("data")}":"${searchParams.get("filterdata")}"}&limit=50`,{
               
            method: "GET", // *GET, POST, PUT, DELETE, etc.                        
                headers: {
                    "Content-Type": "application/json",
                    'projectId': 'ctxjid7mj6o5',
                }});
                console.log("res",res);
            const result = await res.json();
            // console.log("result.data : ",result);  https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=1597"
            setProduct(result.data);
        
        }catch (error) {
            console.log(error);
        }
    }
    
    async function getsearchedProductsByCategory()
    {
    // https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"name":"Oversized"}&filter={"subCategory":"tshirt"} working for 

        try{
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
                console.log("inside filter ",res);
            const res = await data.json();
            setProduct(res.data);
        }                                                                                                          
        // sellerTag=best seller
        catch (error) {
            console.log(error);
        }
    }

    async function getproductBySearchAndFilter()
    {
        try
        {
            // console.log("ghaaas ",typeof data);
            // console.log("rthuyruyrtr ",typeof filterdata);

            const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search=${searcheddata.get("searcheddata")}&filter=${searcheddata.get("filtereddata")}&limit=50`,{
               
            method: "GET", // *GET, POST, PUT, DELETE, etc.                        
                headers: {
                    "Content-Type": "application/json",
                    'projectId': 'ctxjid7mj6o5',
                }});
                console.log("*****************",res);
            const result = await res.json();
            // console.log("result.data : ",result);  https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=1597"
            setProduct(result.data);
        
        }catch (error) {
            console.log(error);
        }
    }
    const cardClick = (id)=>{
        navigate(`/allCategory/${id}`)
      }

      const clickHeart = (id,index)=>{
        console.log("id",id);
        console.log("index",index);
        // let filter
        setheartClicked(!heartClicked);
      }


    useEffect(()=>{
        if(searchParams.get("data")=="sellerTag" || searchParams.get("data")=="subCategory"){
            getBestSellerProducts();
        }
        else
        {
            getproductBySearchAndFilter();
        }
    },[searchParams])
    
    useEffect(()=>{
        console.log("search here ",search);
        if(search)
            {
             getsearchedProductsByCategory();
            }
    },[search]);

    
    return(
    <div className="filtered">
        
        <img src="https://images.bewakoof.com/uploads/category/desktop/Oversize-cargo-Joggers_RM_Inside-Desktop-banner_(1)-1702821926.jpg"/>
        <div className="flex flex-wrap">
        {product?.map((i,index)=>{
          return(<div className="card" style={{padding:"10px"}}>
            <div className="border-solid border-2 border-gray-200 w-56 rounded-md" style={{height:"370px"}}
            >
                
            {/* <NavLink to = {(`/allCategory?search=${JSON.stringify(i.search)}&filter=${JSON.stringify(i.filter)}`)}> */}
                
                <img src={i.displayImage} style={{height:"278px"}} className="Imagetag"
                onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="../../../../images/notAvailableimages.jpg"}}
                onClick={()=>{cardClick(i._id)}}/>
                
            {/* </NavLink> */}
            <h3 className="brand-name rvCardDetails undefined">{i.brand}</h3>
            
            <section>
                <h2 style={{fontSize:"10px"}}>{i.name}</h2>
                <div onClick={()=>{clickHeart(i._id,index)}}>
                    {heartClicked?<img src="https://images.bewakoof.com/web/Wishlist-selected.svg" className="wishlist-icon"/>:
                    <img src="https://images.bewakoof.com/web/Wishlist.svg" className="wishlist-icon"/>}
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