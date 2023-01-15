import Albums from "../Albums/Albums";
import './Content.css'

type Props = {}

function Content(props: Props) {
  return (
    <div className="main">
        <Albums/>
    </div>
    
  )
}

export default Content