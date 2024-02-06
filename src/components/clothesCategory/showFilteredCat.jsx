import React, { useContext, useEffect, useState } from "react";
import "./category.css";
import {categoryContext } from "../Context/provider";
import { useNavigate,useSearchParams } from "react-router-dom";
import { wishlisted } from "../utility/storagewishlist";
import Loader from "../loader/loader";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ShowFilterdCat = (props)=>{
    const [loader,setLoader] = useState(false);
    const[searchParams, setSearhcParams]= useSearchParams();
    const [searcheddata,setSearcheddata] = useSearchParams();

    const {search,searchTerm,addToWishList} = useContext(categoryContext);
    const navigate = useNavigate();

    const [product,setProduct] = useState([]);
    const [filterList,setFilterList] = useState({});
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };
    // api call here
    // let filter = `{"${searchParams.get("data")}":"${searchParams.get("filterdata")}"}`;
    

    
    async function getBestSellerProducts()
    {
        try
        {
            let filter = {};
            filter[searchParams.get("data")] = searchParams.get("filterdata");
            setFilterList(filter);
            setLoader(true);
            const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"${searchParams.get("data")}":"${searchParams.get("filterdata")}"}&limit=20&page=${page}`,{
               
            method: "GET", // *GET, POST, PUT, DELETE, etc.                        
                headers: {
                    "Content-Type": "application/json",
                    'projectId': 'ctxjid7mj6o5',
                }});
               
            const result = await res.json();
             setProduct(result?.data);
        
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
            let filterapplied={};
            filterapplied[searchTerm] = search;
            const updated = ({...filterList,...filterapplied});
            setFilterList(updated);
            setLoader(true);
            
            if(searchTerm==="price")
            {
                if(search==1){ 
                    // high to low
                    product.sort((a, b) => {
                        return a.price - b.price;
                    });
                    console.log();
                }
                if(search==-1){ 
                    // low to high
                    product.sort((a, b) => {
                        return b.price - a.price;
                    });
                }
                const sortedproduct = [...product];
                console.log(sortedproduct);
                setProduct(sortedproduct) ;
            }
            else
            {
                const api =`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter=${JSON.stringify(updated)}&limit=20&page=1`
                const data = await fetch(api,{
                    method: "GET", // *GET, POST, PUT, DELETE, etc.                        
                    headers: {
                        "Content-Type": "application/json",
                        'projectId': 'ctxjid7mj6o5',
                    }});
    
                const res = await data.json();
                {res && setProduct(res?.data)}
            }
        }                                                                                                          
        
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
            setFilterList(JSON.parse(searcheddata.get("filtereddata")));
            setLoader(true);
            const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search=${searcheddata.get("searcheddata")}&filter=${searcheddata.get("filtereddata")}&limit=20&page=${page}`,{
               
            method: "GET", // *GET, POST, PUT, DELETE, etc.                        
                headers: {
                    "Content-Type": "application/json",
                    'projectId': 'ctxjid7mj6o5',
                }});
            const result = await res.json();
            setProduct(result?.data);
        
        }catch (error) {
            console.log(error);
        }
        finally{
            setLoader(false);
        }
    }

    const handlemsgPopUp = ()=>{
        alert("Product already exists in the wishlist.");
    }
    
    
    const cardClick = (id)=>{
        navigate(`/allCategory/${id}`)
      }

      useEffect(()=>{
        getBestSellerProducts();
      },[]);
      
      useEffect(()=>{
            getproductBySearchAndFilter();

        },[searchParams,page])
    
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
        
        {product?product.map((i,index)=>{
          return(
          <div className="categorycard relative" style={{padding:"10px"}} key={index}>
           
            <div className="border-solid border-2 border-gray-200 w-56 rounded-md" style={{height:"370px"}}>
                
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
        }):<img src="/images/nodatafound.png" alt="no data found"/>}

        </div>
        <Stack spacing={2} style={{width:"50%",margin:"10px auto"}}>
            <Pagination count={10} page={page} onChange={handleChange}/>
        </Stack>
        </div>
    )
}
export default ShowFilterdCat