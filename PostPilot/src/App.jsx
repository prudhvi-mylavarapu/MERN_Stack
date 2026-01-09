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


const App = () => {
  
  const [activeItem, setActiveItem] = useState('All');

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home activeItem={activeItem} setActiveItem={setActiveItem}/>} />
        <Route path='/blog/:slug' element={<Blog activeItem={activeItem} setActiveItem={setActiveItem}/>} />
        <Route path='/admin' element={true ? <Dashboard/> : <AdminLogin/>}>
          <Route index element={<AllPosts/>}/>
          <Route path='newposts' element={<NewPosts/>}/>
          <Route path='published' element={<Published/>}/>
          <Route path='Drafts' element={<Drafts/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
