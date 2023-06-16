import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote'

function VideoFooter() {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@gabriel.brunetti</h3>
        <p>Descrição do vídeo</p>
        <div className='videoFooter__musicInfo'>
          <MusicNoteIcon className='videoFooter__musicInfo__icon' />
          <div className='videoFooter__musicInfo__text'>
            <p>Titulo da Música</p>
          </div>
        </div>
      </div>
      <img
        className='videoFooter__record'
        src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z'
        alt='Vinil girando'
      />
    </div>
  )
}
export default VideoFooter
