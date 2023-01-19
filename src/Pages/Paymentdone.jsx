import React from 'react'
import '../Pages/Paymentdone.css'
import Cookinglogo from '../assets/Cookinglogo.png'
import Cookinglogo1 from '../assets/Cookinglogo1.png'
import Cookinglogo2 from '../assets/Cookinglogo2.png'
import Cookinglogo3 from '../assets/Cookinglogo3.png'
import Cookinglogo4 from '../assets/Cookinglogo4.png'
import Cookinglogo5 from '../assets/Cookinglogo5.png'
import {Link} from 'react-router-dom'
import Header from '../components/Header'

const Paymentdone = () => {
  return (
   <>
    <Header/>
     <mani>
    
       <section className='payment_page'>
        
           <div className='payment_date'>
            <div className='payment_hotel_left'>
           <p className='payment_hotel'>Royal Spices</p>
           </div>
           <div className='payment_hotel_right'>
           <p className='payment_hotel'>12.02.2022</p>
           </div>
          </div>
           <div className='view_payment_receipt'>
           <nav>
                 <a className='nav_next_page' href='/Bill'>View receipt</a>
                
            </nav>
            
            
          </div> 
         </section> 
         <section>
          <div className='cooking_section'>
            <div className='cooking_section_left'>
               
            </div>
            <div className='cooking_section_right'>
              <div className='cooking_now_text'>
                <p className='cooking_now_page'>Cooking now!</p>
                </div>
                <div className='cooking_now_logo'>
                    {/* <div  classname='logo_first' > */}
                <img className='logo_first' src={Cookinglogo}alt='Cookinglogo'/>
                {/* </div> */}
                <img className='logo_third' src={Cookinglogo1}alt='Cookinglogo'/>
                <img className='logo_four' src={Cookinglogo2}alt='Cookinglogo'/>
               <img className='logo_five' src={Cookinglogo4}alt='Cookinglogo'/>
                 <img className='logo_six' src={Cookinglogo3}alt='Cookinglogo'/> 
                 <img className='logo_sevan' src={Cookinglogo3}alt='Cookinglogo'/> 
                <img className='logo_second' src={Cookinglogo5} alt='Cookinglogo'/> 
                </div>
            </div>

          </div>
         </section>

         <section className='empty_speace'>

         </section>
         <section>
          <div className='payment_footer'>
            <div className='payment_footer_earn'>
          <p className='payment_earn_cashback'>🎉  You’ve earned a cashback!</p>
          </div>
          <div className='payment_footer_claim'>
          <button className='payment_claim_btn'>
          💰 Claim ₹ 32 cashback 
          </button>
          </div>
          </div>
         </section>
     </mani>   
</>
  )
}

export default Paymentdone