import React,{useState} from 'react'
import './Navigation.css'

export default function Navigation() {
  return (
    <div>
    <nav className="navbar navbar-expand-xl navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img className='Logo-img' src='assets/img/logo0.png'/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <a className="nav-link active ps-4 ps-md-3" href="#">Student</a>
          <a className="nav-link px-4 px-md-3" href="#Learning">Learning</a>
          <a className="nav-link px-4 px-md-3" href="#Freelance">Freelance</a>
          <a className="nav-link px-4 px-md-3" href="#Consulting">Consulting</a>
          <a className="nav-link px-4 px-md-3" href="#Freelance">Freelance</a>
          <a className="nav-link px-4 px-md-3" href="#Hiring">Hiring</a>
         
          <span className='button'>
          <a className="login px-4 px-md-3" href="#">Login</a>
          <a className='sign-up d-block d-md-inline mt-3 mt-md-0'><img src='assets/img/user.png'/>Sign Up</a>
          </span>
        </div>
        </div>
    </div>
  </nav>
  <hr/>
    </div>
  )
}
