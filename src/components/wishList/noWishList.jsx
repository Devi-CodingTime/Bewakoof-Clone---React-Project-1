import React from 'react'
import TopHeader from '../home/header/topHeader'
import SideNavbar from '../home/header/sideNavbar'
import FooterWithoutAbout from '../home/footer/footerWithoutAbout'
import { Link } from 'react-router-dom'

function NoWishList() {
  return (
    <>
    <TopHeader/>
    <SideNavbar/>
    <div className="emptycartwish">
        <img
            src="https://images.bewakoof.com/web/wishlistEmpty.svg"
            title="empty wishlist"
            alt="empty wishlist"
            width="30%"
            loading="lazy"
        />
        <div className="emp_list_title">Hey! Your wishlist is empty.</div>
        <div className="emp_list_subtitle">
            Save your favourites here and make them yours soon!
        </div>
       <div className="wishlist_customBtn">
       <Link to={'/'} style={{color: "rgb(255, 255, 255)"}}>Shop now </Link></div>
       
    </div>
    <FooterWithoutAbout/>
    </>
  )
}

export default NoWishList
