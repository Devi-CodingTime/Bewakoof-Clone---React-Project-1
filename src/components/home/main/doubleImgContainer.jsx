import React from 'react'
import './doubleImgContainer';
const DoubleImgContainer =(props)=> {
    const {doubleImg,margin} = props;
    return (
    <div className='designContainer'>
        {/* {doubleImg.map((i)=>{
            return( <a title="" style={{margin:`0 ${i===0?margin:0}px`}}>
            <img src={i.src} alt=""/>
          </a>)
        })} */}
         <a title="" style={{margin:`0 ${margin}px`}}>
            <img src={doubleImg[0].src} alt=""/>
          </a>
          <a title="">
            <img src={doubleImg[1].src} alt=""/>
          </a>
    </div>
  )
}
export default DoubleImgContainer;