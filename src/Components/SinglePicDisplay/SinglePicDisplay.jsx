 import { Link } from 'react-router-dom'
import './SinglePicDisplay.css'
function SinglePicDisplay({ image,id }) {
  return (
  
    <div className="image-wrapper">
         <Link to={`/photos/${id}`}>
         <img src={image} />
        </Link>
    </div>
   
  )
}

export default SinglePicDisplay