import react, { useRef,useEffect,useState } from "react";
import "../slider.css";
import '../bestSeller/bestSeller.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const BestSellerSlider = () => {
  const sliderRef = useRef();
  const navigate = useNavigate();
  const [bestSeller,setBestSeller] = useState();

  async function getbestSellerProduct()
  {
    let res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"sellerTag":"best seller"}`,{
      method: "GET", // *GET, POST, PUT, DELETE, etc.                        
      headers: {
        "Content-Type": "application/json",
        'projectId': 'ctxjid7mj6o5',
      }});
      let data = await res.json();
      console.log("getting best seller data ", data);
      setBestSeller(data.data);
  }
  useEffect(()=>{
    getbestSellerProduct();
  },[]);
  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    // autoplaySpeed: 3000,
    cssEase: "linear",
  };
  const goToNext = ()=>{
    sliderRef.current.slickNext();
  }
  const goToPrev = ()=>{
    sliderRef.current.slickPrev();
  }
  const cardClick = (id)=>{
    navigate(`/allCategory/${id}`)
  }
  return (<>
  {console.log(bestSeller)}
      <Slider {...settings} className="slider" ref={sliderRef}>
        {bestSeller?.map((i)=>{
          return(<div className="card" style={{padding:"20px"}} 
          onClick={()=>{cardClick(i._id)}}>
            <div className="border-solid border-2 border-gray-200 w-56 rounded-md">
            <img src={i.displayImage} height={250} className="Imagetag"/>
            <h3 className="brand-name rvCardDetails undefined">{i.brand}</h3>
            
            <section>
                <h2 style={{fontSize:"10px"}}>{i.name}</h2>
                <img  src="https://images.bewakoof.com/web/Wishlist.svg"  alt="wishlist"  className="wishlist-icon"/>
                <div className="PriceText">
                  <span>₹</span>{i.price}
                </div>
            </section>
            </div>
        </div>)
        })}
        
      </Slider>
      <div className="iconContainer">
        {/* <h1>heloo i ma seller ah</h1> */}
            <i className="fa-solid fa-chevron-left prevIcon" onClick={goToPrev} style={{left:"-8px"}}></i>
          </div>
          <div className="iconContainerNext">
            <i class="fa-solid fa-chevron-right nextIcon" onClick={goToNext} style={{left:"20px"}}></i>
      </div>
    </>
  );
};

export default BestSellerSlider;
