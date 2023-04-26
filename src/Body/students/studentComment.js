import React from 'react'

import { BsArrowRight } from 'react-icons/bs';
import '../style/student.css'

export default function StudentComment(props) {
    
  return (
    <div className='StudentComment card'>
    <div className='card-body'>
      <img src={props.item.image}/>
      <h4>{props.item.heading}</h4>
      <p>{props.item.comment}</p>
      <button>{props.item.btn} <BsArrowRight/></button> 
    </div>
    </div>
  )
}
