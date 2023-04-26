import React from 'react'

import { BsArrowRight } from 'react-icons/bs';
import '../style/hiring.css'

export default function HiringComment() {
  return (
    <div className='HiringComment'>
      <div className='box'>
      <img src='assets/img/dollar.png' alt='icon photo1'/>
      <div>
      <h4>No cost  hiring</h4>
      <p>Hire top designers & developers from best schools across
      the globe in record time</p>
      </div>
      </div>

      <div className='box'>
      <img src='assets/img/star.png' alt='icon photo2'/>
        <div>
      <h4>Pay zero fees</h4>
      <p>Hire top designers & developers from best schools across
      the globe in record time</p> 
      </div>
      </div>
      

      <button>Start here <BsArrowRight/></button>
    </div>
  )
}
