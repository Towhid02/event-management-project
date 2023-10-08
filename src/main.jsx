/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import AuthProvider from './Components/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
     </AuthProvider>
  </React.StrictMode>,
)
