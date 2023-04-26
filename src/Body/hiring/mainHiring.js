import React from 'react'

import HiringImage from './hiringImage'
import '../style/hiring.css'
import HiringComment from './hiringComment'

export default function MainHiring() {
  return (
    <div className='MainHiring'>
      <HiringComment/>
      <HiringImage/>
    </div>
  )
}
