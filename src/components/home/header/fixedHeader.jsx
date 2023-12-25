import React from "react";
import './header';
import { Link } from "react-router-dom";
const FixedHeaderContainer = ()=>{
    return (<>
        {/* secondHeader closing */}
      <div className='fixedHeaderContainer' style={{position: "fixed",top: "80px",left:"0"}}>
        <div className='lastHeader'>
        <Link to={`/allCategory?data=sellerTag&filterdata=top rated`}>
          <div className="fixedHeader">SALE</div>
        </Link>
          <Link to ="/"><div className="fixedHeader">LIVE NOW</div></Link>
          <Link to={`/allCategory?data=subCategory&filterdata=sweater`}>
            <div className="fixedHeader">WINTERWEAR</div>
          </Link>
          <Link to={`/allCategory?data=gender&filterdata=Men`}>
            <div className="fixedHeader">MEN</div>
          </Link>
          <Link to={`/allCategory?data=gender&filterdata=Women`}>
            <div className="fixedHeader">WOMEN</div>
          </Link>
          <Link to={`/allCategory?data=brand&filterdata=THE DAILY OUTFITS`}>  
            <div className="fixedHeader">THE DAILY OUTFITS</div>
          </Link>
          <Link to={`/allCategory?data=brand&filterdata=Bewakoof Air® 1.0`}>  
            <div className="fixedHeader">BEWAKOOF AIR</div>
          </Link>
          <Link to={`/allCategory?data=brand&filterdata=TISTABENE`}>  
            <div className="fixedHeader">TISTABENE</div>
          </Link>
          <Link to={`/allCategory?data=size&filterdata=XXL`}>
            <div className="fixedHeader">PLUS SIZE</div>
          </Link>
        </div>
      </div>
      {/* fixedHeaderContainer closing */}
    </>)
}
export default FixedHeaderContainer;











