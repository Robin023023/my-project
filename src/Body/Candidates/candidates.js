import React from 'react'

import '../style/candidates.css'

export default function Candidates(props) {
  console.log(props)
  return (
    <div className='candidate '>
      <img className='img1' src={props.items.image1} alt='my photo1'/>
      <img className='img2' src={props.items.image2} alt='my photo2'/>
      <h3>{props.items.heading}</h3>
    </div>
  )
}
