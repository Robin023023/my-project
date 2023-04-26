import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { AiFillStar } from 'react-icons/ai';

import '../style/Consulting.css'

export default function ConsultionSlider() {
    const option={
        margin:20,
        loop:true,
        dots:false,
        autoplay:true,
        nav:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3,
                nav:true
            }

        }
    }

  return (
    <div>
       <OwlCarousel className='owl-theme py-4' {...option}>
        <div className='item border'>
            <img src='assets/img/man1.jpg' alt='slider photo'/>
            <div className='p-4'>
            <h4>Jenny Wilson</h4>
            <p>UX UI Designer</p>
            <p className='star'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/><span>(132 reviews)</span>
            </p>
            </div>
        </div>
        <div className='item border'>
            <img src='assets/img/man2.jpg' alt='slider photo'/>
            <div className='p-4'>
            <h4>Guy Hawkins</h4>
            <p>Graphics Designer</p>
            <p className='star'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/><span>(132 reviews)</span>
            </p>
            </div>
        </div>
        <div className='item border'>
            <img src='assets/img/man3.jpg' alt='slider photo'/>
            <div className='p-4'>
            <h4>Kristin Watson</h4>
            <p>Web Developer</p>
            <p className='star'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/><span>(132 reviews)</span>
            </p>
            </div>
        </div>
        <div className='item border'>
            <img src='assets/img/man1.jpg' alt='slider photo'/>
            <div className='p-4'>
            <h4>Jenny Wilson</h4>
            <p>UX UI Designer</p>
            <p className='star'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/><span>(132 reviews)</span>
            </p>
            </div>
        </div>
        </OwlCarousel>

    </div>
  )
}
