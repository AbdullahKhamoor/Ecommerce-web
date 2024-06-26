import React from 'react'
import VideoCard from './VideoCard'
import "../Styles/videos.css"

const Videos = ({Videos}) => {
  return (
    <div className='videos'>
      {
        Videos.map((item,index)=>(
            <VideoCard index = {index} key = {item.image} image = {item.image} name = {item.name} />
        ))
      }
    </div>
  )
}

export default Videos
