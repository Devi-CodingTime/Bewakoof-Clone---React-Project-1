import React,{useState} from 'react'
import Header from '../header/header';
import SliderShow from './slider';
import Footer from '../footer/footer';
import './main.css'
import NextSliderShow from './nextSlider';
import DoubleImgContainer from './doubleImgContainer';
import CategoryWithSixImage from './categoyWithSixImg';
import BestSellerSlider from './bestSeller/bestSellerSlider';
import { Link ,NavLink} from 'react-router-dom';

const Main=()=> {
const sliderArrayImage1 =
[
  {src:"https://images.bewakoof.com/uploads/grid/app/NEW-1x1-CosySweaters4060off-common-1702097055.jpg"},
  {src:"https://images.bewakoof.com/uploads/grid/app/OOFSale-1X1-RM-Common-1701957479.gif"},
  {src:"https://images.bewakoof.com/uploads/grid/app/NEW-1X1-Nov-SlumberPJ-common-1702023453.jpg"},
  {src:"https://images.bewakoof.com/uploads/grid/app/NEW-1x1-edgyJackets5070OFF-common-1702219707.jpg"},
  {src:"https://images.bewakoof.com/uploads/grid/app/Joggers-buy-2-for-1299-Common-1x1-Banner-1702052630.jpg"},
  {src:"https://images.bewakoof.com/uploads/grid/app/NEW-1x1-BOJ-RMIK-GIF-1701613600.gif"},
  {src:"https://images.bewakoof.com/uploads/grid/app/OOFSale-1X1-IKRM-03-1702542830.gif"},
  {src:"https://images.bewakoof.com/uploads/grid/app/NEW-1x1-HDflat60-common-1702381459.jpg"},
  {src:"https://images.bewakoof.com/uploads/grid/app/Year-end-Sale-Common-1x1--Ends-Tomm-Banner-1703852639.gif"}
];

const sliderArrayImage2 =
[
  {src:"https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop-Winterwear-1698217139.jpg",category:"Winterwaer"},
  {src:"https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif",category:"Comobos"},
  {src:"https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop--1--1697613232.jpg",category:"Official Collaborations"},
  {src:"https://images.bewakoof.com/uploads/grid/app/category-icon-for-msite-Desktop-1697613234.jpg",category:"New Arrival"},
  {src:"https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop---1--1697613231.jpg",category:"Best Sellers"},
  {src:"https://images.bewakoof.com/uploads/grid/app/Thumbnails-Msite-Plus-size--2--1697714054.jpg",category:"plusSize"},
  {src:"https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg",category:"customization"},
  {src:"https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Vote-1693212866.jpg",category:"vote for design"},
  {src:"https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg",category:"last size"},
  {src:"https://images.bewakoof.com/uploads/grid/app/image-1668598708.png",category:"last offer"}
];

const sliderArrayImage3 = [{src:"https://images.bewakoof.com/uploads/grid/app/Buy3at1199-OOF-Sale-1x1-banner--2--1702538976.jpg"},
  {src:"https://images.bewakoof.com/uploads/grid/app/NEW-1X1-Nov-CasualPants60-1702617653.jpg"},
  {src:"https://images.bewakoof.com/uploads/grid/app/NEW-1x1-BOJ70OFF-common-1702012964.gif"},
  {src:"https://images.bewakoof.com/uploads/grid/app/NEW-1x1-cargo-common--2--1701959177.jpg"}];

const BewakoofOriginals = [{src:"	https://images.bewakoof.com/uploads/grid/app/pima-pc-1701237703.jpg"},
{src:"https://images.bewakoof.com/uploads/grid/app/windcheater-pc-1701237705.jpg"},
{src:"https://images.bewakoof.com/uploads/grid/app/Banner-PC-Size-480x457.jpg"},
{src:"https://images.bewakoof.com/uploads/grid/app/pima-pc-1701237703.jpg"},
{src:"https://images.bewakoof.com/uploads/grid/app/windcheater-pc-1701237705.jpg"},
{src:"https://images.bewakoof.com/uploads/grid/app/Banner-PC-Size-480x457.jpg"}];

const trendingCategoryMen = [{src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-m-1685445850.jpg"},
          {src:"https://images.bewakoof.com/uploads/grid/app/category-box-oversized-tees-m-1685086219.jpg"},
          {src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-shorts-1686063035.jpg"},
          {src:"https://images.bewakoof.com/uploads/grid/app/category-box-joggers-m-1684997505.jpg"},
          {src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-vests-1686063036.jpg"},
          {src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-fullsleeve-1686063034.jpg"}];

const trendingCategoryWomen = [{src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-w-1685445851.jpg"},
{src:"https://images.bewakoof.com/uploads/grid/app/category-box-Oversized-tshirts-Women-1682055634.png"},
{src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-fashion-tops-1686305660.jpg"},
{src:"https://images.bewakoof.com/uploads/grid/app/category-box-Joggers-Women-1682055633.png"},
{src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-Dresses-1681725004.jpg"},
{src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-BoyfriendTeess-1681730084.jpg"}];

const categoriesToBag = [{src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg"},
  {src:"https://images.bewakoof.com/uploads/grid/app/category-box-boxers-1685086219.jpg"},
  {src:"https://images.bewakoof.com/uploads/grid/app/category-box--m-pyjama-1685086220.jpg"},
  {src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-women-cords-1686063032.jpg"},
  {src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-women-pjs-1686063033.jpg"},
  {src:"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-women-shorts-1686063034.jpg"}];

const doubleImgTooHot = [{src:"https://images.bewakoof.com/uploads/grid/app/deskop-mid-size-winter-common-1702097269.jpg"},
{src:"https://images.bewakoof.com/uploads/grid/app/B1G1-OOF-Sale-Midsize-desktop-banner-1702109804.jpg"}]

const ImgDesignOfWeek = [{src:"https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Slice-1--1--1702362885.jpg"},
{src:"https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Slice-2--1--1702362886.jpg"}]

const offSale = [{src:"https://images.bewakoof.com/uploads/grid/app/style-twice-buy-2-for-1299-midsize-Desktop-Banner--1--1702634720.jpg"},
{src:"https://images.bewakoof.com/uploads/grid/app/midsize-desktop-banner-Sweaters-Common--3--1702617616.jpg"}]

const bestPics = [{src:"https://images.bewakoof.com/uploads/grid/app/720x420-Midsize-bannner-Combos-1699277122.jpg"},
{src:"https://images.bewakoof.com/uploads/grid/app/Official-Merch-store-Desktop-banner-1700470826-1701771559.webp"}];

const customizedTShirt = [{src:"https://images.bewakoof.com/uploads/grid/app/Customise-Desktop-midsize-Banner-1699360277.jpg"},
{src:"https://images.bewakoof.com/uploads/grid/app/Plus-Size-Desktop-midsize-Banner--1--1699360278.jpg"}];

return (
    <div>
      <Header/>
      <div className='slider' >
        <SliderShow arrayImage = {sliderArrayImage1} slidesToShow={3}/>
      </div>
      <div className='nextSlider'>
        <NextSliderShow arrayImage = {sliderArrayImage2}/>
      </div>
      <div className='mb-4'>
        <a title="" style={{display: "block", width: "100%", paddingTop: "10.4167%", position: "relative"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/desktop-strip-rm-1702276007.jpg" alt="" style={{position: "absolute", width: "100%", top: "0px"}}/>
        </a>
      </div>
      <div className='mb-1'>
        <a title=""style={{display: "block",width: "100%",paddingTop: "10.4167%",position: "relative"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/Blockbuster-deal-thin-strip-Desktop-Sweatshirts-under-799-1702562384.jpg"
            alt="" style={{ position: "absolute", width: "100%", top: 0 }}/>
        </a>
      </div>
      <div className='designHeading'>Designs of the Week</div>
      <DoubleImgContainer doubleImg = {ImgDesignOfWeek} margin={0}/>

      <div className='designHeading'>TRENDING CATEGORIES</div>
      <div className="categoryContainer">
        <CategoryWithSixImage categoryImg={trendingCategoryMen}/>
        <CategoryWithSixImage categoryImg={trendingCategoryWomen}/>
      </div>
      <div className='designHeading'>Bewakoof Originals</div>
      <div className='bewakoofOriginalSlider'>
        <SliderShow arrayImage={BewakoofOriginals} slidesToShow={4}/>
      </div>
      <div className='designHeading mt-4'>TOO HOT TO BE MISSED</div>
      
      <DoubleImgContainer doubleImg={doubleImgTooHot} margin={5}/>
      <DoubleImgContainer doubleImg={offSale} margin={0}/>

      <div className='designHeading pt-1'>CATEGORIES TO BAG</div>
      <CategoryWithSixImage categoryImg={categoriesToBag}/>
      <div className='thirdSlider'>
        <SliderShow arrayImage = {sliderArrayImage3} slidesToShow ={3}/>
      </div>

      <div className='sellerHeadeing pt-8' style={{marginBottom:"40px",color: "rgb(0, 0, 0)"}} >BESTSELLERS</div>
      <div className='bestSlider'>
        <BestSellerSlider/>
      </div>
      
      {/* <Link to={"/allCategory"} className='explore'>Explore All</Link> */}
      {/* <NavLink to = {(`/allCategory?search=${JSON.stringify(i.search)}&filter=${JSON.stringify(i.filter)}`)}> */}
      <Link to={`/allCategory?data=sellerTag&filterdata=best seller`} >
        Explore All
      </Link>
      {/* </NavLink> */}
      <div className='designHeading pt-1'>OUR BEST PICKS</div>
      <DoubleImgContainer doubleImg={bestPics} margin={5}/>
      <DoubleImgContainer doubleImg={customizedTShirt} margin={0}/>
      
      <div className='mt-56'>
        <a title="" style={{display: "block", width: "100%", paddingTop: "10.4167%", position: "relative"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg" alt="" style={{position: "absolute", width: "100%", top: "0px"}}/>
        </a>
      </div>
      <div className='mt-4'>
        <a title=""style={{display: "block",width: "100%",paddingTop: "10.4167%",position: "relative"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"
            alt="" style={{ position: "absolute", width: "100%", top: 0 }}/>
        </a>
      </div>
      <Footer/>
    </div>
  )
}
export default Main;


// 
// 