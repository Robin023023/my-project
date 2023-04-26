import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../style/gig.css'
import { BsArrowRight } from 'react-icons/bs';

export default function GigSlider() {
  const option={
    margin:40,
    loop:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1 
        },
        800:{
          items:2
        },
        1000:{
          items:4
        }
    }
}
  return (
    <div className='owlCarousel3'>
    <OwlCarousel {...option}>
      <div className='item'>
      <button className='btn btn-outline-primary'>Free</button>
       <img className='img-fluid' src='assets/img/logo.png'/>
       <div className='comment'>
       <h4>Logo Design</h4>
       <span>By Jenny Wilson</span>
       <p>Purchased <span className='span'>50 Times</span></p>
       </div>
      </div>

      <div className='item'>
      <button className='btn btn-outline-primary'>Free</button>
       <img className='img-fluid' src='assets/img/data.png'/>
       <div className='comment'>
       <h4>Data Entry</h4>
       <span>By Jenny Wilson</span>
       <p>Purchased <span className='span'>50 Times</span></p>
       </div>
      </div>

      <div className='item'>
      <button className='btn btn-outline-primary'>Free</button>
       <img className='img-fluid' src='assets/img/seo.png'/>
       <div className='comment'>
       <h4>SEO</h4>
       <span>By Jenny Wilson</span>
       <p>Reduced <span className='span'>50 Times</span></p>
       </div>
      </div>

      <div className='item'>
      <button className='btn btn-outline-primary'>Free</button>
       <img className='img-fluid' src='assets/img/wordpresss.png'/>
       <div className='comment'>
       <h4>Wordpresss</h4>
       <span>By Jenny Wilson</span>
       <p>Purchased <span className='span'>50 Times</span></p>
       </div>
      </div>

      </OwlCarousel>
      <a className='button btn btn-primary' href='#'>View All <BsArrowRight/></a>
      
    </div>
  )
}
