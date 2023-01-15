import { connect } from 'react-redux';
import { Album, State } from '../../types/reducers';
import AlbumContent from './AlbumContent/AlbumContent';
import AlbumHeader from './AlbumHeader/AlbumHeader';
import './albums.css'
type Props = {
  albums: Album[]
};
function Albums(props: Props) {
  const { albums } = props
  return (
    <div className="section">
      <AlbumHeader />
      <AlbumContent albums={albums} />

    </div>
  )
};

const mapStateToProps = (state: State) => {

  return {
    ...state
  }
}

export default connect(mapStateToProps, null)(Albums)