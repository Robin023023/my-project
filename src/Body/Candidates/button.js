import React from 'react'

import '../style/candidates.css'
import { BsArrowRight } from 'react-icons/bs';

export default function Button() {
  return (
    <div className='Button'>
        <button>Show All <BsArrowRight/></button>
    </div>
  )
}
