import React, { useContext, useEffect , useState} from 'react'
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from '../loader/loader';
import { wishlisted } from '../utility/storagewishlist';
import { categoryContext } from '../Context/provider';
import TopHeader from '../home/header/topHeader';
import SideNavbar from '../home/header/sideNavbar';
import FooterWithoutAbout from '../home/footer/footerWithoutAbout';

function ViewCategoriezedItem() {
    const {addToWishList,wishlistMsg} = useContext(categoryContext);

    const[searchParams, setSearhcParams]= useSearchParams();
    const [loader,setLoader] = useState(false);
    const [product,setProduct] = useState([]);
    const navigate = useNavigate();
    async function categorizedProducts()
    {
        try
        {
            setLoader(true);
            let api = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"subCategory":"${searchParams.get('category')}","gender":"${searchParams.get('gender')}"}&limit=100`;
            console.log("apihit",api)
            const res = await fetch(api,{
               
            method: "GET",                     
                headers: {
                    "Content-Type": "application/json",
                    'projectId': 'ctxjid7mj6o5',
                }});
            const result = await res.json();
            setProduct(result.data);
        
        }catch (error) {
            console.log(error);
        }
        finally{
            setLoader(false);
        }
    }
    const cardClick = (id)=>{
        navigate(`/allCategory/${id}`)
    }
    const handlemsgPopUp = ()=>{
        alert(wishlistMsg);
    }
    useEffect(()=>{
        categorizedProducts();
    },[]);
  return (
    <div>
        <TopHeader/>
        <SideNavbar/>
        <img src='https://images.bewakoof.com/uploads/category/desktop/Printed-T-shirts_Inside_Desktop-Banner_Women-1704957648.jpg'/>
        <h1 style={{marginTop: "10px",fontSize: "17px",fontWeight: "500",color: "#635d5d",fontFamily: "sans-serif"}}>{searchParams.get('gender')}'s {searchParams.get('category')}</h1>
    <div className="flex flex-wrap px-3 py-0 justify-center items-center">
        {loader?<Loader/>:""}
        {product?.map((i,index)=>{
          return(<div className="categorycard relative" style={{padding:"10px",width:"339px"}} key={index}>
            <div className="border-solid border-2 border-gray-200 w-56 rounded-md" style={{height:"370px",width:"100%"}}>
                
                <img src={i.displayImage} style={{height:"75%",width:"100%"}} className="Imagetag"
                onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="../../../../images/notAvailableimages.jpg"}}
                onClick={()=>{cardClick(i._id)}}/>
                
            <h3 className="absolute top-60 left-2 bg-white ml-0 pl-2">{parseFloat(i.ratings).toFixed(1)}
            <i className="fa-solid fa-star py-1" style={{color: "#eee044", fontSize:"10px" }}></i>
            </h3>
            <h3 className="brand-name rvCardDetails undefined break-all" style={{whiteSpace: "nowrap",width: "265px",overflow: "hidden",textOverflow: "ellipsis"}}>{i.brand}</h3>
            
            <section>
                <h2 style={{fontSize:"10px",whiteSpace: "nowrap",width: "184px",overflow: "hidden",textOverflow: "ellipsis"}}>{i.name}</h2>
                <div onClick={()=>{addToWishList(i._id)}}>
                    {wishlisted.has(i._id)?(<img src="https://images.bewakoof.com/web/Wishlist-selected.svg" className="wishlist-iconCategory" onClick={handlemsgPopUp}/>):
                    (<img src="https://images.bewakoof.com/web/Wishlist.svg" className="wishlist-iconCategory"/>)}
                </div>
                <div className="PriceText">
                  <span>₹</span>{i.price}
                </div>
            </section>
            </div>
        </div>)
        })}
       
        </div>
        <FooterWithoutAbout/>
    </div>
  )
}

export default ViewCategoriezedItem
