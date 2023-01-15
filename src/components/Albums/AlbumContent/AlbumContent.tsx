import { Album } from '../../../types/reducers'
import AlbumCard from '../AlbumCard/AlbumCard'
import './AlbumContent.css'

type Props = {
  albums:Album[],
  viewAll:boolean
}

function AlbumContent(props: Props) {
  const { albums, viewAll }  = props
  
  return (
    <div className='album-content'>
          <div className='album-card-container'>
              {albums.slice(0,viewAll ? albums.length : 4).map((album) => (
                  <AlbumCard album={album} key={album.id} />
              ))}
          </div>
    </div>  
  )
}

export default AlbumContent