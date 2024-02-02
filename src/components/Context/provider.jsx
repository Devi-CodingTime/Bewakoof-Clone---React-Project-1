import { useContext,createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { wishlisted } from "../utility/storagewishlist";

const categoryContext = createContext();
const ContextProvider = (props)=>{
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [searchTerm,setsearchTerm] = useState("");

    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState("");
    const [wishlist,setWishlist] = useState([]);
    const [wishListedItem,setWishListedItem] = useState([]);
    
    const [loader,setLoader] = useState(false);
    const[totalPrice,setTotalPrice] = useState(0);
    const [cartItem,setCartItem] = useState([]);
    const getWishListData = async() =>{
        try
        {
            console.log("getWishListData");
            setLoader(true);
            let res = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist",{
                method:"GET",
                headers : {projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json',Authorization:`Bearer ${token || localStorage.getItem("token")}`},
            });
            let data = await res.json();
            setWishlist(data.data.items);
            for(var i=0;i<data.data.items.length;i++)
            {
                
                let val = data.data.items[i].products._id;
                wishlisted.add(val);
            }
        }catch(error){
            console.log(error);
        }
        finally{
            setLoader(false);
        }
    }

    const addToWishList = async(id)=>{
        if(loggedIn)
        {
        try
            {
                setLoader(true);
                wishlisted.add(id);
                let bagData = { productId : id };
                let res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`,{
                    method:"PATCH",
                    headers : {projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json',Authorization:`Bearer ${token}`},
                    body: JSON.stringify(bagData)
                });
                let data = await res.json();
                
                if(data.status==="success")
                {
                    setWishListedItem(data.data);
                    getWishListData();
                }
            }
            catch(error)
            {
                console.log(error);
            }
            finally{
                setLoader(false);
            }
        }
        else{
            navigate(`/login`);
        }
    }

    const removeFromWishList = async(id)=>{
        try
            {
                setLoader(true);
                wishlisted.delete(id);
                let res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`,{
                    method:"DELETE",
                    headers : {projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json',Authorization:`Bearer ${token}`}
                    
                });
                let data = await res.json();
                setWishlist(data.data.items);
                
            }
            catch(error)
            {
                console.log(error);
            }
            finally{
                setLoader(false);
            }
      }

    const getCartItems = async() =>{
        try
        {
            setLoader(true);
          let res = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/cart",{
              method:"GET",
              headers : {projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json',Authorization:`Bearer ${token || localStorage.getItem("token")}`},
          });
          let data = await res.json();
          setCartItem(data.data.items);
          setTotalPrice(data.data.totalPrice);
    
        }catch(error){
            console.log(error);
        }
        finally{setLoader(false);}
    }
    
    const removeFromCart = async(id)=>{
        try
            {
                setLoader(true);
                let res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,{
                    method:"DELETE",
                    headers : {projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json',Authorization:`Bearer ${token}`}
                    
                });
                let data = await res.json();
                setCartItem(data.data.items);
                
                // console.log("cart item set done -------",data.data.items);
            }
            catch(error)
            {
                console.log(error);
            }
            finally{
                setLoader(false)
            }
      }
   
    const handleLogin=(loginvalue)=>{
        setLoggedIn(loginvalue);
    }
    const handleLogout=()=>{
        setLoggedIn(false);
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        localStorage.removeItem("email");
        setCartItem([]);
        setWishlist([]);
        
        navigate("/login");
    }

    const handleToken = (token)=>{
        setToken(token);
    }
    const handleSearch = (term,s)=>{
        setSearch(s);
        setsearchTerm(term);
    }

    return(<>
        <categoryContext.Provider value={{search,searchTerm,loggedIn,token,wishlist,cartItem,totalPrice,loader,
            handleSearch,handleLogin,handleToken,handleLogout,getWishListData,getCartItems,removeFromCart,removeFromWishList,addToWishList,
            setCartItem}}>
            {props.children}
        </categoryContext.Provider>
    </>)
}
export {ContextProvider,categoryContext};