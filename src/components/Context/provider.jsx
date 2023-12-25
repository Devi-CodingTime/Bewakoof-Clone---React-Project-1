import { useContext,createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const categoryContext = createContext();
const ContextProvider = (props)=>{
    const [search, setSearch] = useState("");
    const [searchTerm,setsearchTerm] = useState("");

    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState("");
    const [bagLength,setBagLength] = useState(0);
    const [wishlist,setWishlist] = useState([]);

    const getWishListData = async() =>{
        try
        {
            let res = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist",{
                method:"GET",
                headers : {projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json',Authorization:`Bearer ${token}`},
            });
            let data = await res.json();
            setWishlist(data.data.items);
           
        }catch(error){
            console.log(error);
        }
    }

    const [bagItem,setBagItem] = useState([]);
    const addToBag = async(bagData,id) =>{
        if(!loggedIn)
            navigate("/login");
        else
        {
            try
            {
                // let bagData = {size:'S',quantity:'1'}
                let res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,{
                    method:"PATCH",
                    headers : {projectID:'ctxjid7mj6o5' , 'Content-Type': 'application/json',Authorization:`Bearer ${token}`},
                    body: JSON.stringify(bagData)    
                });
                let data = await res.json();
                setBagItem(data.data.items);
                getBagLength(data.data.items.length);
                
                console.log("get setBagItem -------",data.data.items.length);
            }
            catch(error)
            {
                console.log(error);
            }
        }
    }
    const navigate = useNavigate();
    const handleLogin=(loginvalue)=>{
        setLoggedIn(loginvalue);
    }
    const handleLogout=()=>{
        setLoggedIn(false);
        setToken("");
        navigate("/login");
    }

    const handleToken = (token)=>{
        setToken(token);
    }
    const handleSearch = (term,s)=>{
        setSearch(s);
        setsearchTerm(term);
    }
    const getBagLength = (count) =>{
        setBagLength(count);
    }
    
    return(<>
        <categoryContext.Provider value={{search,searchTerm,loggedIn,token,bagLength,wishlist,handleSearch,handleLogin,handleToken,getBagLength,handleLogout,getWishListData,addToBag,setWishlist}}>
            {props.children}
        </categoryContext.Provider>
    </>)
}
export {ContextProvider,categoryContext};