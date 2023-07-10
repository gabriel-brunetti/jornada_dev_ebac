import { useRef, useState } from 'react'
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/Sidebar/VideoSidebar'
import './video.css'

function Video({ likes, messages, shares, name, description, music, url }) {
  const [isVideoBeingPlayed, setIsVideoBeingPlayed] = useState(true)
  const videoRef = useRef(null)

  const handleVideoClick = () => {
    if (isVideoBeingPlayed) {
      videoRef.current.muted = true
      videoRef.current.pause()
      setIsVideoBeingPlayed(false)
    } else {
      videoRef.current.muted = false
      videoRef.current.play()
      setIsVideoBeingPlayed(true)
    }
  }

  const handleVideoScroll = () => {
    if (isVideoBeingPlayed) {
      videoRef.current.muted = true
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      videoRef.current.load()
      setIsVideoBeingPlayed(false)
    }
  }

  return (
    <div className='video'>
      <video
        muted
        autoPlay
        className='video__player'
        ref={videoRef}
        onClick={handleVideoClick}
        onWheel={handleVideoScroll}
        onLoadStart={(e) => (e.target.volume = 0.05)}
        loop
        src={url}
      ></video>
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      <VideoFooter name={name} description={description} music={music} />
    </div>
  )
}
export default Video
