import { CircularProgress } from '@mui/material';
import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { Album } from '../../types/reducers';
import AlbumContent from './AlbumContent/AlbumContent';
import AlbumHeader from './AlbumHeader/AlbumHeader';
import './albums.css'
type Props = PropsWithChildren & {
  albums: Album[],
  categories: string[];
  title:string,
  isLoading:boolean,
};
export default function Albums(props: Props) {

  const { albums, categories, title, children, isLoading } = props;
  console.log("isLoading", isLoading)

  const [viewAll, setViewAll] = useState(false);
  const [albumData, setAlbumData] = useState<Album[]>([])


  useEffect(()=> {
    if(albums.length > 0){
      setAlbumData(albums)

    };

    
  },[albums]);

  const toggleViewAll = () => {
    setViewAll(!viewAll)
  }


  const onFilter = (categories:string[]) => {
    let filteredAlbums = albums.filter((album)=>categories.includes(album.category))
    if(filteredAlbums.length > 0) {
      setAlbumData(filteredAlbums);
    } else {
      setAlbumData(albums);
    }
  }
  
  return (
    <div className="section">
      <AlbumHeader categories={categories || []} toggleViewAll={toggleViewAll} viewAll={viewAll} onFilter={onFilter} title={title}  />
      
      {
        isLoading 
        ?
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'0 30px', height:600}}>
        <CircularProgress />
      </div>
        :
        
        albumData.length > 0 ?
          <AlbumContent albums={albumData || []} viewAll={viewAll}  />
          :
          children
      }

    </div>
  )
};



 