import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { AiFillStar } from 'react-icons/ai';
import '../style/TestiMonials.css'

export default function TestiMonialsSlider() {
  const option={
    margin:20,
    loop:true,
    autoplay:true,
    dots:false,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        500:{
          items:1
      },
      700:{
        items:2
      },
      1000:{
        items:3
      }
    }
}
  return (
    <div className='TestiMonialsSlider'>
    <OwlCarousel className='owl-theme py-4' {...option}>
      <div className='item'>
         <div className='grid-item'>
          <img src='assets/img/people1.jpg'/>
          <div className='text'>
            <h4>Jane Cooper</h4>
            <p className='paragraph'>UX UI Design Student</p>
          </div>
         </div>
         <p className='star'>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
          </p>
          <p>“Lorem Ipsum is simply dum text of the printing typesetting. Lorem Ipsum is the simply dummy text of the. Lorem Ipsum is simply dum text of one the printing typesetting. Lorem Ipsum.”</p>
      </div>

      <div className='item'>
      <div className='grid-item'>
          <img src='assets/img/people2.jpg'/>
          <div className='text'>
            <h4>Wade Warren</h4>
            <p className='paragraph'>Digital Marketing Student</p>
          </div>
         </div>
         <p className='star'>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
          </p>
          <p>“Lorem Ipsum is simply dum text of the printing typesetting. Lorem Ipsum is the simply dummy text of the. Lorem Ipsum is simply dum text of one the printing typesetting. Lorem Ipsum.”</p>
      </div>

      <div className='item'>
      <div className='grid-item'>
          <img src='assets/img/people3.jpg'/>
          <div className='text'>
            <h4>Esther Howard</h4>
            <p className='paragraph'>English Language Student</p>
          </div>
         </div>
         <p className='star'>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
          </p>
          <p>“Lorem Ipsum is simply dum text of the printing typesetting. Lorem Ipsum is the simply dummy text of the. Lorem Ipsum is simply dum text of one the printing typesetting. Lorem Ipsum.”</p>
      </div>
    </OwlCarousel>
    </div>
  )
}
