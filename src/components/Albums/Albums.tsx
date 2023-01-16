import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Album, State } from '../../types/reducers';
import AlbumContent from './AlbumContent/AlbumContent';
import AlbumHeader from './AlbumHeader/AlbumHeader';
import './albums.css'
type Props = {
  albums: Album[],
  categories: string[]
};
function Albums(props: Props) {

  const { albums, categories } = props
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

 

  // filter handler
  //set data in albumData

  const onFilter = (categories:string[]) => {
    // console.clear();
    setLoading(true)


    let filteredAlbums = albums.filter((album)=>categories.includes(album.category))

    if(filteredAlbums) {
      setAlbumData(filteredAlbums);
      setLoading(false)
    }
   

  }
  
  return (
    <div className="section">
      <AlbumHeader categories={categories || []} toggleViewAll={toggleViewAll} viewAll={viewAll} onFilter={onFilter} />
      
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

const mapStateToProps = (state: State) => {

  return {
    ...state,
    albums: state.albums,
    categories: state.categories,
  }
}

export default connect(mapStateToProps, null)(Albums)