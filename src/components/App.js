import { useEffect } from "react";
import "../styles/App.css";
import Main from "./home/main/main";
// import Header from "./home/header/header";
// import SliderShow from "./home/main/slider";

function App() {
  // /api/v1/ecommerce/clothes/products   products
  // https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories   categories
  // api/v1/user/login  login
  // https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg  bewakoof image
  // async function getProduct(){
  //   let res = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/Mobile/categories",{
  //     method: "GET", // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //       "Content-Type": "application/json",
  //       'projectId': 'ctxjid7mj6o5',
  //     }});
  //     let data = await res.json();
  //     console.log(data);
  // }
  // useEffect(()=>{
  //   getProduct();
  // },[]);
  return( <div className="App">
    <Main/>
  
  </div>);
}

export default App;


// favicon icon -> https://images.bewakoof.com/web/favicon-1635856217.png
//  bewakoof logo -> https://images.bewakoof.com/lib/icon/app-logo.png
//  gif -> https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif
//  gif -> https://images.bewakoof.com/uploads/grid/app/NEW-1x1-BOJ-RMIK-GIF-1701613600.gif