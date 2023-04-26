import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import '../style/scale.css'

export default function SCALE(props) {
  return (
    <div className='scale'>
     <img src={props.item.image} alt=''/>
      <h3 className='pt-3'>{props.item.comment}</h3>
      <p>{props.item.text}</p>
      <button>{props.item.btn}<BsArrowRight/></button>
    </div>
  )
}
