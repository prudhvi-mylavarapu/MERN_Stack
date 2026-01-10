import React from 'react'
import { NavLink } from 'react-router-dom'

const filterPosts = () => {
    return (
        <div className='flex gap-5 mt-10'>
            {/* <button onClick={() => setActivePost('all')} className={`cursor-pointer border py-2 px-4 rounded-xl font-light ${activePost === 'all' ? 'bg-blue-700 text-white border-blue-700' : 'border-gray-400 text-gray-600'}`}>All Posts</button>
            <button onClick={() => setActivePost('published')} className={`cursor-pointer border py-2 px-4 rounded-xl font-light ${activePost === 'published' ? 'bg-blue-700 text-white border-blue-700' : 'border-gray-400 text-gray-600'}`}>Published</button>
            <button onClick={() => setActivePost('drafts')} className={`cursor-pointer border py-2 px-4 rounded-xl font-light ${activePost === 'drafts' ? 'bg-blue-700 text-white border-blue-700' : 'border-gray-400 text-gray-600'}`}>Drafts</button>
            <button className='cursor-pointer border-none bg-blue-700 ml-auto text-white py-2 px-5 rounded-xl hover:bg-blue-800'>+ New Post</button> */}

            <NavLink end={true} to='/admin' className={({isActive})=> `cursor-pointer border py-2 px-4 rounded-xl font-light ${isActive && "bg-blue-700 text-white border-blue-700"}`}>
                <p>All Posts</p>
            </NavLink>
            <NavLink to='/admin/published' className={({isActive})=> `cursor-pointer border py-2 px-4 rounded-xl font-light ${isActive && "bg-blue-700 text-white border-blue-700"}`}>
                <p>Published</p>
            </NavLink>
            <NavLink to='/admin/drafts' className={({isActive})=> `cursor-pointer border py-2 px-4 rounded-xl font-light ${isActive && "bg-blue-700 text-white border-blue-700"}`}>
                <p>Drafts</p>
            </NavLink>
            <NavLink to='/admin/newposts' className={({isActive})=> `cursor-pointer border-none bg-blue-700 ml-auto text-white py-2 px-5 rounded-xl hover:bg-blue-800 ${isActive && "bg-blue-700 text-white border-blue-700"}`}>
                <p>+ New Post</p>
            </NavLink>
        </div>
    )
}

export default filterPosts
