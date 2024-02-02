import React,{useEffect, useContext} from 'react'
import Header from '../header/header';
import SliderShow from './slider';
import Footer from '../footer/footer';
import './main.css';
import NextSliderShow from './nextSlider';
import DoubleImgContainer from './doubleImgContainer';
import CategoryWithSixImage from './categoyWithSixImg';
import BestSellerSlider from './bestSeller/bestSellerSlider';
import { Link } from 'react-router-dom';
import { categoryContext } from '../../Context/provider';
import { sliderArrayImage1, sliderArrayImage2, sliderArrayImage3, BewakoofOriginals, trendingCategoryMen, 
  trendingCategoryWomen, categoriesToBag, doubleImgTooHot, ImgDesignOfWeek, offSale, bestPics, customizedTShirt } from '../../Context/data';


const Main=()=> {
  const {getCartItems,getWishListData} = useContext(categoryContext);

useEffect(()=>{
  getCartItems();
  getWishListData();
},[]);
return (
    <div>
      <Header/>
      <div className='slider' >
        <SliderShow arrayImage = {sliderArrayImage1} slidesToShow={3} slide="1"/>
      </div>
      <div className='nextSlider'>
        <NextSliderShow arrayImage = {sliderArrayImage2}/>
      </div>
      <div className='mb-4'>
        <a title="" className='All-Eyes'>
          <img src="https://images.bewakoof.com/uploads/grid/app/desktop-strip-rm-1702276007.jpg" alt="" style={{position: "absolute", width: "100%", top: "0px"}}/>
        </a>
      </div>
      <div className='mb-0'>
        <a title=""  className='All-Eyes'>
          <img src="https://images.bewakoof.com/uploads/grid/app/Blockbuster-deal-thin-strip-Desktop-Sweatshirts-under-799-1702562384.jpg"
            alt="" style={{ position: "absolute", width: "100%", top: 0 }}/>
        </a>
      </div>
      <div className='designHeading'>Designs of the Week</div>
      <DoubleImgContainer doubleImg = {ImgDesignOfWeek} margin={0}/>

      <div className='designHeading'>TRENDING CATEGORIES</div>
      <div className="categoryContainer">
        <CategoryWithSixImage categoryImg={trendingCategoryMen} gender="Men" count="1"/>
        <CategoryWithSixImage categoryImg={trendingCategoryWomen} gender="Women" count="2"/>
      </div>
      <div className='designHeading md:mt-[-6px]'>Bewakoof Originals</div>
      <div className='bewakoofOriginalSlider md:mt-[-53px] h-[223px]'>
        <SliderShow arrayImage={BewakoofOriginals} slidesToShow={4} slide="2"/>
      </div>
      <div className='designHeading mt-4 md:mt-3'>TOO HOT TO BE MISSED</div>
      
      <DoubleImgContainer doubleImg={doubleImgTooHot} margin={5}/>
      <DoubleImgContainer doubleImg={offSale} margin={0} className='md:mt-[-44px]'/>

      <div className='designHeading pt-1'>CATEGORIES TO BAG</div>
      <CategoryWithSixImage categoryImg={categoriesToBag} gender="Men" count="3"/>
      <div className='thirdSlider'>
        <SliderShow arrayImage = {sliderArrayImage3} slidesToShow ={3} slide="3"/>
      </div>

      <div className='sellerHeadeing pt-8 md:pt-0' style={{marginBottom:"40px",color: "rgb(0, 0, 0)"}} >BESTSELLERS</div>
      <div className='bestSlider'>
        <BestSellerSlider/>
      </div>
      
      {/* <Link to={"/allCategory"} className='explore'>Explore All</Link> */}
      {/* <NavLink to = {(`/allCategory?search=${JSON.stringify(i.search)}&filter=${JSON.stringify(i.filter)}`)}> */}
      <Link to={`/allCategory?data=sellerTag&filterdata=best seller`} className='explore'>
        Explore All
      </Link>
      {/* </NavLink> */}
      <div className='designHeading pt-1'>OUR BEST PICKS</div>
      <DoubleImgContainer doubleImg={bestPics} margin={5}/>
      <DoubleImgContainer doubleImg={customizedTShirt} margin={0}/>
      
      <div className='mt-3'>
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
