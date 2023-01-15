import AlbumContent from './AlbumContent/AlbumContent'
import AlbumHeader from './AlbumHeader/AlbumHeader'
import './albums.css'
type Props = {}

export default function Section(props: Props) {
  return (
    <div className="section">
      <AlbumHeader/>
      <AlbumContent/>
    
    </div>
  )
}