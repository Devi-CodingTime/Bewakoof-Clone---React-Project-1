import React from 'react'
import TopHeader from '../home/header/topHeader'
import SideNavbar from '../home/header/sideNavbar'
import FooterWithoutAbout from '../home/footer/footerWithoutAbout'

function Comingsoon() {
  return (
    <div>
      <TopHeader/>
      <SideNavbar/>
      <div style={{margin:"0 auto",height:"100%",width:"100%"}}>
        <img src='./images/coming-soon-page.webp' style={{height:"100%",width:"100%"}}/>
      </div>
      <FooterWithoutAbout/>
    </div>
  )
}

export default Comingsoon
