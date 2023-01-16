import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { Album } from '../../types/reducers';
import AlbumContent from './AlbumContent/AlbumContent';
import AlbumHeader from './AlbumHeader/AlbumHeader';
import './albums.css'
type Props = {
  albums: Album[],
  categories: string[];
  title:string
};
export default function Albums(props: Props) {

  const { albums, categories, title } = props
  const [viewAll, setViewAll] = useState(false);
  const [albumData, setAlbumData] = useState<Album[]>([])

  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    if(albums){
      setAlbumData(albums)
      setLoading(false)
    }
    
  },[albums]);

  const toggleViewAll = () => {
    setViewAll(!viewAll)
  }


  const onFilter = (categories:string[]) => {
    setLoading(true)
    let filteredAlbums = albums.filter((album)=>categories.includes(album.category))
    if(filteredAlbums.length > 0) {
      setAlbumData(filteredAlbums);
      setLoading(false)
    } else {
      setAlbumData(albums);
      setLoading(false)
    }
  }
  
  return (
    <div className="section">
      <AlbumHeader categories={categories || []} toggleViewAll={toggleViewAll} viewAll={viewAll} onFilter={onFilter} title={title}  />
      
      {
        loading 
        ?
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'0 30px', height:600}}>
        <CircularProgress />
      </div>
        :
       
        <AlbumContent albums={albumData || []} viewAll={viewAll} />
      }

    </div>
  )
};



 