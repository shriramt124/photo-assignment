import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CustomRoutes from './routes/customRoutes.jsx'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CustomRoutes />
  </BrowserRouter>
)
