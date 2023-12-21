import React from 'react';
import './header.css';
import FixedHeaderContainer from './fixedHeader';
import TopHeader from './topHeader';
import SideNavbar from './sideNavbar';
export default function Header() {

  return (
    
    <div className='mainHeader'>
    
      <TopHeader />

      <FixedHeaderContainer/>

      <SideNavbar/>
      
    </div>
  );
}



