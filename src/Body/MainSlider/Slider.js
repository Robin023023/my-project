import React from 'react'

import '../style/Slider.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BsArrowRight } from 'react-icons/bs';

export default function Slider() {
    const option={
        margin:20,
        loop:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            }
        }
    }
  return (
    <div className='carousel'>
    <OwlCarousel className='owl-theme py-4' {...option}>
      <div className='item'>
      <div className='row'>
      <div className='col-xl-6 pt-5'>
      <h1><span>Access Pre-Screened Candidates</span> For All Your Company Need</h1>
       <p>Hire top <span>designers & developers</span> from best schools across the globe in record time</p>
        <button className='button d-none d-xl-block'>Start for free <BsArrowRight/></button>
      </div>
      
      <div className='col-xl-6 pt-5'>
      <img src='assets/img/man2.png'/>
      
      </div>
      </div>
      </div>

      <div className='item'>
      <div className='row'>
      <div className='col-xl-6 pt-5'>
      <h1><span>Access Pre-Screened Candidates</span> For All Your Company Need</h1>
       <p>Hire top <span>designers & developers</span> from best schools across the globe in record time</p>
       <button className='button d-none d-xl-block'>Start for free <BsArrowRight/></button>
      </div>
      <div className='col-xl-6'>
      <img src='assets/img/man1.png'/>
      </div>
      </div>
      </div>

      <div className='item'>
      <div className='row'>
      <div className='col-xl-6 pt-5'>
      <h1><span>Access Pre-Screened Candidates</span> For All Your Company Need</h1>
       <p>Hire top <span>designers & developers</span> from best schools across the globe in record time</p>
       <button className='button d-none d-xl-block'>Start for free <BsArrowRight/></button>
      </div>
      <div className='col-xl-6'>
      <img src='assets/img/man3.png'/>
      </div>
      </div>
      </div>

      </OwlCarousel>
      <button className='form-control mb-4 py-3 btn2 d-block d-xl-none'>Start for free <BsArrowRight/></button>
    </div>
  )
}

  

      
