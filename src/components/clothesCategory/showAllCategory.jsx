import React, { useContext, useEffect } from "react";
import "./category.css";
import FilterByCategory from "./filterByCategory";
import ShowFilterdCat from "./showFilteredCat";
import TopHeader from "../home/header/topHeader";
import SideNavbar from "../home/header/sideNavbar";
// import { ContextProvider,categoryContext } from "../Context/provider";
import { useLocation, useSearchParams ,useParams} from "react-router-dom";

const ShowAllCategory = () =>{
    const {search} = useLocation();
    let query = new URLSearchParams(search);


    return (
    <div className="parent">
        <div className="headerContainer">
            <TopHeader/>
            <SideNavbar/>
        </div>
        <div className="mainwrapper px-20 z-0">
            <div className="topheadContainer">
                <span className="tophead">Home </span>
                <span className="tophead">Women Clothing </span>
                <span className="tophead">Joggers for Women</span>

            </div>
            <div class="mainHeading">
                    <div class="topheadContainer" style={{marginLeft:"55px",marginTop: "-38px",padding: "0 31px",height:"0"}}>
                   
                        <h1 class="searchResults">Joggers for Women</h1>
                        <span class="totalProductCount">(143)</span>
                    <div>
                        <div style={{width: "117px", height: "2px", backgroundColor: "#fbd139", display: "block", margin: "6px 0 0 2px"}}></div>
                </div>
                </div>
            </div>
            <div className="categoryHolder flex justify-center">
                <div style={{position: "absolute",top: "218px",left: "180px", fontSize:"12px" ,color:"grey"}}>FILTERS</div>
                <div style={{position: "absolute",top: "223px",right: "200px",fontSize:"12px" ,color:"grey"}}>SORT BY</div>
                
                {/* <ContextProvider> */}
                    <FilterByCategory/>
                    <ShowFilterdCat data={query.get("data")} filterdata={query.get("filterdata")}/>
                {/* </ContextProvider> */}

            </div>
        </div>
        
    </div>)
}
export default ShowAllCategory;