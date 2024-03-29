import React, { useState, useEffect, useContext } from 'react'
import '../singleCategory/showSingleCat.css';
import TopHeader from '../home/header/topHeader';
import SideNavbar from '../home/header/sideNavbar';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { categoryContext } from '../Context/provider';

import { Modal } from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import FooterWithoutAbout from '../home/footer/footerWithoutAbout';
import { wishlisted } from '../utility/storagewishlist';
import Loader from '../loader/loader';

const ShowSingleCategory = () => {
    const { id } = useParams();
    const { loggedIn, token,cartItem,wishlist, getCartItems,getWishListData, addToWishList} = useContext(categoryContext);

    const navigate = useNavigate();

    const [singleProduct, setSingleProduct] = useState({});
    const [review, setReview] = useState([]);
    const [bagItem, setBagItem] = useState([]);
    const [src, setSrc] = useState("");
    const [selected, setSelected] = useState(false);
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState("");
    const [Modalopen, setModalopen] = useState(false);
    const [loader, setLoader] = useState(true);
    const [clickedButtons, setClickedButtons] = useState("");
    const [clickedButtonsModal, setClickedButtonsModal] = useState("");

    const api = `https://academics.newtonschool.co/api/v1/ecommerce/product/${id}`;
    const reviewApi = `https://academics.newtonschool.co/api/v1/ecommerce/review/${id}`;

    async function getSingleProduct() {
        setLoader(true);
        try {
            const res = await fetch(api, {
                method: "GET", // *GET, POST, PUT, DELETE, etc.                        
                headers: {
                    "Content-Type": "application/json",
                    'projectId': 'ctxjid7mj6o5',
                }
            });
            const result = await res.json();
            // console.log("single.data : ",result.data);  https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=1597"
            setSingleProduct(result.data);

            setLoader(false);
        } catch (error) {
            console.log(error);
        }
    }

    async function getSingleProductReview() {
        try {
            const res = await fetch(reviewApi, {
                method: "GET", // *GET, POST, PUT, DELETE, etc.                        
                headers: {
                    "Content-Type": "application/json",
                    'projectId': 'ctxjid7mj6o5',
                }
            });
            const result = await res.json();
            // console.log("review.data : ",result.data);  
            setReview(result.data);

        } catch (error) {
            console.log(error);
        }
    }

    const addToBag = async (bagData, id) => {
        try {
            let res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`, {
                method: "PATCH",
                headers: { projectId: 'ctxjid7mj6o5', 
                'Content-Type': 'application/json', 
                Authorization: `Bearer ${token}` 
            },
                body: JSON.stringify(bagData)
            });
            let data = await res.json();
            setBagItem(data.data.items);
            getCartItems();
        }
        catch (error) {
            console.log(error);
        }
    }

    const openModal = () => {
        setModalopen(true);
    };

    const handlePopUp = () => {
        alert("Product already exists in the wishlist.");
    }
    const closeModal = () => {
        setModalopen(false);
    };
    const openDesc = () => {
        setOpen(!open);
    }
    const getSize = (sizevalue, index) => {
        setClickedButtons(index);
        setSize(sizevalue);
        //    console.log(sizevalue);
    }
    const getSizeinsidemodal = (sizevalue, index) => {
        setClickedButtonsModal(index);
        setSize(sizevalue);
        //    console.log(sizevalue);
    }
    const selectImg = (src) => {
        setSrc(src);
        setSelected(true);
    }
    useEffect(() => {
        getSingleProduct();
        getSingleProductReview();
        getCartItems();
        getWishListData();
        window.scrollTo(0, 0);
    }, []);



    return (<>
        <div className='MainWrpr'>
            <TopHeader />
            <SideNavbar />
            {loader ? <Loader /> : (<>
                <div className="topheadContainer px-20">
                    <span className="tophead">Home </span>
                    <span className="tophead">{singleProduct?.name.split(" ")[0]} Clothing </span>
                    <span className="tophead">{singleProduct?.name.split(" ")[singleProduct?.name.split(" ").length-1]}</span>
                    {/* <span className="tophead"> / {singleProduct.name}</span>
            {console.log("------------",singleProduct.name)} */}
                </div>
                <div className='pageView flex gap-4 mx-auto my-0 px-40 py-4'>
                    <div className='imgSlider my-4'>
                        {singleProduct?.images?.map((i) => {
                            return (<>
                                <div className='slideimages w-16 h-12' onClick={() => { selectImg(i) }}><img src={i} /></div>
                            </>
                            )
                        })}
                    </div>
                    <div className='imageView'>
                         <img src={selected ?src:singleProduct?.displayImage} className='imageViewimg'/>

                    </div>
                    <div className='aboutProduct'>
                        <div className='brandName'>{singleProduct?.brand}</div>
                        <div className='prodName'>{singleProduct?.name}</div>
                        <div className='flex gap-1 rating'>
                            <i className="fa-solid fa-star py-1" style={{ color: "#eee044", fontSize: "10px" }}></i>
                            <span style={{ fontSize: "13px", fontFamily: "montserrat-semibold,sans-serif" }}>{parseFloat(singleProduct?.ratings).toFixed(1)}</span></div>
                        <div style={{ textAlign: "left" }}>
                            <span style={{ fontSize: "20px" }}>₹</span>
                            <span style={{ fontSize: "20px", color: "#0f0f0f" }}>{singleProduct?.price}</span></div>
                        <div style={{ fontSize: "12px", color: "#949494", textAlign: "left" }}>inclusive of all taxes</div>

                        <div className='tribeContainer'>TriBe members get an extra discount of ₹50 and FREE shipping.<span style={{ marginLeft: "3px", color: "#42a2a2" }}>Learn more</span></div>

                        <div className="colorName">
                            <label className='colorLabel'> COLOUR OPTIONS:</label>&nbsp;&nbsp; {singleProduct?.color}
                        </div>
                        <div id="testColorBlock-0" className="colorbttn multiColorBlockV3 active">
                            <span>
                                <div style={{ height: "calc(100%)", backgroundColor: `${singleProduct?.color?.toLowerCase()}`, borderRadius: "8px" }} />
                            </span>
                        </div>

                        <div className='flex gap-6 py-4 sizeguide'>
                            <h4 className='selectSize'>SELECT SIZE</h4><span style={{ color: "#42a2a2", marginLeft: "50%" }}>Size guide</span>
                        </div>
                        <div className='flex gap-2'>

                            {singleProduct?.size?.map((i, index) => {
                                return (
                                    <button className={index === clickedButtons ? "change_background" : "change_backgroundPrev"} onClick={() => { getSize(i, index) }}>{i}</button>
                                )
                            })}

                        </div>

                        <div className='flex gap-4 wishlistContainer'>
                            <div className="p-add-bag flex">
                                <img src="https://images.bewakoof.com/web/ic-web-head-cart.svg" alt="bag"
                                    className="bag-icon" />

                                {/* <Link to={`/addtocart`}> ()=>addToBag({size:size,quantity:'1'},id) */}
                                {cartItem.some((item)=>{return item.product._id===id}) ? (<Link to={`/addtocart`}><span>GO TO BAG</span></Link>)
                                    :
                                    <span onClick={size ? (() => addToBag({ size: size, quantity: '1' }, id)) : openModal}>ADD TO BAG</span>
                                }
                                {/* </Link> */}
                            </div>

                            <Modal open={Modalopen} onClose={closeModal} center styles={{ modal: { borderRadius: '10px', width: '500px', /* other custom styles */ } }}>
                                <div className="popupBody" style={{ width: "100%" }}>
                                    <div className='seperatefirst'></div>
                                    <div className="selectSizePopupContainer">
                                        <div className="header d-flex flex-column align-items-center">
                                            <div className="bar" />
                                            <div className="titleIconContainer d-flex justify-content-between align-items-center">
                                                <h1 className="title undefined">Choose your perfect fit!</h1>

                                            </div>

                                        </div><div className='seperate'></div>
                                        <div className="sizeWrprContainer">
                                            <div className="sizeBtnContainer">
                                                <div className='flex gap-2'>

                                                    {singleProduct.size?.map((i, index) => {
                                                        return (
                                                            <button className={index === clickedButtonsModal ? "change_background" : "change_backgroundPrev"} onClick={() => { getSizeinsidemodal(i, index) }}>{i}</button>
                                                        )
                                                    })}

                                                </div>
                                                <div className="sizebutton" onClick={closeModal}>DONE</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal>

                            <div className="p-add-bag flex" style={{ backgroundColor: "white", border: "1px solid grey" }}
                                onClick={wishlisted.has(id) ? handlePopUp : (() => { addToWishList(id) })}>
                                {/* <i className="fa-regular fa-heart" style={{color: "grey"}}></i> */}
                                {console.log("wishet set ", wishlisted)}
                                {wishlisted.has(id) ? <img src="https://images.bewakoof.com/web/Wishlist-selected.svg" /> :
                                    <img src="https://images.bewakoof.com/web/Wishlist.svg" />}
                                <span>WISHLIST</span>
                                
                            </div>

                        </div>
                        <div className="usp-wrapper">
                            <div className="usp-box">
                                <div className="usp-im-cont d-flex align-items-center justify-content-center">
                                    <img className='usp_img'
                                    title="supreme softness"
                                    alt="supreme softness"
                                    src="https://images.bewakoof.com/web/supreme-softness-1-1695635691.png"
                                    />
                                </div>
                                <p>supreme softness</p>
                            </div>
                            <div className="usp-box">
                                <div className="usp-im-cont d-flex align-items-center justify-content-center">
                                    <img className='usp_img'
                                    title="extremely durable"
                                    alt="extremely durable"
                                    src="https://images.bewakoof.com/web/extremely-durable-1-1695635691.png"
                                    />
                                </div>
                                <p>extremely durable</p>
                            </div>
                            <div className="usp-box">
                                <div className="usp-im-cont d-flex align-items-center justify-content-center">
                                    <img className='usp_img'
                                    title="enhanced colour retention"
                                    alt="enhanced colour retention"
                                    src="https://images.bewakoof.com/web/enhanced-colour-retension-1-1695635690.png"
                                    />
                                </div>
                                <p>enhanced colour retention</p>
                            </div>
                        </div>
                        <div className='desc'>
                            <div className='descChild' >
                                <section className='flex'>
                                    <img src="https://images.bewakoof.com/web/ic-prod-desc.svg" />
                                    <span>Product Description</span>
                                </section>
                                <span style={{ cursor: "pointer" }} onClick={openDesc}>+</span>
                            </div>
                            {/* <div dangerouslySetInnerHTML={createMarkup()} */}
                            {open ? (<div className='py-1 descpara' dangerouslySetInnerHTML={{ __html: singleProduct.description }}></div>) : ""}
                        </div>
                        {/* previous card code */}
                        <div className="flex justify-center items-center gap-3 pb-4 cardCode">
                            <div className="flex flex-row containerInner">
                                <div className="flex flex-col items-center">
                                    <img loading="lazy" alt="offer" width={"33px"} height={"33px"} src="https://images.bewakoof.com/web/trust-cart.svg" />
                                    <span className="trustBadgeTitle">100% SECURE PAYMENTS</span>
                                </div>
                            </div>
                            <div className="flex flex-row  containerInner">
                                <div className="flex flex-col items-center">
                                    <img loading="lazy" alt="offer" src="https://images.bewakoof.com/web/Easy-Returns.svg" />
                                    <span className="trustBadgeTitle"> EASY RETURNS &amp; INSTANT REFUNDS
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex flex-row  containerInner">
                                <div className="d-flex flex-col align-items-center">
                                    <img loading="lazy" alt="offer" src="https://images.bewakoof.com/web/Globe.svg" />
                                    <span className="trustBadgeTitle font-light">SHIPPING GLOBALLY</span>
                                </div>
                            </div>
                        </div>
                        {/* after code */}
                        {/* <div className="usp2-wrapper">
                            <div className="usp-box">
                                <div className="usp-im-cont d-flex align-items-center justify-content-center">
                                    <img className='usp_img'
                                    title="supreme softness"
                                    alt="supreme softness"
                                    src="https://images.bewakoof.com/web/trust-cart.svg"
                                    />
                                </div>
                                <p>supreme softness</p>
                            </div>
                            <div className="usp-box">
                                <div className="usp-im-cont d-flex align-items-center justify-content-center">
                                    <img className='usp_img'
                                    title="extremely durable"
                                    alt="extremely durable"
                                    src="https://images.bewakoof.com/web/Easy-Returns.svg"
                                    />
                                </div>
                                <p>extremely durable</p>
                            </div>
                            <div className="usp-box">
                                <div className="usp-im-cont d-flex align-items-center justify-content-center">
                                    <img className='usp_img'
                                    title="enhanced colour retention"
                                    alt="enhanced colour retention"
                                    src="https://images.bewakoof.com/web/Globe.svg"
                                    />
                                </div>
                                <p>enhanced colour retention</p>
                            </div>
                        </div> */}
                        {/* no jbjhv */}
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Customer Rating
                                </Typography>
                                {review.slice(0, 2).map((i) => {
                                    return (
                                        <Typography variant="body2">
                                            <Rating name="half-rating-read" defaultValue={i.ratings} precision={0.5} readOnly />
                                            <br />
                                            <Typography style={{ color: "GrayText" }}>
                                                {i.text}
                                            </Typography>

                                        </Typography>)
                                })}

                            </CardContent>
                            <Link to={loggedIn ? `/review/${id}` : `/login`}>
                                <Button size="small" style={{ color: "GrayText" }} >View All Reviews</Button>
                            </Link>
                        </Card>
                        {/* <div>
                    <div className='Heading'>Customer Rating</div>
                    {review.map((i)=>{
                        return (<div>
                            <div>Ratings : {i.ratings}</div>
                            <div>Review : {i.text}</div>

                        </div>)
                    })}
                </div> */}

                    </div>

                </div>
            </>)}
            <FooterWithoutAbout />
        </div>
    </>
    )
}
export default ShowSingleCategory