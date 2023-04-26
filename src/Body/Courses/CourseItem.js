import React from 'react'

import '../style/Courses.css'

export default function CourseItem(props) {
  return (
    <div className='CourseItem'>
      <div className='d-flex'>
       <img className='w-50 pb-2' src={props.item.image1}/>
      
      
      <div className='texts'>
      <span>{props.item.text1}</span>
      <br/>
      <span>{props.item.text2}</span>
      </div>
      </div>
      <h4 className='mt-2'>{props.item.heading}</h4>
    </div>
    
  )
}
