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

    const {search,searchTerm,token} = useContext(categoryContext);
    const navigate = useNavigate();

    const [product,setProduct] = useState([]);
    const [searchWithFilter, setSearchWillFilter] = useState("");

    const [favArr,setFavArr] = useState([]);
    const [wishList,setWishList] = useState([]);
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
                console.log("res from design of the week",res);
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

    const addToWishList = async(id)=>{
        try
            {
                setFavArr([...favArr,id]);

                let bagData = { productId : id };
                let res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`,{
                    method:"PATCH",
                    headers : {projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json',Authorization:`Bearer ${token}`},
                    body: JSON.stringify(bagData)
                });
                let data = await res.json();
                setWishList(data.data);
                
                console.log("get setWishList -------",data.data);
            }
            catch(error)
            {
                console.log(error);
            }
    }
    
    const cardClick = (id)=>{
        navigate(`/allCategory/${id}`)
      }

    //   const clickHeart = (id)=>{
    //     setFavArr([...favArr,id]);
    //   }


    useEffect(()=>{
        if(searchParams.get("data")=="sellerTag" || searchParams.get("data")=="subCategory" || searchParams.get("data")=="gender"){
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
          return(<div className="card relative" style={{padding:"10px"}}>
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
                    {favArr.includes(i._id)?<img src="https://images.bewakoof.com/web/Wishlist-selected.svg" className="wishlist-icon"/>:
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