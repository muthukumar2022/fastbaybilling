import React from 'react'
import Vector1 from '../assets/Vector1.png'
import Ellipse115 from '../assets/Ellipse115.png' 
import TM from '../assets/TM.png';

import '../components/Header.css'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
    
      <header className='header_page'>
        
          <div className='nav_warpper'>
         <div className='logo'>   
        <div className='logo_left'>
          <img src={Vector1} alt='Vector'/>
          </div>
          <div className='logo_top'>
            <img src={Ellipse115} alt='Ellipse'/>
            </div>
            <div className='logo_top_tm'>
          <img src ={TM} alt ='TM'/>
          </div>
          </div>  
         
          <div className='logo_right'>
            <div className='btn_payment_left'>
          <button className='payment_done'>Payment done</button> 
          </div>
          <div className='btn_cell'>
            <div className='logo_right_cell'><i class="ri-phone-line"></i>
          </div> 
          </div>
          </div>
        </div>

</header>

    
  )
}

export default Header