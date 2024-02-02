import "./slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useRef, useCallback,useEffect} from "react";
import { Link } from "react-router-dom";

const NextSliderShow = (props) => {
    const path = ["/allCategory?data=subCategory&filterdata=sweater",
    "/allCategory?data=sellerTag&filterdata=top rated",
    "/allCategory?data=brand&filterdata=Bewakoof®",
    "/allCategory?data=sellerTag&filterdata=new arrival",
    "/allCategory?data=sellerTag&filterdata=best seller",
    "/allCategory?data=subCategory&filterdata=shirt",
    "/allCategory?data=sellerTag&filterdata=trending",
    "/allCategory?data=brand&filterdata=Old Grey"];

    const sliderRef = useRef();

    const { arrayImage } = props;
    const settings = {
        dots: true,
        slidesToShow: 8,
        slidesToScroll: 4,
        swipeToSlide: true,
        cssEase: "linear"
    };

    return (<>
        <Slider {...settings} className="slider" ref={sliderRef}>
            {arrayImage.map((i,index) => {
                return (<Link to={`${path[index]}`}><div className="card">
                    <img src={i.src} />
                    <span>{i.category}</span>
                </div>
                </Link>)
            })}

        </Slider>
    </>
    );
};

export default NextSliderShow;