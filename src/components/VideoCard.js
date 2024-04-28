import React from 'react'
import "../Styles/VideoCard.css"


const playButton = <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "red" }} height="24px" viewBox="0 0 384 512" width="24px"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg>

const VideoCard = ({ image, name }) => {
    return (

        <div className='videoCard' style={{ backgroundImage: `url(${image})` }}>
            <a href="#/">{playButton}</a>

            <p>{name}</p>

        </div>

    )
}

export default VideoCard
