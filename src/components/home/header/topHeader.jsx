import React, { useState,useContext, useEffect } from "react";
import './header.css';
import { categoryContext } from "../../Context/provider";
import { MenData,imgArray,WomenData,allMixed } from "../../Context/data";
import { Link} from "react-router-dom";
import { debounce } from "../../Context/debounce";
const TopHeader = () =>{
  const [search,setSearch] = useState("");
  const [matchedProduct, setMatchedProducts] = useState([]);

  const {loggedIn,handleLogout,handleLogin,cartItem,getCartItems,handleToken,wishlist,userName} = useContext(categoryContext);
  // console.log("inside top header ,",loggedIn);
  const changeHandler = (event)=>{
    setSearch(event.target.value);
    let userInput = event.target.value;

    let filteredData = allMixed.filter((value)=>{
      return value.name.toUpperCase().includes(userInput.toUpperCase());
    });
    setMatchedProducts(filteredData);

  }
  const debounceChange = debounce(changeHandler,500);

  useEffect(()=>{
    let storedToken = localStorage.getItem("token");
        // console.log("storedToken :",storedToken);
        if(storedToken)
        { 
          handleLogin(true);
          handleToken(storedToken);
        }
    getCartItems();
  },[]);
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
                <Link to={"/"} style={{display: "inline-block", height: "inherit",marginTop:"12px",width: "8rem",
                margin: "-8px 3.4rem"}}>
                
                    <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="bewakoof_logo" title="Bewakoof.com" style={{height: "20px",verticalAlign: "middle", marginBottom: "5px", width: "147px"}}/>
                </Link>
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
              <div className='container menuDropdownWrpr'style={{width:"1050px"}}>
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
                        {loggedIn?<Link to="/addtocart" className="cartIcon" style={{paddingRight: "0px", position: "relative"}}>
                          <img src='../../../bag-icon-6.png' alt="cart"  style={{color: "grey",width:"20px",height:"20px", marginTop:"16px",opacity:"0.6"}}/>
                        </Link>
                        :<Link to="/login" className="cartIcon" style={{paddingRight: "0px", position: "relative"}}>
                        <img src='../../../bag-icon-6.png' alt="cart"  style={{color: "grey",width:"20px",height:"20px", marginTop:"16px",opacity:"0.6"}}/>
                      </Link>}
                        {cartItem.length>0?<span className="bgLen">{cartItem.length}</span>:""}
                    </span>
                    <span className='actionMenu' id='testHeadWish' style={{padding: "0 5px",cursor: "pointer"}}>
                    {/* ||localStorage.getItem("token")
                    ||localStorage.getItem("token") */}
                    {loggedIn?<Link to={`/showWishList`} className="icon_wishlist"><i className="fa-regular fa-heart" style={{color: "grey"}}></i></Link>
                    :<Link to={`/login`}  className="icon_wishlist"><i className="fa-regular fa-heart" style={{color: "grey"}}></i></Link>}
                      {wishlist.length>0?<span className="wishLen">{wishlist.length}</span>:""}
                    </span>
                    <div className='actionMenu userIconConatiner' style={{display: "flex",alignItems: "baseline",textAlign: "right"}}>
                        {loggedIn===false || localStorage.getItem("token")===null?<Link to={'/login'} id="loginLink" className="loginLink">Login</Link>:
                        <img src="../../../images/User_Icon.png" onClick={()=>{handleLogout()}} style={{width:"50px",height:"46px"}}
                        />}
                        {loggedIn?
                        <div className="userContainer">
                          <div className="child2" style={{paddingLeft: "4px"}}>Hi, {userName}</div>
                          
                          <div className="child2"><Link to={`/showWishList`}>My Wishlist
                          </Link></div>
                          <div className="child2"><Link to={`/myorder`}>My Order
                          </Link></div>
                          <div className="child2" onClick={()=>{handleLogout()}} style={{paddingLeft: "4px"}}>
                            Logout</div>
                      </div>
                      :null}
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