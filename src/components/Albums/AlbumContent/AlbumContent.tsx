import {Grid } from '@mui/material'
import AlbumCard from '../AlbumCard/AlbumCard'
import './AlbumContent.css'

type Props = {}

function AlbumContent({}: Props) {
  return (
    <div className='album-content'>


          <div className='album-card-container'>
              {Array.from(Array(4)).map((_, index) => (

                  <AlbumCard />

              ))}
          </div>
    </div>  
  )
}

export default AlbumContent