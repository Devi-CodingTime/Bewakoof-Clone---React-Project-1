import React from "react";
import './header';
import { MenData,imgArray } from "../../Context/data";
import { Link } from "react-router-dom";
const TopHeader = () =>{

  
    return (<>
    <div className='upperHeader'>
        <div className='leftheader'>
          <div>Offers </div>
          <div>Fanbook </div>
          <div><span style={{paddingRight:"8px"}}></span>Download App</div>
          <div>TriBe Membership</div>
        </div>
        <div className='rightHeader'>
          <div>Contact Us</div>
          <div>Track Order</div>
        </div>
      </div>
      {/* upperHeader closing */}

      <div className='secondHeader'>
        <div className='secondHeaderWrpr'>
            <div className="bewakoofLogoDiv">
                <a href="/" style={{display: "inline-block", height: "inherit",marginTop:"12px",width: "8rem",
              margin: "-8px 3.4rem"}}>
                
                    <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="bewakoof_logo" title="Bewakoof.com" style={{height: "20px",verticalAlign: "middle", marginBottom: "5px", width: "147px"}}/>
                </a>
            </div>
            <div className='menuContainer'>
              <span className="menuItem" 
              >MEN
             <div className='container menuDropdownWrpr' style={{width:"1050px"}}>
                <div className='menuContents dropdownContent'>
                  <div className='dropDownMenu'>
                    <div className='col-xs-7 noPd navSeperator flex flex-wrap'>
                      <div className='col-xs-4 noPd'>
                      <a className="headings singleEntry false" href="/top-wear-for-men">Topwear</a>
                        {MenData.Topwear.list.map((i)=>{
                          return(<Link to={`/allCategory?data=subCategory&filterdata=${i.filter.subCategory}`}  className="singleEntry false" ><span>{i.name}</span></Link>)
                          // Link to={`/allCategory?data=${JSON.stringify(i.search)}&filterdata=${JSON.stringify(i.filter)}`} 
                        })}
                      </div>

                      <div className="col-xs-4 noPd">
                          <a className="headings singleEntry false" href="/men-bottom-wear-collection">Bottomwear</a>
                          {MenData.Bottomwear.list.map((i)=>{
                            
                          return(<Link to={`/allCategory?data=subCategory&filterdata=${i.filter.subCategory}`} className="singleEntry false"><span>{i.name}</span></Link>)
                          })}
                          
                      </div>
                      <div className="col-xs-4 noPd">
                          <a className="headings singleEntry false" href="/winter-wear-for-men">Winterwear</a>
                          {MenData.Winterwear.list.map((i)=>{
                            return(<a className="singleEntry false" href="/men-hoodies-sweatshirts"><span>{i.name}</span></a>)
                          })}
                      </div>
                                    
                    </div>

                    <div className="col-xs-3" style={{width: "calc(25% - 40px)"}}>
                      <span className="singleEntry headings specials">SPECIALS</span>
                      {imgArray.map((i)=>{
                        return(<a className="singleEntry false" href="/campaign/oof-sale-for-men">
                        <img className="pull-left navBall" width={"40px"} height={"40px"} src={i.src} title="OOF Sale" alt="OOF Sale"/>
                        <span className="navBallTitle">{i.imgName}</span>
                      </a>)
                      })}
                    </div>
                  </div>
                </div>
              </div>  
              </span> 

              <span className="menuItem" 
              >WOMEN
              <div className='container menuDropdownWrpr'>
                <div className='menuContents dropdownContent'>
                  <div className='dropDownMenu'>
                    <div className='col-xs-7 noPd navSeperator flex flex-wrap'>
                      <div className='col-xs-4 noPd'>
                      <a className="headings singleEntry false" href="/top-wear-for-men">Topwear</a>
                        {MenData.Topwear.list.map((i)=>{
                          return(<a className="singleEntry false" href="/men-printed-tshirts"><span>{i.name}</span></a>)
                        })}
                      </div>

                      <div className="col-xs-4 noPd">
                          <a className="headings singleEntry false" href="/men-bottom-wear-collection">Bottomwear</a>
                          {MenData.Bottomwear.list.map((i)=>{
                          return(<a className="singleEntry false" href="/men-joggers"><span>{i.name}</span></a>)
                          })}
                          
                      </div>
                      <div className="col-xs-4 noPd">
                          <a className="headings singleEntry false" href="/winter-wear-for-men">Winterwear</a>
                          {MenData.Winterwear.list.map((i)=>{
                            return(<a className="singleEntry false" href="/men-hoodies-sweatshirts"><span>{i.name}</span></a>)
                          })}
                      </div>
                                    
                    </div>

                    <div className="col-xs-3" style={{width: "calc(25% - 40px)"}}>
                      <span className="singleEntry headings specials">SPECIALS</span>
                      {imgArray.map((i)=>{
                        return(<a className="singleEntry false" href="/campaign/oof-sale-for-men">
                        <img className="pull-left navBall" width={"40px"} height={"40px"} src={i.src} title="OOF Sale" alt="OOF Sale"/>
                        <span className="navBallTitle">{i.imgName}</span>
                      </a>)
                      })}
                    </div>
                  </div>
                </div>
              </div>
              </span>
              <span className="menuItem">MOBILE COVERS</span>
            </div>
            <div className='col-xs-5 mainHeaderCols searchMyAccount d-flex flex-row-reverse'>
            <div className='pull-right mainHeaderCols activemenuwrp' style={{paddingRight:"0px"}}>
                <div className='actionMenu'>
                    <span className='actionMenu'>
                        <a>
                            <img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png"  alt="country" className="countryIcon" height="30px" width="30px"/>
                        </a>
                    </span>
                    <span className='actionMenu actionMenuInner' id='textHeaderCart'>
                        <a href="/cart" className="cartIcon" style={{paddingRight: "0px", position: "relative"}}>
                        <img src='../../../bag-icon-6.png' alt="cart"  style={{color: "grey",width:"20px",height:"20px", marginTop:"16px",opacity:"0.6"}}/>
                        </a>
                    </span>
                    <span className='actionMenu' id='testHeadWish' style={{padding: "0 5px",cursor: "pointer"}}>
                  
                            <a className="icon_wishlist"><i className="fa-regular fa-heart" style={{color: "grey"}}></i></a>
                        
                    </span>
                    <div className='actionMenu' style={{display: "flex",alignItems: "baseline",textAlign: "right"}}>
                        <a href="#" id="loginLink" className="loginLink">Login</a>
                    </div>
                </div>
            </div>
            <div className='pull-right mainHeaderCols searchWrapper'>
                <div className='icon-addon addon-sm'>
                    <form className='searchContainer' style={{position:"relative",borderBottom:"none",top:0}}>
                    <input className="searchInput form-controls" placeholder="Search by product, category or collection" type="text" autoComplete="off"
                    style={{fontSize: "10px"}}/>
                    <i className="fa-solid fa-magnifying-glass" style={{color: "grey",opacity: "0.6"}}></i>
                    </form>
                    <div className="seperator"></div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </>)
}
export default TopHeader;