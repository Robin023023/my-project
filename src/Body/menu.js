import React, { Component } from 'react'
import SCALE from '../data/scale'
import SKILL from '../data/skill'
import Scale from './scaleOption/Scale'
import ScaleComment from './scaleOption/ScaleComment'
import TrusTedSlider from './TrustedSlider.js/TrusTedSlider'
import VideoPlayer from './video/videoPlayer'
import MainFlat from './flat/mainFlat'
import MainGigs from './gig/MainGigs'
import Student from '../data/student'
import StudentComment from './students/studentComment'
import StudentHeading from './students/studentHeading'
import MainHiring from './hiring/mainHiring'
import CANDIDATE from '../data/CANDIDATE'
import Candidates from './Candidates/candidates'
import CandidatesHeading from './Candidates/candidatesHeading'
import Button from './Candidates/button'
import MainConsultion from './Consulting/MainConsultion'
import Courses from '../data/Courses'
import CourseItem from './Courses/CourseItem'
import CourseHeading from './Courses/CourseHeading'
import Button2 from './Courses/button'
import MainTestiMonials from './TestiMonials/MainTestiMonials'
import Slider from './MainSlider/Slider'
import Filter from './filterOption/Filter'
import TabComment from './filterOption/TabComment'



export default class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
           scale:SCALE,
           students:Student,
           candidate:CANDIDATE,
           courses:Courses,
        }
      }

  render() {

    const menu=this.state.scale.map((item,id)=>{
        return <div className='col-lg-4 py-4' key={item.id}>
          <Scale item={item}/>
        </div>
    })


    const students=this.state.students.map((items)=>{
      return <div className='col-lg-3 col-md-6 p-4'>
        <StudentComment item={items} key={items.id}/>
      </div>
    })
    
    const candidate=this.state.candidate.map((items)=>{
      return <div className='col-md-3 mb-3 md-md-0'>
        <Candidates items={items}/>
      </div>
    })

    const courses=this.state.courses.map((items)=>{
      return <div className='col-xl-3 col-md-6'>
          <CourseItem item={items} key={items.id}/>
      </div>
    })

    return (
      <div>
        <Slider/>
       <ScaleComment/>
       <div className='row'>
       {menu}
     </div>
      <TrusTedSlider/>



      <TabComment/>


      
      <VideoPlayer/>
      <MainGigs/>
      <MainFlat/>
      <StudentHeading/>
      <div className='row'>
      {students}
      </div>
      <MainHiring/>
      
      <CandidatesHeading/>
      <div className='row'>
      {candidate}
      </div>
      <Button/>
      <MainConsultion/>
    
    
      <CourseHeading/>
      <div className='row'>
        {courses}
      </div>
      <Button2/>

      <MainTestiMonials/>
      </div>
    )
  }
}
