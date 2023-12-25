import "./slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useRef, useCallback,useEffect} from "react";

const NextSliderShow = (props) => {

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

    useEffect(() => {

        window.addEventListener("scroll", scroll,true);
        
        return () => {
        
        window.removeEventListener("scroll", scroll, true);
        
        };
        
        }, []);

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
            {arrayImage.map((i) => {
                return (<div className="card">
                    <img src={i.src} />
                    <span>{i.category}</span>
                </div>)
            })}

        </Slider>
    </>
    );
};

export default NextSliderShow;