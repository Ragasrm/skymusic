import { ReactElement } from 'react';
import { connect } from 'react-redux'
import { Album, State } from '../../types/reducers'
import Albums from './Albums'

type Props = {
    albums: Album[],
  categories: string[],
  children:ReactElement,
  isLoading:boolean,
}

function TopAlbums(props: Props) {
    
  return (
   <Albums title='Top Albums' {...props}/>
  )
}


const mapStateToProps = (state: State) => {

    return {
      ...state,
      albums: state.albums,
      categories: state.categories,
    }
  }


export default connect(mapStateToProps, null)(TopAlbums)