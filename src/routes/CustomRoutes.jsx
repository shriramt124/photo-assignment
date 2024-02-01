 import React from 'react'
 import { Routes ,Route} from 'react-router-dom'
import DisplayPhoto from '../Components/DisplayPhoto/DisplayPhoto'
import PhotoDetails from '../Components/PhotoDetails/PhotoDetails'
 function CustomRoutes() {
   return (
     <Routes>
        <Route path='/' element={ <DisplayPhoto  />}/>
        <Route path='/photos/:id' element={<PhotoDetails />}/>
     </Routes>
   )
 }
 
 export default CustomRoutes