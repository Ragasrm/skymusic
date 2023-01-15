import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Album } from '../../../types/reducers';
import './AlbumCard.css'
type Props = {
    album:Album
}

export default function AlbumCard(props: Props) {
    const {album} = props
    const {img,category, isFavorite, name, price, year, artist } = album
    // const [isFavorite, setisFavorite] = useState(false)

    let Favorite = isFavorite ? StarIcon : StarBorderOutlinedIcon

    
    return (
        <div className='album-card'>
            <div className='album-img-section' style={{backgroundImage:`url(${img})`, backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>
            <div className='album-category-name'>{category}</div>
            </div>
            <div className='album-detail-section'>
                <div className='album-aritist'>
                    <p className='album-name'><span title={name} style={{width:200, overflow:'hidden', whiteSpace:'nowrap',  textOverflow:'ellipsis'}}>{name}</span> <Favorite className='fav-icon'
                     //onClick={()=>setisFavorite(!isFavorite)}
                     /></p>
                    <p title={artist.name} className='album-artist'>{artist.name}</p>
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