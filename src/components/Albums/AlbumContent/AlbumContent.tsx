import { motion } from "framer-motion"
import { Album } from '../../../types/reducers';
import AlbumCard from '../AlbumCard/AlbumCard';
import './AlbumContent.css';

type AlbumContentProps = {
  albums: Album[],
  viewAll: boolean,
};

function AlbumContent(props: AlbumContentProps) {
  const { albums, viewAll } = props;

 const viewCardCount = 8;
 const delayDuration = 0.3

  return (
    <div className='album-content'>
      <div className='album-card-container'>
        {albums.slice(0, viewAll ? albums.length : viewCardCount).map((album, index) => (
          <motion.div
            key={album.id}
            initial={{
              translateY: 100 * (index + 1),
              opacity: 0
            }}
            transition={{ duration: delayDuration, delay: (index * delayDuration) }}
            animate={{ opacity: 1, translateY: 0 }}
          >
            <motion.div whileHover={{
              scale: 1.08
            }}>
              <AlbumCard album={album} key={album.id} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AlbumContent;
