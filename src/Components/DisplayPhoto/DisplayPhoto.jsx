import { useEffect, useState } from 'react'
import axios from 'axios';
import SinglePicDisplay from '../SinglePicDisplay/SinglePicDisplay';
import './DisplayPhoto.css'
function DisplayPhoto() {
    const [photos,setPhotos] = useState([]);
    const [ApiUrl,setApiUrl] = useState("https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20")
    const [nextUrl,setNextUrl] = useState('')
    const [prevUrl,setPrevUrl] = useState('');

    const [isLoading,setIsloading] = useState(true);
    const  nexturl = (offset,ApiUrl) => {
       offset+=20;
       ApiUrl = `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`;
       return ApiUrl;
    }
    const prevurl = (offset,ApiUrl)=>{
        if(offset === 0){
            return ApiUrl;
        }
        offset-=20;
        ApiUrl = `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`;
        return ApiUrl;
    }
      
    async function download(){
        setIsloading(true);
      const  response = await axios.get(ApiUrl);
      let allPhotos = await response.data.photos;
        let offset = response.data.offset;
        const setnext = nexturl(offset,ApiUrl);
        const setprev = prevurl(offset,ApiUrl);
        setNextUrl(setnext);
        setPrevUrl(setprev);
       

      let pics = allPhotos.map((pic)=>{
        return {
            id:pic.id,
            image:pic.url ? pic.url :"no photo",
            description:pic.description,
            title:pic.title
        }
      })
      setPhotos(pics)
      setIsloading(false)
    }
    useEffect(()=>{
        download();
    },[ApiUrl])

  return (
    <div className='gallery-wrapper'>
        <h1 className='heading'>Gallery</h1>
        <div className='gallery-image-wrapper'>
            {isLoading?"loading..":
            photos.map((pic)=> <SinglePicDisplay  key={pic.id} id={pic.id} image={pic.image}/>)}
        </div>
        <div className='buttons'>
             
            <button onClick={() => setApiUrl(prevUrl)}>prev</button>
            <button onClick={()=> setApiUrl(nextUrl)}>next</button>
        </div>
    </div>
  )
}

export default DisplayPhoto