import './VideoSidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatIcon from '@mui/icons-material/Chat'
import ShareIcon from '@mui/icons-material/Share'
import { useState } from 'react'

function VideoSidebar({ likes, messages, shares }) {
  const [isVideoLiked, setIsVideoLiked] = useState(false)
  const handleLike = () => {
    setIsVideoLiked(!isVideoLiked)
  }
  return (
    <div className='videoSidebar'>
      <div className='videoSidebar__options' onClick={handleLike}>
        {isVideoLiked ? (
          <FavoriteIcon fontSize='large' />
        ) : (
          <FavoriteBorderIcon fontSize='large' />
        )}
        <p>{isVideoLiked ? likes + 1 : likes}</p>
      </div>
      <div className='videoSidebar__options'>
        <ChatIcon fontSize='large' />
        <p>{messages}</p>
      </div>
      <div className='videoSidebar__options'>
        <ShareIcon fontSize='large' />
        <p>{shares}</p>
      </div>
    </div>
  )
}
export default VideoSidebar
