import { connect } from "react-redux"
import { Album, State } from "../../types/reducers"
import Albums from "./Albums";

type Props = {
    albums: Album[],
  categories: string[];
};

function Favorites(props: Props) {

  return (
    <Albums title='Your Favorites' {...props}/>

  )
};


const mapStateToProps = (state: State) => {

    return {
      ...state,
      albums: state.favorites,
      categories: state.categories,
    }
  }


export default connect(mapStateToProps, null)(Favorites)