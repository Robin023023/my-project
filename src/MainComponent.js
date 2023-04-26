import React from 'react'
import Body from './Body/body'
import MainFooter from './Footer/MainFooter'
import Header from './Header/Header'

export default function MainComponent() {
  return (
    <div className='container'>
      <Header/>
      <Body/>
      <MainFooter/>
    </div>
  )
}
