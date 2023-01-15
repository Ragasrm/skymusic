import { Album } from '../../../types/reducers'
import AlbumCard from '../AlbumCard/AlbumCard'
import './AlbumContent.css'

type Props = {
  albums:Album[]
}

function AlbumContent(props: Props) {
  const { albums }  = props
  
  return (
    <div className='album-content'>


          <div className='album-card-container'>
              {albums.slice(0,4).map((album, index) => (
                  <AlbumCard album={album} />
              ))}
          </div>
    </div>  
  )
}

export default AlbumContent