import { Route ,Routes} from "react-router-dom";
import "../styles/App.css";
import Home from "./home/main/main";
import Login from "./login/login";
import ShowAllCategory from "./clothesCategory/showAllCategory";
import ShowSingleCategory from "./singleCategory/showSingleCat";
import NoCart from "./cart/noCart";

function App() {

  return( <div className="App">
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/allCategory" element={<ShowAllCategory/>}/>
      <Route path="/allCategory/:id" element={<ShowSingleCategory/>}/>
      <Route path="/nocart" element={<NoCart/>}/>
      
    </Routes>
   {/* <ShowSingleCategory/> */}
  </div>);
}

export default App;


// favicon icon -> https://images.bewakoof.com/web/favicon-1635856217.png
// bewakoof logo -> https://images.bewakoof.com/lib/icon/app-logo.png
//  api for filter specific data https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"gender":"Women"} 