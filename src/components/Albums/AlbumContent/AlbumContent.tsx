import { Album } from '../../../types/reducers'
import AlbumCard from '../AlbumCard/AlbumCard';
import { motion } from "framer-motion"

import './AlbumContent.css'

type Props = {
  albums:Album[],
  viewAll:boolean,
}

function AlbumContent(props: Props) {
  const { albums, viewAll }  = props
  
  return (
    <div className='album-content'>
          <div className='album-card-container'>
              {albums.slice(0,viewAll ? albums.length : 8).map((album, index) => (
                <motion.div 
                key={album.id}
                initial={{
                  translateY:100*(index+1),
                  opacity:0
              }}
              transition={{duration:0.3, delay:(index*0.3)}}
              animate={{ opacity:1, translateY:0}}
              >
                <motion.div whileHover={{
                scale:1.08
              }}>
                  <AlbumCard album={album} key={album.id} />
                  </motion.div>
                  </motion.div>
              ))}
          </div>
    </div>  
  )
}

export default AlbumContent