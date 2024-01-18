import React from 'react'
import '../cart/noCart.css';
import { Link } from 'react-router-dom';
const NoCart=()=> {
  return (
    <div className='cardContainer'>
      <div className='Bewakoofimg'>
        <Link to={`/`}>
      <img
        src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
        title="Bewakoof Logo"
        alt="bewakoof_logo"
        style={{ height: 30, padding: 2 }}
        />
        </Link>
      </div>
      {/* <div style={{borderBottom:"1px solid grey"}}></div> */}
      <div className="cartHolder" style={{ backgroundColor: "rgb(255, 255, 255)",marginTop:"30px" }}>
  <div className="emptycartwish emptyPage" style={{ padding: "30px 0px 0px" }}>
    <img
      src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png"
      title="Empty Cart Page Doodle"
      alt="Empty Cart Page Doodle"
      width="150px"
    />
    <div className="clearfix">Nothing in the bag</div>
    <div className="clearfix" style={{paddingBottom:"30px"}}>
      <a
        className="success"
        href="/"
        style={{
          padding: 10,
          border: "2px solid",
          borderRadius: 5,
          display: "inline-block",
          marginTop: 15
        }}
      >
        Continue Shopping
      </a>
    </div>
  </div>
  <div
    className="emptylisting"
    style={{ backgroundColor: "rgb(255, 255, 255)",width:"26%" }}
  >
    <hr
      style={{
        height: 1,
        borderWidth: "1px 0px 0px",
        borderTopStyle: "solid",
        borderRightStyle: "initial",
        borderBottomStyle: "initial",
        borderLeftStyle: "initial",
        borderTopColor: "rgb(204, 204, 204)",
        borderRightColor: "initial",
        borderBottomColor: "initial",
        borderLeftColor: "initial",
        borderImage: "initial"
      }}
    />
    <div style={{ margin: "20px auto" }}>
      <span id="smallText">You could try one of these categories:</span>
    </div>
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <td className="searchCategories searchCategoriesTitle">Men</td>
              <td className="row noMg searchCategoriesList">
                <div className="searchCategories col-xs-6 noPd">
                  <a className="blueText" href="/top-wear-for-men">
                    Topwear
                  </a>
                </div>
                <div className="searchCategories col-xs-6 noPd">
                  <a className="blueText" href="/men-bottom-wear-collection">
                    Bottomwear
                  </a>
                </div>
                <div className="searchCategories col-xs-6 noPd">
                  <a className="blueText" href="/bestsellers-for-men">
                    Bestsellers
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td className="searchCategories searchCategoriesTitle">Women</td>
              <td className="row noMg searchCategoriesList">
                <div className="searchCategories col-xs-6 noPd">
                  <a className="blueText" href="/top-wear-for-women">
                    Topwear
                  </a>
                </div>
                <div className="searchCategories col-xs-6 noPd">
                  <a className="blueText" href="/bottom-wear-for-women">
                    Bottomwear
                  </a>
                </div>
                <div className="searchCategories col-xs-6 noPd">
                  <a className="blueText" href="/bestsellers-for-women">
                    Bestsellers
                  </a>
                </div>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<div
  style={{
    marginTop: 0,
    textAlign: "center",
    background: "rgb(251, 251, 251)"
  }}
>
  <img
    src="https://images.bewakoof.com/web/secure-payments-image.png"
    title="Secure Payments"
    alt="Secure Payments"
    style={{ maxWidth: 257, width: "100%", margin: "10px auto", padding:"20px"}}
  />
</div>
    </div>
  )
}
export default NoCart;