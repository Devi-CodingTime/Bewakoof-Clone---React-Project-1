import React from "react";
import { Link } from "react-router-dom";
const CategoryWithSixImage = (props)=>{
    const {categoryImg} = props;
    const pathcategory = ["/allCategory?data=subCategory&filterdata=tshirt",
    "/allCategory?data=subCategory&filterdata=hoodie",
    "/allCategory?data=subCategory&filterdata=shorts",
    "/allCategory?data=subCategory&filterdata=jogger",
    "/allCategory?data=subCategory&filterdata=jeans",
    "/allCategory?data=subCategory&filterdata=sweater"]
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