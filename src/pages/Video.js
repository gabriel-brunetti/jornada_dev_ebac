import { useRef, useState } from 'react'
import VideoFooter from './components/footer/VideoFooter'
import './video.css'

function Video() {
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
        src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z'
      ></video>
      {/* sidebar */}
      <VideoFooter />
    </div>
  )
}
export default Video
