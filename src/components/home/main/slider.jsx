import react, { useRef } from "react";
import "./slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderShow = (props) => {
  const sliderRef = useRef();
  const {arrayImage,slidesToShow} = props;
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
        {arrayImage.map((i)=>{
          return(<div className="card">
          <img src={i.src}/>
        </div>)
        })}
        
      </Slider>
      <div className="iconContainer">
        <i className="fa-solid fa-chevron-left prevIcon" onClick={goToPrev}></i>
      </div>
      <div className="iconContainerNext">
        <i class="fa-solid fa-chevron-right nextIcon" onClick={goToNext}></i>
      </div>
    </>
  );
};

export default SliderShow;