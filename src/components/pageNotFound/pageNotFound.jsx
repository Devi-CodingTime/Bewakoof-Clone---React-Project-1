import React from 'react'
import TopHeader from '../home/header/topHeader'
import SideNavbar from '../home/header/sideNavbar'
import FooterWithoutAbout from '../home/footer/footerWithoutAbout'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
      <TopHeader/>
      <SideNavbar/>
      <Link to={'/'} style={{margin:"0 auto",height:"100%",width:"100%"}}>
        <img src='./images/pagenotfound.png' style={{height:"100%",width:"100%"}}/>
      </Link>
      <FooterWithoutAbout/>
    </div>
  )
}

export default PageNotFound


