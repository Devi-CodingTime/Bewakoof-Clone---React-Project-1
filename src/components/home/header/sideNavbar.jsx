import React from "react";
import {useState,useEffect} from "react"
import './header';
const SideNavbar = () =>{
  const [checked,setChecked] = useState(false);  
  
  const getchecked = ()=>{
    setChecked(!checked);
    console.log(checked," check");
  }
    return(<>
    <div className='sideNavBox' style={{ width:"100%", height:"20px"}}>
        <header id="" className="mHeaderDiv mHeaderSticky" style={{zIndex: "1"}}>
          <div className="noMg mHeader">
            <label for="hambu" className="mLogoDiv">
              <img src="https://images.bewakoof.com/web/ic-web-head-hamburger.svg" className="mMenuBtn" onClick={getchecked}/>
            </label>

            {/* show if user click side bar hambu */}
            {checked?(<>
              <label for="hambu" className="sideMenuOverlay overlayId" onClick={getchecked}></label>
              <div id="menu" className="mMenu overlayId" onClick={getchecked}>
                <label for="hambu" className="sideMenuHolder">
                  <div className="mMenuHead clearfix">
                    <div className="welcomeHeader">
                      <h5 className="welcomeGuest">Welcome Guest
                        <div className="register">
                        <a>Login / Sign Up</a>
                        <h3>{checked}</h3>
                        </div>
                      </h5>
                    </div>
                  </div>
                  <div className="mMainMenu">
                    <div className="selectCountryHamburger d-flex justify-content-between align-items-center">
                        <div className="currentCountry d-flex align-items-center">
                          <img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" alt="countryIcon" className="countryIcon" height="30px" width="30px"/>
                          <div className="countryName">India</div>
                        </div>
                        <i className="fa-solid fa-angle-right" style={{color:"#545454"}}></i>
                    </div>
                    <div>
                      <div>
                        <div className="menuListWrpr" style={{backgroundColor: "rgb(255, 255, 255)"}}>
                          <p className="menuHeading">SHOP IN</p>
                          <ul>
                            <li className="MenuListOption ">
                              <a href="/categories?category=men">Men
                                <img className="navIcon" title="Circle-icon-men--1--1684748735.png" alt="Circle-icon-men--1--1684748735.png" src="https://images.bewakoof.com/nav_menu/Circle-icon-men--1--1684748735.png"/>
                              </a>
                            </li>
                            <li className="MenuListOption ">
                              <a href="/categories?category=women">Women
                                <img className="navIcon" title="Circle-icon-women--1--1684748736.png" alt="Circle-icon-women--1--1684748736.png" src="https://images.bewakoof.com/nav_menu/Circle-icon-women--1--1684748736.png"/>
                              </a>
                            </li>
                            <li className="MenuListOption ">
                              <a href="/categories?sub-cat=shop by fandom">Shop by Fandom
                                <img className="navIcon" title="Circle-icon-character-shop--1--1684748738.png" alt="Circle-icon-character-shop--1--1684748738.png" src="https://images.bewakoof.com/nav_menu/Circle-icon-character-shop--1--1684748738.png"/>
                              </a>
                            </li>
                            <li className="MenuListOption "><a href="/mobile-covers-india">Mobile Covers</a></li>
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
                        <div className="menuListWrpr" style={{backgroundColor: "rgb(255, 255, 255)"}}>
                          <ul>
                            <li className="MenuListOption">
                              <a>Login</a>
                            </li>
                          </ul>
                        </div>
                        <div className="menuListWrpr" style={{backgroundColor: "rgb(255, 255, 255)"}}></div>
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
          <div className="iconMenuOption ">
            <span className="" style={{width: "auto"}}>
              <form className="msearchContainer" style={{display: 'inline-block'}}>
                  <label>
                    <img src="https://images.bewakoof.com/web/ic-web-head-search.svg" className="header-icon ml-1 ico-search " alt="search-icon"/>
                  </label>
              </form>
            </span>
            <span>
              <div className="">
                <img src="https://images.bewakoof.com/web/ic-web-head-wishlist.svg" className="header-icon" alt="wish-list"/>
              </div>
            </span>
            <a href="/cart">
              <span>
                <img src="https://images.bewakoof.com/web/ic-web-head-cart.svg" className="header-icon" alt="shopping-bag"/> 
              </span>
            </a>
          </div></>)}
              {/* show if user not click side bar */}
          </div>
        </header>
      </div>
    </>)
}
export default SideNavbar;