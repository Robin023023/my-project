import React from 'react'

import '../style/video.css'
import { BsArrowRight } from 'react-icons/bs';


export default function VideoData() {
  return (
    <div className='VideoData'>
        <div className='d-flex justify-content-center align-items-center'> 
            <img src='/assets/img/dollar.png' alt='icon var'/>
            <div className='ms-3'>
                <h3>No cost  freelancer</h3>
                <p>Hire top designers & developers from best schools across the globe in record time</p>
            </div>
        </div>

        <div className='d-flex justify-content-center align-items-center py-4'> 
            <img src='/assets/img/star.png' alt='icon var'/>
            <div className='ms-3'>
                <h3>Hire freelancer</h3>
                <p>Hire top designers & developers from best schools across the globe in record time</p>
            </div>
        </div>

        <div className='d-flex justify-content-center align-items-center'> 
            <img src='/assets/img/tik.png' alt='icon var'/>
            <div className='ms-3'>
                <h3>Work done for free</h3>
                <p>Hire top designers & developers from best schools across the globe in record time</p>
            </div>
        </div>

        <button className=''>Click here <BsArrowRight/></button>
    </div>
  )
}
