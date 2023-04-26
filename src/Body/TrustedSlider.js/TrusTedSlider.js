import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../style/TrustedSlider.css'

export default function TrusTedSlider() {
    const option={
        margin:70,
        loop:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:1000,
        responsive:{
            0:{
                items:2
            },
            700:{
              items:2
            },
            1000:{
              items:4
            }
        }

    }
  return (
    <div className='TrustedSlider'>
    <h3 className='me-5'>Trusted by</h3>
    <OwlCarousel className='owl-theme d-block mt-5 mt-md-0' {...option}>
    <div className='item'>
    <img src='assets/img/Google.png' alt='Trusted icon'/>
    </div>
    <div className='item'>
    <img src='assets/img/Facebook.png' alt='Trusted icon'/>
    </div>
    <div className='item'>
    <img src='assets/img/Amazon.png' alt='Trusted icon'/>
    </div>
    <div className='item'>
    <img src='assets/img/Microsoft.png' alt='Trusted icon'/>
    </div>
    <div className='item'>
    <img src='assets/img/Collage.png' alt='Trusted icon'/>
    </div>
    </OwlCarousel>
    </div>
  )
}
