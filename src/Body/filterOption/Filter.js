import React,{useState} from 'react'

import '../style/filterSkillHeading.css'

import skill from "../../data/skill";

export default function Filter() {
    const [items,setItems]=useState(skill);

    const filterItem=(categItem)=>{
      const updatedItems=skill.filter((curyElem)=>{
        return curyElem.category===categItem
      })
      setItems (updatedItems)
    }

  return (
    <div className='FilterSkillHeading'>

<div className='text-center container mt-5'>
          <button onClick={()=>setItems(skill)}>Top Skills</button>
          <button onClick={()=>filterItem('Trending skill')} >Trending skill</button>
          <button onClick={()=>filterItem('Top skill in US')} >Top skills in Us</button>
          <button onClick={()=>filterItem('Project Catalog')} >Project catalog</button>
        </div>

        <hr className='hr'/>

        <div className='row'>
        {
         items.map((elo)=>{
           return <div className='col-lg-4 col-md-6 mb-4'>
            <div className='box border p-2'>
             <img className='img-fluid' src={elo.image}/>
             
            <div className='text'>
              <p>{elo.name}</p>
            </div>    
           </div>
          </div>
         })
       }
        </div>

    </div>
  )
}
