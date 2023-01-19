import React from 'react'
import Vector1 from '../assets/Vector1.png'
import Ellipse115 from '../assets/Ellipse115.png' 
import Ellipse189 from '../assets/Ellipse189.png'
import TM from '../assets/TM.png';
import Vector from '../assets/Vector.png'
import call from '../assets/call.png';
import '../Pages/Bill.css'
import 'remixicon/fonts/remixicon.css'
import { useState } from 'react';
import {Link} from 'react-router-dom'

const Bill = () => {
        const[close ,setClose]=useState(false)
        const closepage=()=>{
                setClose(false)
        }
  return (
    <>
    <mani className="bill_page">
 
    <header className='header'>
     <div className='header_logo'>
      
        <img className='img_logo' src={Vector1} alt='Vector'/>
        <img className='img_logo_top' src={Ellipse115} alt='Ellipse'/>
        <img className='img_top' src ={TM} alt ='TM'/>
        {/* </div> */}
        <span className='btn_close'>
      <Link className='btn_close' to='/'>  <i  class="ri-close-line"></i> </Link> 
    </span>
    </div>
 <div className='order_date'>
   <div className='order_detail'>
   <div className='order_hotel'>
    <p className='order_hotel_name'style={{ fontWeight: 'bold' }}>Thank you!</p>  <br/>
    <p className='order_hotel_name'>Royal Spices receipt</p> 
    </div>
    <div className='bill_order_date'>
    <p className='order_date_id'>12.01.2022</p> <br/>
    <p className='order_date_id' style={{ fontWeight: 'bold' }}>Order ID - FH1100001</p> 
    </div>
    </div>
    <div className='logo_right_vector'>
    <img className='logo_right' src={Vector} alt='Vector'/>
    </div>
 </div>
 </header>

{/*End of Header */}
      
{/**Menu price */}
   <section className='menu'>
                  <div className='order_menu'>
                                 <div className='menu_left'>
                                                  <div className='menu_item_top'>
                                                            <p className='menu_item'>Chicken biriyani</p> <br/>
                                           </div>
                                                   <div className='menu_item_bottom'>
                                                             <p className='menu_item'>Bucket mutton biriyani</p><br/>
                                            </div>   
                          </div>
                  <div className='menu_right'>
                                    <div className='quantity_colum'>
                                                    <div className='quantity_top'>
                                                                 <p className='menu_item'>2</p><br/>
                                            </div>  
                                                     <div className='quantity_bottom'>
                                                                 <p className='menu_item'>5</p><br/>
                                            </div> 
                           </div>    
                                    <div className='price_colum'>
                                                        <div className='price_colum_top'>
                                                                     <p className='menu_item'>350.00</p><br/>
                                              </div>
                                                         <div className='price_colum_bottom'>
                                                                      <p className='menu_item'>995.00</p><br/>
                                     </div>
                           </div>     
                   </div>
        </div>
   <div className='bill_colum'>
                       <div className='bill_amount_left'>
               </div>
                          <div className='bill_amount'>
                                  <div className='bill_total_left'>
                                            <div className='quantity_top'>
                                                  <p className='bill_total'>total</p> <br/>
                                          </div>
                                             <div className='quantity_top'>
                                                   <p className='bill_total'>GST at 5%</p> <br/>
                                         </div>
                                             <div className='quantity_top'>  
                                                   <p className='bill_total'>Delivery</p> <br/>
                                          </div>
                                             <div className='quantity_top'>
                                                   <p className='bill_total'>Discount</p><br/>
                                          </div>
                                              <div className='quantity_top'>   
                                                     <p className='bill_total' style={{ fontWeight: 'bold' }}>Order total</p> 
                                          </div>
                     </div>
                            <div className='bill_total_right'>
                                                   <div className='price_colum_top'>  
                                                              <p className='bill_total'>1695.00</p> <br/>
                                          </div>
                                                      <div className='price_colum_top'>   
                                                                  <p className='bill_total'>84.75</p> <br/>
                                          </div>
                                                        <div className='price_colum_top'>   
                                                                     <p className='bill_total'>15.00</p> <br/>
                                           </div>
                                                         <div className='price_colum_top'>
                                                                        <p className='bill_total'>54.00</p><br/>
                                               </div>
                                                          <div className='price_colum_top'>
                                                                         <p className='bill_total' style={{ fontWeight: 'bold' }}>1740.00</p> 
                                            </div>        

                                    </div>
                               </div>
                          </div>
                   </section> 


{/**End of menu price */} 
{/** Delivery details */}
<section>
                <div className='deliver_detail'>
                       
                                <h5 className='bill_total' style={{ fontWeight: 'bold' ,display:'flex'}}>Delivery to </h5>
                                
                                          <p className='bill_total' style={{display:'flex'}}>18 Sky Colony, Adaya, Chennai 600002</p>
                   </div>
           </section>
{/**End of Delivery details */}
{/**Address Fooder */}
<section>
                  <div className='address_detail'>
                     <p className='bill_total' style={{ fontWeight: 'bold' }}>Royal Spices -</p> 
                         <p className='bill_total'>11th Main road, 1st Cross street, Adayar, Chennai 600002, GST number 89727359048034
                              FSSAI number 909341234</p>
          </div>
    </section>
{/**End of Address fooder */}

</mani>
</>
  )
}

export default Bill