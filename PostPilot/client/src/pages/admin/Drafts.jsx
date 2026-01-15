import React from 'react'
import { useNavigate } from 'react-router-dom'
import files from '../../assets/files.svg'

const Drafts = () => {
  const navigate = useNavigate()

  const handleCreatePost = () => {
    navigate('/admin/newpost')
  }

  return (
    <div className='mt-10 border border-gray-200 shadow rounded-xl flex flex-col gap-7 items-center justify-center p-7'>
      <img className='border-none bg-gray-200 rounded-3xl p-2' src={files} alt="file" />
      <div className='flex flex-col items-center gap-2'>
        <p className='font-semibold text-xl'>No Posts found</p>
        <p className='text-gray-500'>Create your first post to get started</p>
      </div>
      <button onClick={handleCreatePost} className='cursor-pointer border-none bg-blue-700 text-white py-2 px-5 rounded-xl hover:bg-blue-800'>+ Create Post</button>
    </div>
  )
}

export default Drafts
