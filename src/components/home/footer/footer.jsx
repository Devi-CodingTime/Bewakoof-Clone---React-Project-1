import React from 'react'
import "./footer.css";
 const Footer=()=> {
  return (<>
   <div style={{ marginBottom: 0 }}>
    <div className="footerToBottom footerForMobile">
    <div className="footerDiv">
      <div className="container">
        <div className="row noMg footerLogo">
        {/* <img src='../../../../images/footerLogo.jpg' width={"80px"} height={"60px"}/> */}
        
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
              }}
            >
                {/*  styled my image */}
                <img style={{display: "block",margin: "auto",cursor:"zoom-in",backgroundColor: "hsl(0, 0%, 90%)",transition: "background-color 300ms",width: "120px",height: "160px"}} 
                // src="https://qph.cf2.quoracdn.net/main-qimg-c2fe84cfeacdda666364f768cd3a6dc9-lq"
                src='../../../../images/footer2.jpg' 
                width="132px" height="70px"/>
                
                {/* <img src='../../../../images/footerLogo.jpg' width={"80px"} height={"60px"}
                className="icon_bewakoof_logo bewakoofLogo"
                style={{ maxHeight: 52, lineHeight: 52, overflowY: "hidden"}}
              /> */}
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
                    <span className="hidden-xs">4.7M People Like this</span>
                  </a>
                </div>
                <div className="fbInsta">
                  <a
                    className="whiteText"
                    href="https://www.instagram.com/bewakoofofficial/"
                    target="_blank"
                  >
                    <i className="icon_instagram_new" />
                    <span className="hidden-xs">1M Followers</span>
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
            <form name="subscriptionForm" role="form">
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
          <div className="col-md-3 col-sm-6 noPdSm noPdXs">
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
            <div className="footerAboutUs">
              <div>
                {" "}
                <br /> <br />{" "}
                <h1 style={{ fontSize: 17 }}>
                  BEWAKOOF
                  <span
                    style={{
                      position: "relative",
                      verticalAlign: "baseline",
                      fontSize: "40%",
                      top: "-1.2em",
                      margin: 2
                    }}
                  >
                    ®
                  </span>{" "}
                  THE NEW AGE ONLINE SHOPPING EXPERIENCE.
                </h1>{" "}
                <p>
                  Founded in 2012, Bewakoof
                  <span
                    style={{
                      position: "relative",
                      verticalAlign: "baseline",
                      fontSize: "40%",
                      top: "-1.2em",
                      margin: 2
                    }}
                  >
                    ®
                  </span>{" "}
                  is a lifestyle fashion brand that makes creative, distinctive
                  fashion for the trendy, contemporary Indian. Bewakoof
                  <span
                    style={{
                      position: "relative",
                      verticalAlign: "baseline",
                      fontSize: "40%",
                      top: "-1.2em",
                      margin: 2
                    }}
                  >
                    ®
                  </span>{" "}
                  was created on the principle of creating impact through
                  innovation, honesty and thoughtfulness.
                </p>
                <br />{" "}
                <p>
                  With a team of 400 members, and 2mn products sold till date.
                  We like to experiment freely, which allows us to balance
                  creativity and relatability, and our innovative designs. Our
                  range of products is always fresh and up-to-date, and we clock
                  sales of over 1 lakh products a month. Our innovation focus
                  extends to our operations as well. We are vertically
                  integrated, manufacture our own products, and cut out the
                  middleman wherever possible. This direct-to-consumer model
                  allows us to create high-quality fashion at affordable prices.
                  A thoughtful brand, we actively attempt to minimize our
                  environmental footprint and maximize our social impact. These
                  efforts are integrated right into our day-to-day operations,
                  from rainwater harvesting to paper packaging to employee
                  benefits. To create an accessible, affordable and thoughtful
                  experience of online shopping in India.
                </p>
                <br />{" "}
                <h2 style={{ fontSize: 17 }}>
                  Online Shopping at Bewakoof
                  <span
                    style={{
                      position: "relative",
                      verticalAlign: "baseline",
                      fontSize: "40%",
                      top: "-1.2em",
                      margin: 2
                    }}
                  >
                    ®
                  </span>{" "}
                  is hassle-free, convenient and super-exciting!{" "}
                </h2>{" "}
                <p>
                  Online Shopping has always been a fun and exciting task for
                  most and more so when the shopping mall is none other than
                  your own house. We have all had days when we have planned
                  trips to the clothing store in advance, dreaming about what we
                  would buy once we get there. Now we wouldnt think twice before
                  indulging in some online shopping. Well, cut to todays time
                  and age, you can do all this from the comfort of your home
                  while enjoying many online shopping offers, right from amazing
                  deals and discounts to one of the most robust user interface
                  amongst most online shopping sites in India, with many
                  shopping filters to make your shopping experience truly hassle
                  free. This in our own words is what we call Bewakoof.com.{" "}
                </p>
                <br />{" "}
                <p>
                  Bewakoof
                  <span
                    style={{
                      position: "relative",
                      verticalAlign: "baseline",
                      fontSize: "40%",
                      top: "-1.2em",
                      margin: 2
                    }}
                  >
                    ®
                  </span>
                  , THE place to be when it comes to the coolest in online
                  fashion, offers you fine, high-quality merchandise go ahead
                  and indulge in a bit of online shopping for men and womens
                  fashion. So browse through the exciting categories we have on
                  offer from mens fashion to basic mens clothing as well as wide
                  variety in womenswear and womens clothes to the amazing range
                  of accessories, fill up your carts and get fast home delivery
                  for all orders. All of this topped with our exclusive online
                  shopping offers makes for an exciting, irresistible and uber
                  cool combo! You can even gift some to your near and dear ones
                  while being absolutely certain that it will put a smile on
                  their faces.
                </p>
                <br />{" "}
                <h2 style={{ fontSize: 17 }}>
                  Bewakoof.com: the quirkiest online shopping sites of all!
                </h2>{" "}
                <p>
                  Online fashion is definitely more accessible with
                  Bewakoof.com. Explore the latest collections in Marvel
                  t-shirts including avengers t-shirts and captain America
                  t-shirts in{" "}
                  <a
                    title="Official Merchandise Store Online India at Bewakoof.com"
                    href="https://www.bewakoof.com/official-collaborations-collection"
                  >
                    {" "}
                    official merchandise.
                  </a>{" "}
                  Apart from these, quirkiest of T-shirts that you wont find on
                  any online shopping sites in India are showcased at
                  Bewakoof.com. If your wardrobe has been longing for a cool
                  overhaul then bewakoof.com will certainly be your best bet
                  amongst all online shopping sites. Also, take a tour of our
                  bewakoof
                  <span
                    style={{
                      position: "relative",
                      verticalAlign: "baseline",
                      fontSize: "40%",
                      top: "-1.2em",
                      margin: 2
                    }}
                  >
                    ®
                  </span>{" "}
                  blog to stay abreast with the latest runway trends and be a
                  trendsetter among your immediate circles. What we wear speaks
                  volumes of us they say. But what if what you wore actually
                  spoke what your mood was! Havent we all wondered where we
                  could get those quirky t-shirts and sport them with
                  confidence? Sure otherwise getting them made or even buying
                  them from otherwise expensive online shopping sites for
                  clothes may cost you substantially but with Bewakoof.com, you
                  will understand that you do not have to spend a fortune on
                  online fashion to look great. Sliders, joggers, sweatshirts,
                  bag and bag packs and so much more are just some of the other
                  items you can grab hold of here.
                </p>
                <br />{" "}
                <h2 style={{ fontSize: 17 }}>
                  Avail of Online shopping benefits at Bewakoof.com and youll
                  shop nowhere else!
                </h2>{" "}
                <p>
                  Choose your product, get it ordered online, and we ensure that
                  its delivery happens right at your doorstep anywhere in India.
                  You just need to take care of the payment for the product from
                  the comfort of your home, while we ensure free shipping all
                  the time on almost everything with no strings attached. For
                  any second thoughts after purchase, we have in place a return
                  policy as well. One of the best you will find on any online
                  shopping sites in India. For your online shopping experience
                  to be safe and risk-free, we offer Cash On Delivery (COD)
                  facility too. So you dont have to worry anymore about your
                  hard earned money being stuck when you buy clothes online at
                  bewakoof.com. Avail exciting online shopping offers like{" "}
                  <a
                    title="Buy Latest T Shirt Designs at Lowest Price at Bewakoof.com"
                    href="https://www.bewakoof.com/design-of-the-day"
                  >
                    {" "}
                    designs of the day{" "}
                  </a>{" "}
                  and colour of the month when you shop with us. Make sure to
                  use our easy 15-day returns policy, card or cash on delivery
                  option and other customer-friendly features. A comprehensive
                  sizing guide and detailed product descriptions coupled with
                  high-resolution product shots will give you all the
                  information to make the right buying decision. Give your
                  wardrobe the much-needed upgrade with uber cool clothing head
                  to Bewakoof.com for a great online shopping india experience
                  now! Could you have asked for more?
                </p>
                <br />{" "}
                <h2 style={{ fontSize: 17 }}>
                  Dont miss out on accessories available on our multi-faceted
                  online store!{" "}
                </h2>{" "}
                <p>
                  We dont just offer you exciting options in online fashion but
                  also give you amazing accessories with really cool bags and
                  bag packs to choose from. Our bags and backpacks are compact,
                  hassle-free and easy to stuff things in. And all of this with
                  the swag that you get to carry along with it. Cool designs are
                  what form a major part of our online fashion and we also
                  ensure our accessories section doesnt feel left out!
                </p>
                <br />{" "}
                <p>
                  As for our accessories collection, they are also manufactured
                  with impeccable quality materials. Our{" "}
                  <a
                    title="Buy Mobile Back Covers & Cases Online India - Bewakoof.com"
                    href="https://www.bewakoof.com/mobile-covers-india"
                  >
                    mobile covers
                  </a>{" "}
                  are made from hard and durable polycarbonate, with a matte
                  finish that will make for a great protection for your phone
                  with the rough use that we put them through nowadays.{" "}
                </p>
                <br />{" "}
                <h2 style={{ fontSize: 17 }}>
                  Design of The Day- the coolest feature ever!
                </h2>{" "}
                <p>
                  Who said good and cool t-shirts have to expensive? We bring
                  newer, cooler and more youth oriented designs everyday. Yes!
                  Everyday you get a new design to explore and buy. Although all
                  our t-shirts are at an extremely affordable price, we decided
                  to slash them down even further. But there is a catch. It is
                  only for those designs and these exclusive prices are only
                  valid for for a duration of 24 hours! Designs refresh every
                  day at 3pm and are valid only for 24 hours. So you need to
                  hurry and grab one fast before it ends. Because we believe
                  everyone needs to have a fair chance at all of our fresh
                  designs of the day.
                </p>
                <br />
                <h2 style={{ fontSize: 17 }}>
                  Bewakoof.com: the Uber Cool Online Fashion Store for the Youth
                </h2>{" "}
                <p>
                  We, at Bewakoof.com, have all that you need to glam up your
                  cool quotient. From an extensive range of plus size clothing,{" "}
                  <a
                    title="Buy Mens Shirts Online at Bewakoof.com"
                    href="https://www.bewakoof.com/men-shirts"
                  >
                    casual shirts for men
                  </a>{" "}
                  and accessories for everyone, we purvey diversity of choices
                  in online shopping india platform has to offer under one
                  umbrella. The range of apparels like{" "}
                  <a
                    title="Buy T Shirt for Men Online at Bewakoof.com"
                    href="https://www.bewakoof.com/men-t-shirts"
                  >
                    men t-shirts
                  </a>
                  , joggers, sliders, Henley shirts, Polo t-shirts, Oxford pants
                  and more provide an array of options for the online customer
                  to create a ravishing ensemble from. We try to target all
                  kinds of customers and cater to their needs and preferences.
                  Communication is the key to our functioning. Your Bewakoof
                  <span
                    style={{
                      position: "relative",
                      verticalAlign: "baseline",
                      fontSize: "40%",
                      top: "-1.2em",
                      margin: 2
                    }}
                  >
                    ®
                  </span>{" "}
                  Online fashion Shop has arrived! Do not miss the attractive
                  online shopping offers everyday. Work your fashion with the
                  wide range of apparels available only one click away! Make a
                  statement with our best t-shirts online! Get more, pay less!
                </p>
                <br /> <h2 style={{ fontSize: 17 }}>OUR PHILOSOPHY</h2>{" "}
                <p>
                  We believe in creating the kind of fashion, that makes you
                  stand out as they are in line with the latest local and global
                  trends of the industry, but also at the same time offer value
                  for money functionality, with quality materials and
                  comfortable and flattering prints. We try to look into the
                  psyche of our customers, and try to get inspired by the
                  conversations and experiences around us while creating our
                  graphics, to ensure that they are relatable. We believe in
                  constant and consistent innovation to ensure that our fans get
                  nothing short of the bets at affordable rates! While most
                  people do not know, we do not outsource the manufacturing of
                  our products, everything from the conception of the designs to
                  the manufacture and the styling that you see on the
                  photographs of the banners and product pages of our website
                  all happen in house! We go from yarn to product and since we
                  're vertically integrated and bring fashion from us directly
                  to your doorstep without any middlemen that also further
                  ensures reliability because for us it is not just about the
                  money but about building the trust and credibility in our fans
                  about our brand. We also make sure to decrease the impact on
                  environment and are building initiatives that will help us
                  with the same, for now by optimizing our processes to use only
                  as much as we need from nature, rain water harvesting and
                  recycling the water from our RO water facility, because we
                  believe that the spirit of Bewakoof
                  <span
                    style={{
                      position: "relative",
                      verticalAlign: "baseline",
                      fontSize: "40%",
                      top: "-1.2em",
                      margin: 2
                    }}
                  >
                    ®
                  </span>{" "}
                  is about creating an impact by breaking conventions and having
                  a different perspective!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
</>
  )
}
export default Footer