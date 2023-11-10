import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Gallery from './pages/Gallery.jsx'
import Homescreen from './components/Homescreen.jsx'
// import './index.css'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route index={true} element={<Homescreen/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
