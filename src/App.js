import './App.css'
import Video from './pages/Video'
import db from './config/firebase'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore/lite'

function App() {
  const [video, setVideos] = useState([])
  async function getVideos() {
    let videoData = []
    const videosCollection = collection(db, 'videos')
    const videosSnapshot = await getDocs(videosCollection)
    videosSnapshot.docs.map((doc) =>
      videoData.push({
        id: doc.id,
        likes: doc.data().likes,
        messages: doc.data().messages,
        shares: doc.data().shares,
        name: doc.data().name,
        description: doc.data().description,
        music: doc.data().music,
        url: doc.data().url,
      })
    )
    setVideos(videoData)
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <div className='App'>
      <div className='app__videos'>
        {video.map((item) => {
          return (
            <Video
              key={item.id}
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
