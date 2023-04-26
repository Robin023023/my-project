import React from 'react'

import { BsArrowRight } from 'react-icons/bs';
import '../style/flat.css'

export default function FlatComment() {
  return (
    <div className='FlatComment'>
      <img src='assets/img/s.png'/>
      <span> Stuhire</span>
      <h1><span>Affordable</span> consulting</h1>
      <p>Pre-designed by top talent. Just add your touch.</p>
      <button>Learn More <BsArrowRight/></button>
    </div>
  )
}
