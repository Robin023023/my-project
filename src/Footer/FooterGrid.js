import React from 'react'

import './Footer.css'

import { FaFacebookF } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';

export default function FooterGrid() {
  return (
   <div className='FooterGrid'>
      <img className='d-inline d-xl-none' src='assets/img/logo0.png' alt='my-photo'/>
    <div className='row'>
      <div className='col-xl-3 col-lg-6 mt-5'>
        <p className='text1'>Hire top designers & developers from best schools across the globe in record time</p>
      </div>
      <div className='col-xl-3 col-lg-6'>
         <div className='d-flex'>
            <div className='me-2'>
                <h4>About us</h4>
                <ul>
                    <li> <a href=''>Student</a></li>
                    <li><a href=''>Learning</a></li>
                    <li><a href=''>Hire Freelancer</a></li>
                    <li><a href=''>Hire Consutant</a></li>
                </ul>
            </div>
            <div>
                <h4>Student</h4>
                <ul>
                    <li><a href=''>Upskill</a></li>
                    <li><a href=''>Internship</a></li>
                    <li><a href=''>Placement</a></li>
                    <li><a href=''>Learning</a></li>
                </ul>
            </div>
         </div>
      </div>
      <div className='col-xl-3 col-lg-6'>
         <h4>Company</h4>
         <ul>
            <li><a href=''>Freelance</a></li>
            <li><a href=''>Cansulting</a></li>
            <li><a href=''>Full time</a></li>
         </ul>
      </div>
      <div className='col-xl-3 col-lg-6'>
         <h4>Contact Us</h4>
         <FaFacebookF className='Icon'/>
         <GrTwitter className='Icon'/>
         <AiOutlineInstagram className='Icon'/>
         <AiFillLinkedin className='Icon'/>
         <AiFillYoutube className='Icon'/>
      </div>
    </div>
    </div>
  )
}
