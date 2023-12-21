import { useContext,createContext, useState, useEffect } from "react";
const categoryContext = createContext();
const ContextProvider = (props)=>{
    const [search, setSearch] = useState("");
    const [searchTerm,setsearchTerm] = useState("");
    const handleSearch = (term,s)=>{
        setSearch(s);
        setsearchTerm(term);
    }
    return(<>
        <categoryContext.Provider value={{search,searchTerm,handleSearch}}>
            {props.children}
        </categoryContext.Provider>
    </>)
}
export {ContextProvider,categoryContext};