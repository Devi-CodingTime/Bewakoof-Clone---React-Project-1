import React, { useState } from "react";
import './header';
import { MenData,imgArray,WomenData,allMixed } from "../../Context/data";
import { Link} from "react-router-dom";
import { debounce } from "../../Context/debounce";
const TopHeader = () =>{
  const [search,setSearch] = useState("");
  const [matchedProduct, setMatchedProducts] = useState([]);

  const changeHandler = (event)=>{
    console.log(event.target.value);
    setSearch(event.target.value);
    let userInput = event.target.value;
    let filteredData = allMixed.filter((value)=>{
      return value.name.toUpperCase().includes(userInput.toUpperCase());
    });
    setMatchedProducts(filteredData);
    console.log("filterd daata ",filteredData);

  }
  const debounceChange = debounce(changeHandler,500);
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
                            return(<Link to={`/allCategory?data=subCategory&filterdata=${i.filter.subCategory}`} className="singleEntry false"><span>{i.name}</span></Link>)
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
                        {WomenData.Topwear.list.map((i)=>{
                          return(<Link to={`/allCategory?data=subCategory&filterdata=${i.filter.subCategory}`}  className="singleEntry false" ><span>{i.name}</span></Link>)
                        })}
                      </div>

                      <div className="col-xs-4 noPd">
                          <a className="headings singleEntry false" href="/men-bottom-wear-collection">Bottomwear</a>
                          {WomenData.Bottomwear.list.map((i)=>{
                          return(<Link to={`/allCategory?data=subCategory&filterdata=${i.filter.subCategory}`}  className="singleEntry false" ><span>{i.name}</span></Link>)
                          })}
                          
                      </div>
                      <div className="col-xs-4 noPd">
                          <a className="headings singleEntry false" href="/winter-wear-for-men">Winterwear</a>
                          {WomenData.Winterwear.list.map((i)=>{
                            return(<Link to={`/allCategory?data=subCategory&filterdata=${i.filter.subCategory}`}  className="singleEntry false" ><span>{i.name}</span></Link>)
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
              {/* <span className="menuItem">MOBILE COVERS</span> */}
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
                        <Link to={'/login'} id="loginLink" className="loginLink">Login</Link>
                    </div>
                </div>
            </div>
            <div className='pull-right mainHeaderCols searchWrapper'>
                <div className='icon-addon addon-sm'>
                    <form className='searchContainer' style={{position:"relative",borderBottom:"none",top:0}}>
                    <input className="searchInput form-controls" placeholder="Search by product, category or collection" 
                    type="text" autoComplete="off" onChange={debounceChange}
                    style={{fontSize: "13px"}}/>
                    <i className="fa-solid fa-magnifying-glass" style={{color: "grey",opacity: "0.6"}}></i>
                    </form>
                    <div className="seperator"></div>
                </div>
            </div>
        </div>
        </div>
      </div>
      {/* mathed product  */}
      {search?<div className="filtered1">
        {matchedProduct?.map((i)=>{
          return(<>
          <Link to={`/allCategory?searcheddata=${JSON.stringify(i.search)}&filtereddata=${JSON.stringify(i.filter)}`}>
            <div className="child1">{i.name}</div>
          </Link></>)
        })}
      </div>:""}

    </>)
}
export default TopHeader;