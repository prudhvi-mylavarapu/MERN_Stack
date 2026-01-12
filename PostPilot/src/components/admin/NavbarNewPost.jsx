import React from 'react'
import arrow from '../../assets/arrowBack.svg'
import save from '../../assets/save.svg'
import { Navigate, useNavigate } from 'react-router-dom'

const NavbarNewPost = () => {

    const navigate = useNavigate()

    const handleClickBack = () => { 
        navigate('/admin')
    }


  return (
    <nav className='flex px-60 py-3 border-b border-gray-300 sticky top-0 z-50 bg-white'>
      <div onClick={handleClickBack} className='flex items-center gap-2 cursor-pointer '>
        <img src={arrow} alt="" />
        <p className='text-lg text-black/60 hover:text-black/80'>Back to dashboard</p>
      </div>
      <div className='flex items-center gap-2 p-2 ml-auto border-none bg-blue-600 text-white rounded-xl px-7 cursor-pointer hover:bg-blue-700'>
        <img src={save} alt="" />
        <p>Save Post</p>
      </div>
    </nav>
  )
}

export default NavbarNewPost
