import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useState } from 'react';
import './AlbumCard.css'
type Props = {}

export default function AlbumCard(props: Props) {
    const [isFavorite, setisFavorite] = useState(false)

    let Favorite = isFavorite ? StarIcon : StarBorderOutlinedIcon

    
    return (
        <div className='album-card'>
            <div className='album-img-section' style={{backgroundImage:'url("https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/58/89/d4/5889d461-9c28-5926-11ae-f7ea7dca6382/074643340922.jpg/170x170bb.png")', backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>
            <div className='album-category-name'>Rock</div>
            </div>
            <div className='album-detail-section'>
                <div className='album-aritist'>
                    <p className='album-name'>Leave The Light On - EP <Favorite className='fav-icon' onClick={()=>setisFavorite(!isFavorite)}/></p>
                    <p className='album-artist'>Elvis Presley</p>
                </div>
                <div className='album-year-price'>
                    <p className='album-release'>2023</p>
                    <div style={{ display:'flex', alignItems:'center'}}>
                    <div className='album-price'> $2289.99</div>
                    </div>
                </div>
            </div>
        </div>
    )
}