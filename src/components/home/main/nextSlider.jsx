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
    "/allCategory?data=color&filterdata=BLACK"];
    const sliderRef = useRef();
    // const scroll = useCallback(
    //     y => {
    //         if (y > 0) {
    //             return sliderRef?.current?.slickNext(); 
    //         } else {
    //             return sliderRef?.current?.slickPrev();
    //         }
    //     },
    //     [sliderRef]
    // );
    // useEffect(() => {
    //     window.addEventListener("scroll", e => {
    //         scroll(e.deltaY);
    //     });
    // }, [scroll]);

    // useEffect(() => {

    //     window.addEventListener("scroll", scroll,true);
        
    //     return () => {
        
    //     window.removeEventListener("scroll", scroll, true);
        
    //     };
        
    //     }, []);

    const { arrayImage } = props;
    const settings = {
        dots: true,
        // infinite: true,
        // speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        swipeToSlide: true,
        // swipe: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        cssEase: "linear",
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