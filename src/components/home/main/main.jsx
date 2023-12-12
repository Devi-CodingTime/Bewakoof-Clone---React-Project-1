import React from 'react'
import Header from '../header/header';
import SliderShow from './slider';
import Footer from '../footer/footer';
import './main.css'
const Main=()=> {
  return (
    <div>
      <Header/>
      <div className='slider'>
        <SliderShow/>
      </div>
      
      {/* <Footer/> */}
    </div>
  )
}
export default Main;
