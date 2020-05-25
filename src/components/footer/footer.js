import React from 'react';
import '../../styles/footer/footer.css';

function Footer() {
  return (
        <div className='footer'>
           <div className='container'>
               <div className='footer-content'>
               <span className='copy-right'>© 2020</span>
               <div className='socialhandle'>
                   <img src='https://wearetogether.ng/twitter.svg' alt='twitter-icon' />
                   <img src='https://wearetogether.ng/instagram.svg' alt='instagram-icon' />
                   <img src='https://wearetogether.ng/facebook.svg' alt='facebook-icon' />

               </div>
               </div>
           </div>
        </div>
  );
}

export default Footer;
