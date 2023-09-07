import React from 'react'
import introVideo from "../assets/Videos/test-intro.mp4"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const IntroVideo = ({videoPlaying, setVideoPlaying}) => {
  return (
    <div className='video-container'>
        <video src={introVideo} controls></video>
        <div className="video-container__video-action-toggler">
            <FontAwesomeIcon icon={faPlay} style={{fontSize: "1.3rem"}}/>
        </div>
    </div>
  )
}

export default IntroVideo