import React from "react";
const CategoryWithSixImage = (props)=>{
    const {categoryImg} = props;
    return(
        <div className="menCategory flex">
          {categoryImg.map((i)=>{
            return(<a title="" style={{ display: "block", width: "100%", position: "relative" }}> 
            <img src={i.src} alt="Printed t shirts" style={{ width: "100%"}} />
          </a>)
          })}
          
        </div>
    )
}
export default CategoryWithSixImage;