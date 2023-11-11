import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import GalleryScreen from './pages/GalleryScreen.jsx'
import Homescreen from './components/Homescreen.jsx'
import NewsListScreen from './pages/NewsListScreen.jsx'
import NewsDetailScreen from './pages/NewsDetailScreen.jsx'
import EventsListScreen from './pages/EventsListScreen.jsx'
import EventsDetailScreen from './pages/EventsDetailScreen.jsx'
import AboutScreen from './pages/AboutScreen.jsx'
import MissionScreen from './pages/MissionScreen.jsx'
import VisionScreen from './pages/VisionScreen.jsx'
import Acitivites from './pages/Acitivites.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route index={true} element={<Homescreen/>}/>
    <Route path='/gallery' element={<GalleryScreen/>}/>
    <Route path='/news' element={<NewsListScreen/>}/>
    <Route path='/news/1' element={<NewsDetailScreen/>}/>
    <Route path='/events' element={<EventsListScreen/>}/>
    <Route path='/events/1' element={<EventsDetailScreen/>}/>
    <Route path='/about' element={<AboutScreen/>}/>
    <Route path='/mission' element={<MissionScreen/>}/>
    <Route path='/vision' element={<VisionScreen/>}/>
    <Route path='/activities' element={<Acitivites/>}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
