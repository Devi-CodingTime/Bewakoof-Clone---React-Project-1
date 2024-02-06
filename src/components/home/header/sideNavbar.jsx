import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {useState} from "react";
import './header';
import { categoryContext } from "../../Context/provider";
import { wishlisted } from "../../utility/storagewishlist";
const SideNavbar = () =>{
  const {loggedIn,handleLogout,cartItem,wishlist} = useContext(categoryContext);
  const [checked,setChecked] = useState(false);  
  const location = useLocation();
  const { pathname } = location;
  
  const getchecked = ()=>{
    setChecked(!checked);
  }
    return(<>
    <div className='sideNavBox' style={{ width:"100%", height:"20px"}}>
        <header id="" className="mHeaderDiv mHeaderSticky" style={{zIndex: "1"}}>
          <div className="noMg mHeader">
            {pathname==="/"?<label for="hambu" className="mLogoDiv">
              <img src="https://images.bewakoof.com/web/ic-web-head-hamburger.svg" className="mMenuBtn" onClick={getchecked}/>
            </label>:
            // <Link to={`/`}>
            <i className="fa-solid fa-chevron-left prevIcon ml-5 text-xl cursor-pointer" onClick={()=>{window.history.back()}}></i>
            // {/* </Link> */}
            }

            {/* show if user click side bar hambu */}
            {checked?(<>
              <label for="hambu" className="sideMenuOverlay overlayId" onClick={getchecked}></label>
              <div id="menu" className="mMenu overlayId" onClick={getchecked}>
                <label for="hambu" className="sideMenuHolder">
                  <div className="mMenuHead clearfix">
                    <div className="welcomeHeader">
                      {loggedIn?<h5 className="welcomeGuest">Hello {localStorage.getItem("userName")}</h5>:
                      <h5 className="welcomeGuest">Welcome Guest
                        <div className="register">
                        <a>Login / Sign Up</a>
                        <h3>{checked}</h3>
                        </div>
                      </h5>}
                    </div>
                  </div>
                  <div className="mMainMenu">
                    {!loggedIn?
                    <div className="selectCountryHamburger d-flex justify-content-between align-items-center">
                        <div className="currentCountry d-flex align-items-center">
                          <img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" alt="countryIcon" className="countryIcon" height="30px" width="30px"/>
                          <div className="countryName">India</div>
                        </div>
                        <i className="fa-solid fa-angle-right" style={{color:"#545454"}}></i>
                    </div>:null}
                    <div>
                      <div style={{height:"842px"}}>
                        <div className="menuListWrpr" style={{backgroundColor: "rgb(255, 255, 255)"}}>
                          <p className="menuHeading">SHOP IN</p>
                          <ul>
                            <li className="MenuListOption">
                            <Link to={`/allCategory?data=gender&filterdata=Men`}>
                                Men
                                <img className="navIcon" title="Circle-icon-men--1--1684748735.png" alt="Circle-icon-men--1--1684748735.png" src="https://images.bewakoof.com/nav_menu/Circle-icon-men--1--1684748735.png"/>
                              </Link>
                            </li>
                            <li className="MenuListOption ">
                            <Link to={`/allCategory?data=gender&filterdata=Women`}>
                                Women
                                <img className="navIcon" title="Circle-icon-women--1--1684748736.png" alt="Circle-icon-women--1--1684748736.png" src="https://images.bewakoof.com/nav_menu/Circle-icon-women--1--1684748736.png"/>
                              </Link>
                            </li>
                            <li className="MenuListOption ">
                            <Link to ="/allCategory?data=sellerTag&filterdata=new arrival">
                              Designs of the Week
                                <img className="navIcon" title="Circle-icon-character-shop--1--1684748738.png" alt="Circle-icon-character-shop--1--1684748738.png" src="https://images.bewakoof.com/nav_menu/Circle-icon-DOTW--1--1684748737.png"/>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="menuListWrpr" style={{backgroundColor: "rgb(243, 243, 243)"}}>
                          <p className="menuHeading">MY PROFILE</p>
                          <ul>
                            <li className="MenuListOption ">
                            {loggedIn?<Link to={`/showWishList`}>MY WishList</Link>:<Link to={`/`}></Link>}
                            </li>
                            <li className="MenuListOption ">
                            {loggedIn?<Link to={`/myorder`}>My Order</Link>:
                              <Link to={`/login`}></Link>}
                              </li>
                            
                          </ul>
                        </div>
                        <div className="menuListWrpr" style={{backgroundColor: "rgb(243, 243, 243)"}}>
                          <p className="menuHeading">CONTACT US</p>
                          <ul>
                            <li className="MenuListOption "><a href="/contact-us">Help &amp; Support</a></li>
                            <li className="MenuListOption "><a href="/contact-us/feedback/give-us-feedback">Feedback &amp; Suggestions</a></li>
                            <li className="MenuListOption "><a href="/campaign/bpartner">Become a Seller</a></li>
                          </ul>
                        </div>
                        <div className="menuListWrpr" style={{backgroundColor: "rgb(243, 243, 243)"}}>
                          <p className="menuHeading">ABOUT US</p>
                          <ul>
                            <li className="MenuListOption ">
                              <a href="/about-us/our-story">Our Story</a>
                            </li>
                            <li className="MenuListOption ">
                              <a href="/fanbook-testimonial-reviews">Fanbook</a>
                            </li>
                            <li className="MenuListOption ">
                              <a href="/blog/">Blog</a>
                            </li>
                          </ul>
                        </div>
                        {!loggedIn?
                        <div className="menuListWrpr" style={{backgroundColor: "rgb(255, 255, 255)"}}>
                          <Link to={`/login`}>Login</Link></div>
                          :
                        <div className="menuListWrpr" style={{backgroundColor: "rgb(255, 255, 255)"}}>
                          <ul>
                            <li className="MenuListOption">
                            <div onClick={()=>{handleLogout()}}>Logout</div>
                            </li>
                          </ul>
                        </div>}
                      </div>
                    </div>
                  </div>
              </label>
            </div>
            </>
            ):(<><div className="mActionMenu " style={{display: "block"}}>
            <span className="mBewakoofLogoDiv">
              <a href="/" title="Online Lifestyle Brand - Bewakoof.com">
                <img src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg" alt="bewakoof_logo" style={{height: "18px", margin: "16px 0px", width: "40px"}}/>
              </a>
            </span>
          </div>
          <div className="iconMenuOption">
            <span className="" style={{width: "auto"}}>
              <form className="msearchContainer" style={{display: 'inline-block'}}>
                <Link to={`/`}>
                  <label>
                    <img src="https://images.bewakoof.com/web/ic-web-head-search.svg" className="header-icon ml-1 ico-search " alt="search-icon"/>
                  </label>
                </Link>
              </form>
            </span>
            <Link to={`${loggedIn?"/showWishList":"/login"}`}>
            <span>
              <div className="">
                <img src="https://images.bewakoof.com/web/ic-web-head-wishlist.svg" className="header-icon" alt="wish-list"/>
              </div>
            </span>
            </Link>
            {wishlist.length>0?<div className="cartCountWish">{wishlist.length}</div>:""}
            <Link to={`${loggedIn?"/addtocart":"/login"}`}>
              <span>
                <img src="https://images.bewakoof.com/web/ic-web-head-cart.svg" className="header-icon" alt="shopping-bag"/> 
              </span>
            </Link>
            {cartItem.length>0?<div className="cartCount">{cartItem.length}</div>:""}
          </div></>)}
              {/* show if user not click side bar */}
          </div>
        </header>
      </div>
    </>)
}
export default SideNavbar;