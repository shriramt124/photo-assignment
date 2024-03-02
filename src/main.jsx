import React from 'react'
import ReactDOM from 'react-dom/client'
 
import CustomRoutes from "./routes/CustomRoutes"
import { BrowserRouter } from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CustomRoutes />
  </BrowserRouter>
)
