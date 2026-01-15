import React, {useState} from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import AdminLogin from './pages/admin/AdminLogin'
import Dashboard from './pages/admin/Dashboard'
import AllPosts from './pages/admin/AllPosts'
import NewPosts from './pages/admin/NewPosts'
import Published from './pages/admin/Published'
import Drafts from './pages/admin/Drafts'
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'


const App = () => {
  
  const {token} = useAppContext()

  const [activeItem, setActiveItem] = useState('All');

  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home activeItem={activeItem} setActiveItem={setActiveItem}/>} />
        <Route path='/blog/:blogId' element={<Blog activeItem={activeItem} setActiveItem={setActiveItem}/>} />
        <Route path='/admin/newpost' element={<NewPosts/>} />
        <Route path='/admin' element={token ? <Dashboard/> : <AdminLogin/>}>
          <Route index element={<AllPosts/>}/>
          <Route path='published' element={<Published/>}/>
          <Route path='drafts' element={<Drafts/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
