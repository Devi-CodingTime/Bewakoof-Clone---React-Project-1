import react, { useRef } from "react";
import "./slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const SliderShow = (props) => {
  const sliderRef = useRef();
  const {arrayImage,slidesToShow,slide} = props;
  let pathcategory=[];
  if(slide==="1")
  {
    pathcategory = [`/allcategory?data=subCategory&filterdata=sweater`,
    `/allcategory?data=subCategory&filterdata=hoodie`,
    `/allcategory?data=subCategory&filterdata=pyjamas`,
    `/allcategory?data=subCategory&filterdata=jogger`,
    `/allcategory?data=subCategory&filterdata=jeans`,
    `/allcategory?data=subCategory&filterdata=tshirt`,
    `/allcategory?data=sellerTag&filterdata=best seller`,
    `/allcategory?data=sellerTag&filterdata=top rated`];
  }
  if(slide==="2")
  {
    pathcategory = [`/allcategory?data=sellerTag&filterdata=best seller`,
      `/allcategory?data=sellerTag&filterdata=top rated`,
      `/allcategory?data=sellerTag&filterdata=new arrival`,
      `/allcategory?data=sellerTag&filterdata=best seller`,
      `/allcategory?data=sellerTag&filterdata=top rated`,
      `/allcategory?data=sellerTag&filterdata=new arrival`];
  }
  if(slide==="3")
  {
    pathcategory = [`/allcategory?data=subCategory&filterdata=tshirt`,
      `/allcategory?data=subCategory&filterdata=pyjamas`,
      `/allcategory?data=subCategory&filterdata=jeans`,
      `/allcategory?data=subCategory&filterdata=jogger`];
  
  }

     
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    // swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  const goToNext = ()=>{
    sliderRef.current.slickNext();
  }
  const goToPrev = ()=>{
    sliderRef.current.slickPrev();
  }
  
  return (<>
      <Slider {...settings} className="slider" ref={sliderRef}>
        {arrayImage.map((i,index)=>{
          return(<div className="card" key={index}>
          <Link to={`${pathcategory[index]}`}><img src={i.src}/></Link>
        </div>)
        })}
        
      </Slider>
      <div className="iconContainer">
        <i className="fa-solid fa-chevron-left prevIcon" onClick={goToPrev}></i>
      </div>
      <div className="iconContainerNext">
        <i className="fa-solid fa-chevron-right nextIcon" onClick={goToNext}></i>
      </div>
    </>
  );
};

export default SliderShow;