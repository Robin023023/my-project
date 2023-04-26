import React from 'react'

import '../style/video.css'
import Video from './video'
import VideoData from './videoData'

export default function videoPlayer() {
  return (
    <div className='VideoPlayer'>
        <VideoData/>
        <Video/>
    </div>
  )
}
