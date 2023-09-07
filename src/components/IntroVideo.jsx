import React, { useRef } from 'react'
import PropTypes from "prop-types"
import introVideo from "../assets/Videos/test-intro.mp4"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const IntroVideo = ({videoPlaying, setVideoPlaying}) => {
  const videoRef = useRef();

  return (
    <div className='video-container'>
        <video src={introVideo} ref={videoRef}></video>
        {console.log(videoRef.current)}

        <div className="video-container__video-action-toggler" onClick={() => {
          setVideoPlaying(prev => !prev)
          !videoRef.current.play && !videoPlaying ? videoRef.current.play() : videoRef.current.pause()
        }
        } style={videoPlaying ? {opacity : 0} : null}>
            <FontAwesomeIcon icon={faPlay} style={{fontSize: "1.3rem"}}/>
        </div>
        {console.log(videoPlaying)}
    </div>
  )
}

IntroVideo.propTypes = {
  videoPlaying: PropTypes.bool.isRequired,
  setVideoPlaying: PropTypes.func.isRequired,
}

export default IntroVideo