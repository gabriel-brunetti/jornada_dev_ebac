import { useRef, useState } from 'react'
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/Sidebar/VideoSidebar'
import './video.css'

function Video({ likes, messages, shares, name, description, music, url }) {
  const videoRef = useRef(null)
  const [isVideoBeingPlayed, setIsVideoBeingPlayed] = useState(false)
  const handleVideoClick = () => {
    if (isVideoBeingPlayed) {
      videoRef.current.pause()
      setIsVideoBeingPlayed(false)
    } else {
      videoRef.current.play()
      setIsVideoBeingPlayed(true)
    }
  }

  return (
    <div className='video'>
      <video
        className='video__player'
        ref={videoRef}
        onClick={handleVideoClick}
        loop
        src={url}
      ></video>
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      <VideoFooter name={name} description={description} music={music} />
    </div>
  )
}
export default Video
