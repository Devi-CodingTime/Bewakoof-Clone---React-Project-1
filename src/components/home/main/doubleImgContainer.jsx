import React from 'react'
import './doubleImgContainer';
import { Link } from 'react-router-dom';

const DoubleImgContainer =(props)=> {
    const {doubleImg,margin} = props;
    return (
    <div className='designContainer'>
        {/* {doubleImg.map((i)=>{
            return( <a title="" style={{margin:`0 ${i===0?margin:0}px`}}>
            <img src={i.src} alt=""/>
          </a>)
        })} */}
        
         <Link to={`/allCategory?data=gender&filterdata=Men`} style={{margin:`0 ${margin}px`,cursor:"pointer"}}>
            <img src={doubleImg[0].src} alt=""/>
          </Link>
          <Link to={`/allCategory?data=gender&filterdata=Women`} style={{cursor:"pointer"}}>
            <img src={doubleImg[1].src} alt=""/>
          </Link>
    </div>
  )
}
export default DoubleImgContainer;