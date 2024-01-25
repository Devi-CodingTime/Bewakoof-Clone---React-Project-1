import React from "react";
import { Link } from "react-router-dom";
const CategoryWithSixImage = (props)=>{
    const {categoryImg,gender,count} = props;
    let pathcategory=[];
    if(gender==="Men")
    {
      if(count==="1")
      { pathcategory = [`/categorizeItem?category=tshirt&gender=${gender}`,
      `/categorizeItem?category=hoodie&gender=${gender}`,
      `/categorizeItem?category=shorts&gender=${gender}`,
      `/categorizeItem?category=jogger&gender=${gender}`,
      `/categorizeItem?category=jeans&gender=${gender}`,
      `/categorizeItem?category=sweater&gender=${gender}`];
      }
      if(count==="3")
      { pathcategory = [`/categorizeItem?category=shirt&gender=${gender}`,
      `/categorizeItem?category=shorts&gender=${gender}`,
      `/categorizeItem?category=pyjamas&gender=${gender}`,
      `/categorizeItem?category=kurta&gender=${gender}`,
      `/categorizeItem?category=trouser&gender=${gender}`,
      `/categorizeItem?category=jeans&gender=${gender}`];
      }
    }
    else
    {
       pathcategory = [`/categorizeItem?category=tshirt&gender=${gender}`,
    `/categorizeItem?category=shirt&gender=${gender}`,
    `/categorizeItem?category=kurti&gender=${gender}`,
    `/categorizeItem?category=jogger&gender=${gender}`,
    `/categorizeItem?category=jeans&gender=${gender}`,
    `/categorizeItem?category=jumpsuit&gender=${gender}`];
    }
    return(
        <div className="menCategory flex">
          {categoryImg.map((i,index)=>{
            return(<Link to={`${pathcategory[index]}`} title="" style={{ display: "block", width: "100%", position: "relative" }}> 
            <img src={i.src} alt="Printed t shirts" style={{ width: "100%"}} />
          </Link>)
          })}
          
        </div>
    )
}
export default CategoryWithSixImage;