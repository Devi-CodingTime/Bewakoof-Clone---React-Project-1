import React from 'react';
import {useState,useEffect} from "react"
import './header.css';
export default function Header() {
  const [checked,setChecked] = useState(false);
  const [style, setStyle] = useState({visibility:"hidden",opacity:"0"});
  
  const data = {
    TopWear:{
      list:[
        {name:"Printed T-Shirt",search:{name:"Printed T-Shirt",description:"Printed T-Shirt"},filter:{subCategory:"tshirt"}},
        {name:"Oversized T-Shirt",search:{name:"Oversized T-Shirt",description:"Oversized T-Shirt"},filter:{subCategory:"tshirt"}},
        {name:"Plain T-Shirt",search:{name:"Plain T-Shirt",description:"Plain T-Shirt"},filter:{subCategory:"tshirt"}},
        {name:"Full Sleeve T-Shirt",search:{name:"Full Sleeve T-Shirt",description:"Full Sleeve T-Shirt"},filter:{subCategory:"tshirt"}},
        {name:"Half Sleeve T-Shirt",search:{name:"Half Sleeve T-Shirt",description:"Half Sleeve T-Shirt"},filter:{subCategory:"tshirt"}},
        {name:"Polo T-Shirt",search:{name:"Polo T-Shirt",description:"Polo T-Shirt"},filter:{subCategory:"tshirt"}},
        {name:"Shirt",search:{name:"Shirt",description:"Shirt"},filter:{subCategory:"shirt"}},
        {name:"Hoodie",search:{name:"Hoodie",description:"Hoodie"},filter:{subCategory:"hoodie"}},
        {name:"Kurta",search:{name:"Kurta",description:"Kurta"},filter:{subCategory:"kurta"}},
        {name:"Kurti",search:{name:"Kurti",description:"Kurti"},filter:{subCategory:"kurti"}},
        {name:"Sweater",search:{name:"Sweater",description:"Sweater"},filter:{subCategory:"sweater"}},
      ]
    }
    ,
    BottomWear:{
      list:[
        {name:"Jogger",search:{name:"Jogger",description:"Jogger"},filter:{subCategory:"jogger"}},
        {name:"Jeans",search:{name:"Jeans",description:"Jeans"},filter:{subCategory:"jeans"}},
        {name:"Pyjamas",search:{name:"Pyjamas",description:"Pyjamas"},filter:{subCategory:"pyjamas"}},
        {name:"Trouser",search:{name:"Trouser",description:"Trouser"},filter:{subCategory:"trouser"}},
        {name:"Shorts",search:{name:"Shorts",description:"Shorts"},filter:{subCategory:"shorts"}},
        
        {name:"Jumpsuit",search:{name:"Jumpsuit",description:"Jumpsuit"},filter:{subCategory:"jumpsuit"}},
        {name:"Tracksuit",search:{name:"Tracksuit",description:"Tracksuit"},filter:{subCategory:"tracksuit"}},
      ]
    }
    ,
    WinterWear:{
      list:[
        {name:"Jogger",search:{name:"Jogger",description:"Jogger"},filter:{subCategory:"jogger"}},
        {name:"Sweater",search:{name:"Sweater",description:"Sweater"},filter:{subCategory:"sweater"}},
        {name:"Hoodie",search:{name:"Hoodie",description:"Hoodie"},filter:{subCategory:"hoodie"}},
        {name:"Full Sleeve T-Shirt",search:{name:"Full Sleeve T-Shirt",description:"Full Sleeve T-Shirt"},filter:{subCategory:"tshirt"}},
        ]
    }
  }

  const [product,setProduct] = useState(data);
 
  const imgArray = [{src:"https://images.bewakoof.com/nav_menu/Circle-Nav-168x168--1702026638.png",imgName:"OOF Sale"},
                  {src:"https://images.bewakoof.com/nav_menu/circle-168x168-IK-1699605086.png",imgName:"Bwkf X Ishaan Khatter"},
                  {src:"https://images.bewakoof.com/nav_menu/MayCOTM-office-168x168-HarryPotter-1701350799.png",imgName:"COTM X Harry potter"},
                  {src:"https://images.bewakoof.com/nav_menu/Circle-cotm--168x168-1698769567.png",imgName:"Bwkf X Mickey Mouse" },
                  {src:"https://images.bewakoof.com/nav_menu/circle-Icon-HD-168x168-1698328094.png",imgName:"Bewakoof Heavy duty"},
                  {src:"https://images.bewakoof.com/nav_menu/Circle-Nav-1698393745.jpg",imgName:"Winterwear"},
                  {src:"https://images.bewakoof.com/nav_menu/circle-Naruto-168--3--1697690303.png",imgName:"Bwkf x Naruto"},
                  {src:"https://images.bewakoof.com/nav_menu/Circle-Nav-168x168-1697373196.png",imgName:"Cartoon Network"},
                  {src:"https://images.bewakoof.com/nav_menu/Circle-icon-Loki-168x168-1696599786.png",imgName:"Bwkf x Loki"},
                  {src:"https://images.bewakoof.com/nav_menu/circle-icon-pima-168x168-1695825476.png",imgName:"Bwkf x Pima"},
                  {src:"https://images.bewakoof.com/nav_menu/bewakoof-icon-specials-7-1622012421.png",imgName:"Plus Size Store"},
                  {src:"https://images.bewakoof.com/nav_menu/Indo-Fusion-Icons-168x168-1644555933.png",imgName:"Indo Fusion"},
                  {src:"https://images.bewakoof.com/nav_menu/Friends-Collection-Icons-168x168-1644555932.png",imgName:"FRIENDS Collection"},
                  {src:"https://images.bewakoof.com/nav_menu/me-shirt-icon--1656050998.png",imgName:"Customize T-shirts"},
                  {src:"https://images.bewakoof.com/nav_menu/Circle-Icon-Marvel-Youth-Beat-1653558342.png",imgName:"Marvel Youth Beat"},
                  {src:"https://images.bewakoof.com/nav_menu/batman-icon-1652639811.png",imgName:"The Batman Collection"},
                  {src:"https://images.bewakoof.com/nav_menu/1-1663225167.png",imgName:"Vote for Designs"},
                  {src:"https://images.bewakoof.com/nav_menu/minion-icon-1643697213.png",imgName:"Minions Collection"} 
                  ]
  const getchecked = ()=>{
    // alert("i am calex");
    setChecked(!checked);
    console.log(checked);
  }
  const onMouseOverCaptureHandler = () => {
    let updatedstyle = {...style};
    updatedstyle.visibility="visible";
    updatedstyle.opacity ="1";
    setStyle(updatedstyle);
};
const onMouseOutCaptureHandler = ()=>{
  let updatedstyle = {...style};
    updatedstyle.visibility="hidden";
    updatedstyle.opacity ="0";
    setStyle(updatedstyle);
    console.log(updatedstyle);
}
  return (
    
    <div className='mainHeader'>
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
              // onMouseOverCapture={onMouseOverCaptureHandler}
              >MEN
              {/* onMouseOutCapture={onMouseOutCaptureHandler} */}
             <div className='container menuDropdownWrpr' 
                    // style={{visibility:`${style.visibility}`,opacity:`${style.opacity}`}}
                    // onMouseOut={onMouseOutCaptureHandler}
                    >
                <div className='menuContents dropdownContent'>
                  <div className='dropDownMenu'>
                    <div className='col-xs-7 noPd navSeperator flex flex-wrap'>
                      <div className='col-xs-4 noPd'>
                      <a className="headings singleEntry false" href="/top-wear-for-men">Topwear</a>
                        {product.TopWear.list.map((i)=>{
                          return(<a className="singleEntry false" href="/men-printed-tshirts"><span>{i.name}</span></a>)
                        })}
                      </div>

                      <div className="col-xs-4 noPd">
                          <a className="headings singleEntry false" href="/men-bottom-wear-collection">Bottomwear</a>
                          {product.BottomWear.list.map((i)=>{
                          return(<a className="singleEntry false" href="/men-joggers"><span>{i.name}</span></a>)
                          })}
                          
                      </div>
                      <div className="col-xs-4 noPd">
                          <a className="headings singleEntry false" href="/winter-wear-for-men">Winterwear</a>
                          {product.WinterWear.list.map((i)=>{
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
              // onMouseOverCapture={onMouseOverCaptureHandler}
              >WOMEN
              <div className='container menuDropdownWrpr' 
                    // style={{visibility:`${style.visibility}`,opacity:`${style.opacity}`}}
                    // onMouseOut={onMouseOutCaptureHandler}
                    >
                <div className='menuContents dropdownContent'>
                  <div className='dropDownMenu'>
                    <div className='col-xs-7 noPd navSeperator flex flex-wrap'>
                      <div className='col-xs-4 noPd'>
                      <a className="headings singleEntry false" href="/top-wear-for-men">Topwear</a>
                        {product.TopWear.list.map((i)=>{
                          return(<a className="singleEntry false" href="/men-printed-tshirts"><span>{i.name}</span></a>)
                        })}
                      </div>

                      <div className="col-xs-4 noPd">
                          <a className="headings singleEntry false" href="/men-bottom-wear-collection">Bottomwear</a>
                          {product.BottomWear.list.map((i)=>{
                          return(<a className="singleEntry false" href="/men-joggers"><span>{i.name}</span></a>)
                          })}
                          
                      </div>
                      <div className="col-xs-4 noPd">
                          <a className="headings singleEntry false" href="/winter-wear-for-men">Winterwear</a>
                          {product.WinterWear.list.map((i)=>{
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
      
      {/* secondHeader closing */}
      <div className='fixedHeaderContainer' style={{position: "fixed",top: "78px",left:"42px"}}>
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
      {/* side navbar */}
      <div className='sideNavBox'>
        <header id="" className="mHeaderDiv mHeaderSticky visible-sm visible-xs " style={{zIndex: "9999"}}>
          <div className="noMg mHeader">
            <label for="hambu" className="mLogoDiv">
              <img src="https://images.bewakoof.com/web/ic-web-head-hamburger.svg" className="mMenuBtn" onClick={getchecked}/>
            </label>
            {/* <input type="checkbox" id="hambu"/> */}

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
      {/* sideNavBox closing */}
      
    </div>
  );
}



