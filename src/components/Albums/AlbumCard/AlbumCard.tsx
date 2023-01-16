import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useDispatch } from 'react-redux';
import { ActionType, Album } from '../../../types/reducers';
import './AlbumCard.css'
type Props = {
    album:Album
}

export default function AlbumCard(props: Props) {

    const dispatch = useDispatch()
    const {album} = props
    const {img,category, isFavorite, name, price, year, artist, albumUrl } = album

    let Favorite = isFavorite ? StarIcon : StarBorderOutlinedIcon


    const handleSetFavorite = () => {
        album.isFavorite = !isFavorite

        dispatch({ type: ActionType.UPDATE_ALBUM, payload: album });
        // delete album.isFavorite
        if(album.isFavorite) {
            dispatch({ type: ActionType.ADD_TO_FAVORITES, payload: album})
        } else {
            dispatch({ type: ActionType.REMOVE_FROM_FAVORITES, payload: album})

        }

    }

    
    return (
        <div className='album-card'>
            <div className='album-img-section' onClick={()=> albumUrl && window.open(albumUrl,'_blank')} style={{backgroundImage:`url(${img})`, backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>
            <div className='album-category-name'>{category}</div>
            </div>
            <div className='album-detail-section'>
                <div className='album-aritist'>
                    <p className='album-name'><span data-testid="album-name" title={name} style={{width:200, overflow:'hidden', whiteSpace:'nowrap',  textOverflow:'ellipsis'}}>{name}</span> 
                    <Favorite className='fav-icon' data-testid="fav-icon"
                     onClick={()=>handleSetFavorite()}
                     />
                     </p>
                     {
                        ! (artist?.name)
                        ? null
                        : (
                            <p data-testid="artist-name" onClick={()=> artist?.url && window.open(artist.url,'_blank')} title={artist.name} className='album-artist'>{artist.name}</p>
                        )
                     }
                </div>
                <div className='album-year-price'>
                    <p className='album-release'>{year}</p>
                    <div style={{ display:'flex', alignItems:'center'}}>
                    <div className='album-price'> {price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}