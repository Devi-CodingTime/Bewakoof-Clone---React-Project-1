import React, { useContext, useEffect } from "react";
import "./category.css";
import FilterByCategory from "./filterByCategory";
import ShowFilterdCat from "./showFilteredCat";
import TopHeader from "../home/header/topHeader";
import SideNavbar from "../home/header/sideNavbar";

import { categoryContext } from "../Context/provider";
import { useLocation, useSearchParams ,useParams, Link} from "react-router-dom";
import FooterWithoutAbout from "../home/footer/footerWithoutAbout";

const ShowAllCategory = () =>{
    const {search} = useLocation();
    let query = new URLSearchParams(search);
    const{getWishListData,getCartItems} = useContext(categoryContext);
    
    useEffect(()=>{
        getWishListData();
        getCartItems();
        window.scrollTo(0, 0);
    },[]);

    return (
    <div className="parent">
        <div className="headerContainer">
            <TopHeader/>
            <SideNavbar/>
        </div>
        <div className="mainwrapper z-0">
            <div className="topheaderContainer">
                <Link to={`/`}><span className="tophead">Home </span></Link>
                <span className="tophead">{query.get("filterdata")?.toUpperCase()}</span>
                <span className="tophead">{query.get("filterdata")?.toUpperCase()}</span>

            </div>
            <div className="mainHeading">
                    <div className="NameContainer">
                   
                        <h1 className="searchResults">{query.get("filterdata")?query.get("filterdata")?.toUpperCase():"Results For"}</h1>
                        <span className="totalProductCount">(20)</span>
                    <div>
                        <div style={{width: "117px", height: "2px", backgroundColor: "#fbd139", display: "block", margin: "6px 0 0 2px"}}></div>
                </div>
                </div>
            </div>
            <div className="categoryHolder flex justify-center">
                <div className="filterText">FILTERS</div>
                {/* <div style={{position: "absolute",top: "223px",right: "200px",fontSize:"12px" ,color:"grey"}}>SORT BY</div> */}
                
                {/* <ContextProvider> */}
                    <FilterByCategory/>
                    <ShowFilterdCat data={query.get("data")} filterdata={query.get("filterdata")}/>
                {/* </ContextProvider> */}

            </div>
        </div>
        <FooterWithoutAbout/>
    </div>)
}
export default ShowAllCategory;