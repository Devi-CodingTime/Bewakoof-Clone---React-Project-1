import { Route ,Routes} from "react-router-dom";
import "../styles/App.css";
import Home from "./home/main/main";
import Login from "./login/login";
import ShowAllCategory from "./clothesCategory/showAllCategory";
import ShowSingleCategory from "./singleCategory/showSingleCat";
import NoCart from "./cart/noCart";
import Review from "./review/review";
import Signup from "./signup/signup";
import ForgetPassword from "./forgetPassword/forgetPassword";
import AddToCart from "./cart/addToCart";
import { ContextProvider } from "./Context/provider";
import ShowWishList from "./wishList/showWishList";
import Checkout from "./checkout/checkout";
import Payment from "./payment/payment";
import Orderplaced from "./orderplaced/orderplaced";
import Myorder from "./orderList/myorder";
import SingleOrder from "./singleorder/singleOrder";
// import Loader from "./loader/loader";
function App() {

  return( <div className="App">
    
    <ContextProvider>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/forgetpassword" element={<ForgetPassword/>}/>

      <Route path="/allCategory" element={<ShowAllCategory/>}/>
      <Route path="/allCategory/:id" element={<ShowSingleCategory/>}/>
      <Route path="/nocart" element={<NoCart/>}/>
      <Route path="/addtocart" element={<AddToCart/>}/>
      <Route path="/showWishList" element={<ShowWishList/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/orderplaced" element={<Orderplaced/>}/>
      <Route path="/myorder" element={<Myorder/>}/>
      <Route path="/singleorder/:id" element={<SingleOrder/>}/>

      <Route path="/review/:id" element={<Review/>}/>
      </Routes>
      </ContextProvider>

      
    
   {/* <ShowSingleCategory/> */}
  </div>);
}

export default App;

