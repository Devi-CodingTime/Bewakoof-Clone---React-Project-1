import "./slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderClasses } from "@mui/material";

const SliderShow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (<>
      <Slider {...settings} className="slider">
        
        <div className="card">
          <img src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-CosySweaters4060off-common-1702097055.jpg" alt="1" />
        </div>
        <div className="card">
          <img src="https://images.bewakoof.com/uploads/grid/app/OOFSale-1X1-RM-Common-1701957479.gif" alt="2" />
        </div>
        <div className="card">
          <img src="https://images.bewakoof.com/uploads/grid/app/NEW-1X1-Nov-SlumberPJ-common-1702023453.jpg" alt="3" />
        </div>
        <div className="card">
          <img src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-edgyJackets5070OFF-common-1702219707.jpg" alt="4" />
        </div>
        <div className="card">
          <img src="https://images.bewakoof.com/uploads/grid/app/Joggers-buy-2-for-1299-Common-1x1-Banner-1702052630.jpg" alt="5" />
        </div>
        <div className="card">
            <img src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-BOJ-RMIK-GIF-1701613600.gif" alt="6"/>
        </div> 
        
      </Slider>
        {/* <div> */}
          <div className="iconContainer">
            <i className="fa-solid fa-chevron-left prevIcon" onClick={()=>{slickPrev()}}></i>
          </div>
          <div className="iconContainerNext">
            <i class="fa-solid fa-chevron-right nextIcon" onClick={()=>{slickNext()}}></i>
          </div>
        {/* </div> */}
    </>
  );
};

export default SliderShow;