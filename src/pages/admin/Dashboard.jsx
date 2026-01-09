import React, { useState } from 'react'
import Navbar_Dashboard from '../../components/Navbar_Dashboard'
import CountCards from '../../components/countCards'

const Dashboard = () => {

  const [activePost, setActivePost] = useState(null);

  return (
    <>
      <Navbar_Dashboard/>
      <div className='mx-40 mt-10'>
        <div className='flex flex-col gap-1.5'>
          <h1 className='text-3xl font-medium'>Welcome, Admin User</h1>
          <p className='text-gray-500'>Manage and publish your blog content</p>
        </div>
        <CountCards />
        <div className='flex gap-5 mt-10'>
          <button onClick={() => setActivePost('all')} className={`border py-2 px-4 rounded-xl font-light ${activePost === 'all' ? 'bg-blue-700 text-white border-blue-700' : 'border-gray-400 text-gray-600'}`}>All Posts</button>
          <button onClick={() => setActivePost('published')} className={`border py-2 px-4 rounded-xl font-light ${activePost === 'published' ? 'bg-blue-700 text-white border-blue-700' : 'border-gray-400 text-gray-600'}`}>Published</button>
          <button onClick={() => setActivePost('drafts')} className={`border py-2 px-4 rounded-xl font-light ${activePost === 'drafts' ? 'bg-blue-700 text-white border-blue-700' : 'border-gray-400 text-gray-600'}`}>Drafts</button>
          <button className='border-none bg-blue-700 ml-auto text-white py-2 px-5 rounded-xl hover:bg-blue-800'>+ New Post</button>
        </div>
      </div>
    </>
  )
}

export default Dashboard
