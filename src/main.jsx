import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import GalleryScreen from './pages/GalleryScreen.jsx'
import Homescreen from './components/Homescreen.jsx'
import NewsListScreen from './pages/NewsListScreen.jsx'
import NewsDetailScreen from './pages/NewsDetailScreen.jsx'
// import './index.css'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route index={true} element={<Homescreen/>}/>
    <Route path='/gallery' element={<GalleryScreen/>}/>
    <Route path='/news' element={<NewsListScreen/>}/>
    <Route path='/news/1' element={<NewsDetailScreen/>}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
