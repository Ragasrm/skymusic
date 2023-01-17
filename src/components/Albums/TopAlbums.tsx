import { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { Album, State } from '../../types/reducers';
import Albums from './Albums';

type TopAlbumsProps = PropsWithChildren & {
  albums: Album[],
  categories: string[],
  isLoading: boolean,
}

function TopAlbums(props: TopAlbumsProps) {

  return (
    <>
      <Albums title='Top Albums' {...props} />
    </>
  );
};

const mapStateToProps = (state: State) => {
  return {
    ...state,
    albums: state.albums,
    categories: state.categories,
  };
};

export default connect(mapStateToProps, null)(TopAlbums);
