import React, { useState , useEffect} from 'react'
import '../singleCategory/showSingleCat.css';
import TopHeader from '../home/header/topHeader';
import SideNavbar from '../home/header/sideNavbar';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';

const ShowSingleCategory=()=> {
    const {id} = useParams();
    console.log("id is : ",id);
    const [singleProduct,setSingleProduct] = useState({});
    const[src,setSrc] = useState("");
    const[selected,setSelected] = useState(false);


    const api = `https://academics.newtonschool.co/api/v1/ecommerce/product/${id}`;

    async function getSingleProduct()
    {
        try
        {
            const res = await fetch(api,{
                method: "GET", // *GET, POST, PUT, DELETE, etc.                        
                headers: {
                    "Content-Type": "application/json",
                    'projectId': 'ctxjid7mj6o5',
                }});
            const result = await res.json();
            console.log("single.data : ",result.data);  https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=1597"
            setSingleProduct(result.data);
        
        }catch (error) {
            console.log(error);
        }
    }

    const selectImg= (src)=>{
        setSrc(src);
        setSelected(true);
    }
    useEffect(()=>{
        getSingleProduct();
    },[]);

  return (<>
    <div className='MainWrpr'>
        <TopHeader/>
        <SideNavbar/>
        <div className="topheadContainer px-20">
            <span className="tophead">Home </span>
            <span className="tophead">Women Clothing </span>
            <span className="tophead">Women's Top Wear</span>
            <span className="tophead"> / {singleProduct.name}</span>
        </div>
        <div className='pageView flex gap-4 mx-auto my-0 px-40 py-4'>
            <div className='imgSlider my-4'>
                {singleProduct.images?.map((i)=>{
                    return(<>
                        <div className='slideimages w-16 h-12' onClick={()=>{selectImg(i)}}><img src={i}/></div>
                    </>
                    ) 
                  })} 
            </div>
            <div className='imageView'>
            {selected?(<img src={src}/>):(<img src={singleProduct.displayImage}/>)}
                
            </div>
            <div className='aboutProduct'>
                <div className='brandName'>{singleProduct.brand}</div>
                <div className='prodName'>{singleProduct.name}</div>
                <div className='flex gap-1 rating'>
                    <i className="fa-solid fa-star py-1" style={{color: "#eee044", fontSize:"10px" }}></i>
                    <span style={{fontSize:"13px",fontFamily:"montserrat-semibold,sans-serif"}}>{parseFloat(singleProduct.ratings).toFixed(1)}</span></div>
                <div>₹<span style={{fontSize:"20px",color:"#0f0f0f"}}>{singleProduct.price}</span></div>
                <div style={{fontSize:"12px",color:"#949494"}}>inclusive of all taxes</div>
                
                <div className='tribeContainer'>TriBe members get an extra discount of ₹50 and FREE shipping.<span style={{marginLeft: "3px",color: "#42a2a2"}}>Learn more</span></div>
                
                <div className="colorName">
                    <label className='colorLabel'> COLOUR OPTIONS:</label>&nbsp;&nbsp; {singleProduct.color}
                </div>
                <div id="testColorBlock-0" className="colorbttn multiColorBlockV3 active">
                    <span>
                        <div style={{height: "calc(100%)",backgroundColor: `${singleProduct.color?.toLowerCase()}`,borderRadius:"8px"}}/>
                    </span>
                </div>

                <div className='flex gap-6 py-4'>
                    <h4 className='selectSize'>SELECT SIZE</h4><span style={{color: "#42a2a2"}}>Size guide</span>
                </div>
                <div className='flex gap-2'>

                    {singleProduct.size?.map((i)=>{
                        return(
                            <>
                                <Button style={{border:"1px solid grey", padding:"10px 0",color:"grey"}}>{i}</Button>
                            </>
                        )
                    })}
                {/* <Button style={{border:"1px solid grey", padding:"10px 0",color:"grey"}}>S</Button>
                <Button style={{border:"1px solid grey" ,padding:"10px 0",color:"grey"}}>M</Button>
                <Button style={{border:"1px solid grey" ,padding:"10px 0",color:"grey"}}>L</Button>
                <Button style={{border:"1px solid grey" ,padding:"10px 0",color:"grey"}}>XL</Button>
                <Button style={{border:"1px solid grey" ,padding:"10px 0",color:"grey"}}>XXL</Button> */}
                </div>
                
                <div className='flex gap-4'>
                <div className="p-add-bag flex">
                    <img src="https://images.bewakoof.com/web/ic-web-head-cart.svg" alt="bag"
                        className="bag-icon"/>
                    <span>ADD TO BAG</span>
                </div>
                <div className="p-add-bag flex" style={{backgroundColor:"white",border:"1px solid grey"}}>
                    <i className="fa-regular fa-heart" style={{color: "grey"}}></i>
                    <span>WISHLIST</span>
                </div>
                </div>
                
            </div>

        </div>
    </div>
    </>
  )
}
export default ShowSingleCategory