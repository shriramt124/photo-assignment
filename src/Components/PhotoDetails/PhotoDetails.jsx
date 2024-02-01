import { useEffect, useState } from 'react'
import { useParams ,Link} from 'react-router-dom'
import axios from 'axios'
import "./PhotoDetails.css"
function PhotoDetails() {
    const {id} = useParams()
    const [pic,setPic] = useState({});
     const apiUrl = `https://api.slingacademy.com/v1/sample-data/photos/${id}`
     
    async function downloadPhoto(){
        const response = await axios.get(apiUrl)
        const gotPic = response.data.photo;
        console.log(gotPic)
        console.log(response.data);
        setPic({
          image:gotPic.url,
          title:gotPic.title,
          description:gotPic.description
        })
    }

 useEffect(()=>{
     downloadPhoto();
 },[])

  return (
   <> 
     
    <div className='heading'>
        <Link to = {"/"}>
        <h1>Gallery</h1>
        </Link>
    </div>
   
    <div className='pic-details-wrapper'>
      <div className='image'>
        <img  src={pic.image}/>
      </div>
      <div className='text-side'>
        <h2 className='title'> {pic.title}</h2>
        <h4 className='discription'>{pic.description}</h4>
      </div>
    </div>
   
    </>
  )
}

export default PhotoDetails