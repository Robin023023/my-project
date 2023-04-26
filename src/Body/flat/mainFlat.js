import React from 'react'
import FlatComment from './flatComment'
import FlatImage from './flatImage'

import '../style/flat.css'

export default function MainFlat() {
  return (
    <div className='MainFlat'>
      <FlatComment/>
      <FlatImage/>
    </div>
  )
}