import React from "react";
import './header';
const FixedHeaderContainer = ()=>{
    return (<>
        {/* secondHeader closing */}
      <div className='fixedHeaderContainer' style={{position: "fixed",top: "81px",left:"0"}}>
        <div className='lastHeader'>
        <div className="fixedHeader">SALE</div>
          <div className="fixedHeader">LIVE NOW</div>
          <div className="fixedHeader">WINTERWEAR</div>
          <div className="fixedHeader">MEN</div>
          <div className="fixedHeader">WOMEN</div>
          <div className="fixedHeader">ACCESSORIES</div>
          <div className="fixedHeader">HEAVY DUTY</div>
          <div className="fixedHeader">BEWAKOOF AIR</div>
          <div className="fixedHeader">OFFICIAL MERCH</div>
          <div className="fixedHeader">PLUS SIZE</div>

        </div>
      </div>
      {/* fixedHeaderContainer closing */}
    </>)
}
export default FixedHeaderContainer;