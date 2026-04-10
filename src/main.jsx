import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router/router.jsx'
import InstallProvider from './Context/InstallProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstallProvider>
      <RouterProvider router={router}></RouterProvider>
       <ToastContainer />
    </InstallProvider>
  </StrictMode>,
)
