import Nodata from '../../assets/noDataFound.svg'
type Props = {}

export default function NoDataFound({}: Props) {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center'}}>
        <p className='no-data-title'>No Favorites found</p>
        <img className='img-width' src={Nodata}/>
    </div>
  )
}