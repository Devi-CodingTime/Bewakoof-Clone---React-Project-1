import React from 'react'
import "./footer.css";
import FooterAboutUs from '../footer/footerAboutUs';
 const Footer=()=> {
  return (<>
   <div style={{ marginBottom: 0 ,zIndex:"9999"}}>
    <div className="footerToBottom footerForMobile">
    <div className="footerDiv">
      <div className="container">
        <div className="row noMg footerLogo">
        
        <div className="demoText">Bewakoof<i class="fa-regular fa-registered" style={{color: "#FDD835", fontSize:"5px", position: "relative",top: "-11px",left: "-3px"}}></i></div>
          <div
            className="col-xs-12 noPdSm"
            style={{lineHeight: 1.5, overflowY: "hidden",position: "relative",
            top:"18px" }}>
            <a
              href="/"
              title="Online Lifestyle Brand - Bewakoof.com"
              style={{
                position:'absolute',
                top:"-66px",left:"73px",marginBottom:"0px",
                lineHeight: 52,
                overflowY: "hidden",
                display: "inline-block"
              }}>
            </a>
            <br />
            <br />
          </div>
        </div>
        <section className="col-xs-12 noPdSm">
          <div className="col-sm-6 col-md-3 noPdSm footerMenuSec">
            <span className="footerTitle">CUSTOMER SERVICE</span>
            <ul>
              <li>
                <a href="https://www.bewakoof.com/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="https://www.bewakoof.com/myaccount/orders">
                  Track Order
                </a>
              </li>
              <li>
                <a href="https://www.bewakoof.com/myaccount/orders?status=returned">
                  Return Order
                </a>
              </li>
              <li>
                <a href="https://www.bewakoof.com/contact-us">Cancel Order</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 noPdSm footerMenuSec">
            <span className="footerTitle">COMPANY</span>
            <ul>
              <li>
                <a href="https://www.bewakoof.com/about-us/our-story">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://www.bewakoof.com/careers">We're Hiring</a>
              </li>
              <li>
                <a href="https://www.bewakoof.com/terms-and-conditions">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="https://www.bewakoof.com/privacy-policy-and-disclaimer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://www.bewakoof.com/blog">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 connectWithUs noPdSm footerMenuSec">
            <span className="footerTitle">CONNECT WITH US</span>
            <div className="col-xs-12 noPd">
              <div className="socialIcoMobile">
                <div className="fbInsta">
                  <a
                    className="whiteText"
                    href="https://www.facebook.com/bewakoofcom"
                    target="_blank"
                  >
                    <i className="icon_facebook" />
                    <span className="hidden-xs"><img src='../../../../images/fb.png' className='fbimage'/>4.7M People Like this</span>
                  </a>
                </div>
                <div className="fbInsta">
                  <a
                    className="whiteText"
                    href="https://www.instagram.com/bewakoofofficial/"
                    target="_blank"
                  >
                    <i className="icon_instagram_new" />
                    <span className="hidden-xs"><img src='../../../../images/insta1.png' className='instaImg'/>1M Followers</span>
                  </a>
                </div>
              </div>
              <div>
                <a href="https://twitter.com/bewakoof" target="_blank">
                  <i className="icon_twitter" />
                </a>
                <a href="https://www.pinterest.com/bewakoof/" target="_blank">
                  <i className="icon_pinterest" />
                </a>
                <a
                  href="https://www.snapchat.com/add/bewakoof_tv"
                  target="_blank"
                >
                  <i className="icon_snapchat" />
                </a>
                <a
                  href="https://itunes.apple.com/in/app/bewakoof/id1100190514?mt=8"
                  target="_blank"
                >
                  <i className="icon_apple" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof&hl=en"
                  target="_blank"
                >
                  <i className="iconAndroid" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 noPdSm hidden-xs">
            <span className="footerTitle">KEEP UP TO DATE</span>
            <form name="subscriptionForm" role="form" className='flex'>
              <input
                type="email"
                className="form-control subscription col-xs-7"
                placeholder="Enter Email Id"
                required=""
                defaultValue=""
              />
              <input
                type="submit"
                className="subscribeButton col-xs-5"
                defaultValue="SUBSCRIBE"
              />
            </form>
            <div className="errorHolder" />
          </div>
        </section>
        <section className="col-xs-12 noPdSm paymentGatewaysFooterBar">
          <br className="hidden-xs" />
          <br className="hidden-xs" />
          <div className="col-md-3 col-sm-6 noPdSm tNC hidden-xs">
            <ul>
              <li>
                <a href="https://www.bewakoof.com/contact-us/refund-or-return">
                  {/* <i className="icon_return_order" /> */}
                  <img src='../../../../images/return6.png' className='icon_return_order'/>
                  &nbsp;&nbsp;&nbsp;&nbsp;15 Days return policy*
                </a>
              </li>
              <li>
                <a href="https://www.bewakoof.com/contact-us/order-delivery-payment"
                 style={{marginLeft: "-24px"}}>
                  <img src='../../../../images/rs.jpg' className='icon_cod'/>
                  &nbsp;&nbsp;&nbsp;&nbsp;Cash on delivery*
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 noPdSm noPdXs" style={{marginLeft:"6.7%"}}>
            <ul>
              <li>
                <span className="footerTitle">DOWNLOAD THE APP</span>
                <div className="downloadAppIcon">
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof&hl=en"
                  >
                    <img
                      src="https://images.bewakoof.com/web/app_android_v1.png"
                      title="android app"
                      alt="android app"
                      width="100px"
                      className="hidden-xs"
                    />
                    <img
                      src="https://images.bewakoof.com/web/android-2x.png"
                      title="android app"
                      alt="android app"
                      width="24px"
                      className="visible-xs"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://itunes.apple.com/in/app/bewakoof/id1100190514?mt=8"
                  >
                    <img
                      src="https://images.bewakoof.com/web/app_ios_v1.png"
                      title="ios app"
                      alt="ios app"
                      width="100px"
                      className="hidden-xs"
                    />
                    <img
                      src="https://images.bewakoof.com/web/apple-2x.png"
                      title="ios app"
                      alt="ios app"
                      width="24px"
                      className="visible-xs"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12 noPdSm hidden-xs">
            <br className="visible-xs" />
            <br className="visible-xs" />
            <span className="footerTitle">100% Secure Payment</span>
            <img
              className="paymentImg"
              src="https://images.bewakoof.com/web/secure-payments-image.png"
              title="secure payments"
              alt="secure payments"
            />
          </div>
        </section>
        <section className="col-xs-12 noPdSm footCategoryList">
          <div
            className="footerContainer clearfix"
            style={{ margin: "30px 0px" }}
          >
            <ul className="col-sm-3 footCategoryMobile">
              <a href="/men-clothing">
                <h4 className="fcWhite">Men's Clothing</h4>
              </a>
              <li>
                <a
                  href="/top-wear-for-men"
                  className="seperate-li"
                  title="Top Wear for Men Online India - Bewakoof"
                >
                  Top Wear
                </a>
              </li>
              <li>
                <a
                  href="/men-new-arrivals-collection"
                  className=""
                  title="Buy latest clothes for Men Online India - Bewakoof"
                >
                  Men's New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="/men-t-shirts"
                  className=""
                  title="Mens T-Shirts Online India - Bewakoof"
                >
                  Men's Half Sleeve T-Shirts
                </a>
              </li>
              <li>
                <a
                  href="/men-hoodies-sweatshirts"
                  className=""
                  title="Mens Hoodies & SweatShirts Online India - Bewakoof"
                >
                  Men's Hoodies &amp; Sweatshirts
                </a>
              </li>
              <li>
                <a
                  href="/men-full-sleeve-t-shirts"
                  className=""
                  title="Long Sleeve T-Shirts for Men Online India - Bewakoof"
                >
                  Men's Long Sleeve T-shirts
                </a>
              </li>
              <li>
                <a
                  href="/men-printed-tshirts"
                  className=""
                  title="Printed T-Shirts for Men Online India - Bewakoof"
                >
                  Men's Printed T-shirts
                </a>
              </li>
              <li>
                <a
                  href="/men-plain-t-shirts"
                  className=""
                  title="Plain T-Shirts for Men Online India - Bewakoof"
                >
                  Men's Plain T-shirts
                </a>
              </li>
              <li>
                <a
                  href="/men-vests"
                  className=""
                  title="Gym Vests for Men Online India - Bewakoof"
                >
                  Men's Vests
                </a>
              </li>
              <li>
                <a
                  href="/polo-t-shirts-for-men"
                  className=""
                  title="Polo Neck T-Shirts - Bewakoof"
                >
                  Men's Polo T-Shirts
                </a>
              </li>
              <li>
                <a
                  href="/men-kurtas"
                  className=""
                  title="Kurtas for Men - Bewakoof"
                >
                  Men's Kurtas
                </a>
              </li>
              <li>
                <a
                  href="/mens-combo-t-shirt"
                  className=""
                  title="Combo T-Shirts for Men - Bewakoof"
                >
                  Men's Combo T-Shirts
                </a>
              </li>
              <li>
                <a
                  href="/men-shirts"
                  className=""
                  title="Buy Casual Shirts for Men Online India - Bewakoof"
                >
                  Men's Shirts
                </a>
              </li>
              <li>
                <a
                  href="/men-nightwear"
                  className=""
                  title="Buy Nightwear for Men Online"
                >
                  Men's Nightwear
                </a>
              </li>
              <li>
                <a
                  href="/plus-size-store-for-men"
                  className=""
                  title="Plus Size Store for Men - Bewakoof"
                >
                  Men's Plus Size Store
                </a>
              </li>
              <li>
                <a
                  href="/men-bottom-wear-collection"
                  className="seperate-li"
                  title="Bottom Wear for Men Online India - Bewakoof"
                >
                  Bottom Wear
                </a>
              </li>
              <li>
                <a
                  href="/men-pajamas"
                  className=""
                  title="Pajamas for men Online India - Bewakoof"
                >
                  Men's Pajamas
                </a>
              </li>
              <li>
                <a
                  href="/men-boxer-shorts"
                  className=""
                  title="Boxer Shorts for men Online India - Bewakoof"
                >
                  Men's Boxer Shorts
                </a>
              </li>
              <li>
                <a
                  href="/men-shorts"
                  className=""
                  title="Shorts for men Online India - Bewakoof"
                >
                  Men's Shorts
                </a>
              </li>
              <li>
                <a
                  href="/men-joggers"
                  className=""
                  title="Buy Jogger pants for men Online India - Bewakoof"
                >
                  Men's Track Pants
                </a>
              </li>
              <li>
                <a
                  href="/men-pants"
                  className=""
                  title="Trouser Pants for Men Online India - Bewakoof"
                >
                  Men's Pants
                </a>
              </li>
              <li className="seperate-li">
                <a>Featured</a>
              </li>
              <li>
                <a
                  href="/men-flip-flops"
                  title="Buy Slippers for Men Online India"
                >
                  Men's Flip Flops
                </a>
              </li>
              <li>
                <a href="/men-sliders" title="Buy Sliders for Men Online India">
                  Men's Sliders
                </a>
              </li>
              <li>
                <a
                  href="/marvel-merchandise"
                  title="Buy Marvel Merchandise India Online"
                >
                  Marvel T-Shirts
                </a>
              </li>
              <li>
                <a
                  href="/disney-merchandise"
                  title="Buy Disney Merchandise India"
                >
                  Disney T-Shirts
                </a>
              </li>
              <li>
                <a
                  href="/avengers-merchandise"
                  title="Buy Avengers Merchandise India Online"
                >
                  Avengers T-Shirts
                </a>
              </li>
              <li>
                <a
                  href="/star-wars-merchandise"
                  title="Buy Star Wars Merchandise India Online"
                >
                  Star Wars T-Shirts
                </a>
              </li>
              <li>
                <a
                  href="/batman-merchandise"
                  title="Buy Batman Merchandise India Online"
                >
                  Batman T-Shirts
                </a>
              </li>
              <li>
                <a
                  href="/superman-merchandise"
                  title="Buy Superman Merchandise India Online"
                >
                  Superman T-Shirts
                </a>
              </li>
              <li>
                <a
                  href="/joker-merchandise"
                  title="Buy Joker Merchandise India Online"
                >
                  Joker T-Shirts
                </a>
              </li>
            </ul>
            <ul className="col-sm-3 footCategoryMobile">
              <a href="/women-clothing">
                <h4 className="fcWhite">Women's Clothing</h4>
              </a>
              <li>
                <a
                  href="/top-wear-for-women"
                  className="seperate-li"
                  title="Top Wear for Women Online India - Bewakoof.com"
                >
                  Women's Top Wear
                </a>
              </li>
              <li>
                <a
                  href="/women-new-arrivals-collection"
                  className=""
                  title="Buy Latest Clothes for Women Online India - Bewakoof.com"
                >
                  Women's New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="/women-t-shirts"
                  className=""
                  title="Buy T Shirts for Women Online India - Bewakoof.com"
                >
                  Women's T-Shirts
                </a>
              </li>
              <li>
                <a
                  href="/women-hoodies-sweatshirts"
                  className=""
                  title="Buy Hoodies & Sweatshirts for Women Online India - Bewakoof.com"
                >
                  Women's Hoodies &amp; Sweatshirts
                </a>
              </li>
              <li>
                <a
                  href="/women-dresses"
                  className=""
                  title="Buy T Shirt Dresses for Women Online India - Bewakoof.com"
                >
                  Women's Dresses
                </a>
              </li>
              <li>
                <a
                  href="/women-3-4-sleeve-t-shirts"
                  className=""
                  title="Buy 3 4 T-Shirts Online India - Bewakoof.com"
                >
                  Women's 3/4 Sleeve T-Shirts
                </a>
              </li>
              <li>
                <a
                  href="/women-kurtas"
                  className=""
                  title="Buy Kurtis for Women Online"
                >
                  Women's Kurtis
                </a>
              </li>
              <li>
                <a
                  href="/womens-combo-t-shirt"
                  className=""
                  title="Buy Combo T-Shirts for Women Online"
                >
                  Women's Combo T-Shirts
                </a>
              </li>
              <li>
                <a
                  href="/women-nightwear"
                  className=""
                  title="Buy Nightwear for Women Online"
                >
                  Women's Nightwear
                </a>
              </li>
              <li>
                <a
                  href="/plus-size-store-for-women"
                  className=""
                  title="Buy Plus Size Tops for Women Online"
                >
                  Women's Plus Size Store
                </a>
              </li>
              <li>
                <a
                  href="/bottom-wear-for-women"
                  className="seperate-li"
                  title="Buy Bottom Wear for Women Online India - Bewakoof.com"
                >
                  Women's Bottom Wear
                </a>
              </li>
              <li>
                <a
                  href="/women-pajamas"
                  className=""
                  title="Buy Pajamas for Women Online India - Bewakoof.com"
                >
                  Women's Pajamas
                </a>
              </li>
              <li>
                <a
                  href="/women-boxer-shorts"
                  className=""
                  title="Buy Boxers for Women Online India - Bewakoof.com"
                >
                  Women's Boxer Shorts
                </a>
              </li>
              <li>
                <a
                  href="/womens-denims"
                  className=""
                  title="Buy Jeans for Women Online India - Bewakoof.com"
                >
                  Women's Jeans
                </a>
              </li>
              <li>
                <a
                  href="/women-joggers-sweatpants"
                  className=""
                  title="Buy Joggers for Women Online India - Bewakoof.com"
                >
                  Women's Joggers
                </a>
              </li>
              <li>
                <a
                  href="/women-shorts"
                  className=""
                  title="Buy Shorts for Women Online India - Bewakoof.com"
                >
                  Women's Shorts
                </a>
              </li>
              <li>
                <a
                  href="/bags"
                  className="seperate-li"
                  title="Bags for Men & Women"
                >
                  BAGS
                </a>
              </li>
              <li>
                <a
                  href="/laptop-bags"
                  className=""
                  title="Buy Laptop Bags for Men & Women"
                >
                  Laptop Bags
                </a>
              </li>
              <li>
                <a
                  href="/small-backpacks"
                  className=""
                  title="Buy Mini Bags for Men & Women"
                >
                  Small Backpacks
                </a>
              </li>
              <li className="seperate-li">
                <a>Featured</a>
              </li>
              <li>
                <a
                  href="/women-sliders"
                  title="Buy Sliders for Women Clothing Online India"
                >
                  Women's Slides
                </a>
              </li>
              <li>
                <a
                  href="/women-flip-flops"
                  title="Buy Slippers for Women India"
                >
                  Women's Flip Flops
                </a>
              </li>
            </ul>
            <ul className="col-sm-3 footCategoryMobile">
              <a href="/mobile-covers-india">
                <h4 className="fcWhite">Mobile Covers</h4>
              </a>
              <li>
                <p title="Shop by brands" style={{ cursor: "default" }}>
                  Brands
                </p>
              </li>
              <li>
                <a
                  href="/mobile-covers-india/apple-cases-back-covers"
                  title="Apple"
                >
                  Apple
                </a>
              </li>
              <li>
                <a
                  href="/mobile-covers-india/realme-cases-back-covers"
                  title="Realme"
                >
                  Realme
                </a>
              </li>
              <li>
                <a
                  href="/mobile-covers-india/samsung-cases-back-covers"
                  title="Samsung"
                >
                  Samsung
                </a>
              </li>
              <li>
                <a
                  href="/mobile-covers-india/xiaomi-cases-back-covers"
                  title="Xiaomi"
                >
                  Xiaomi
                </a>
              </li>
              <li>
                <a
                  href="/mobile-covers-india/oneplus-cases-back-covers"
                  title="Oneplus"
                >
                  Oneplus
                </a>
              </li>
              <li>
                <a
                  href="/mobile-covers-india/vivo-cases-back-covers"
                  title="Vivo"
                >
                  Vivo
                </a>
              </li>
              <li>
                <a
                  href="/mobile-covers-india/oppo-cases-back-covers"
                  title="Oppo"
                >
                  Oppo
                </a>
              </li>
            </ul>
            <ul className="col-xs-12 col-sm-3 footerExtraLinks">
              <h4 className="col-sm-12 footCategoryMobile fcWhite">
                <a className="success" href="/fanbook-testimonial-reviews">
                  {" "}
                  Fanbook
                </a>
              </h4>
              <h4 className="col-sm-12 footCategoryMobile fcWhite">
                <a
                  className="success"
                  href="/campaign/delights-coupons-discounts-offers-sale"
                >
                  {" "}
                  Offers
                </a>
              </h4>
              <h4 className="col-sm-12 footCategoryMobile fcWhite">
                <a className="success" href="/sitemap">
                  {" "}
                  Sitemap
                </a>
              </h4>
            </ul>
            <div className="col-md-3 col-sm-6 noPdSm tNC tcnForMobile visible-xs">
              <ul>
                <li>
                  <a href="https://www.bewakoof.com/contact-us/refund-or-return">
                    <i className="icon_return_order" />
                    &nbsp;&nbsp;&nbsp;&nbsp;15 Days return policy*
                  </a>
                </li>
                <li>
                  <a href="https://www.bewakoof.com/contact-us/order-delivery-payment">
                    <i className="icon_cod" />
                    &nbsp;&nbsp;&nbsp;&nbsp;Cash on delivery*
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <FooterAboutUs/>
        </section>
      </div>
    </div>
  </div>
</div>
</>
  )
}
export default Footer