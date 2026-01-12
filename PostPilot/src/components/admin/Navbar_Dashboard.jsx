import React from 'react'
import logo from '../../assets/logo.svg'
import home from '../../assets/home.svg'
import logout from '../../assets/logout.svg'
import { useNavigate } from 'react-router-dom'

const Navbar_Dashboard = () => {

    const navigate = useNavigate()

  return (
    <nav className='mt-2 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-3 border-b shadow-gray-300 border-gray-300 sticky top-0 z-50 bg-white'>
      <ul className='flex gap-4 sm:gap-6 md:gap-10 flex-wrap'>
        <li onClick={()=>{navigate(`/admin`)}} className='flex items-center gap-2'>
            <img className='w-7 cursor-pointer' src={logo} alt="logo" />
            <p className='text-2xl text-black/70'>Content Dashboard</p>
        </li>
        <li onClick={()=>{navigate(`/`)}} className='flex items-center ml-auto gap-1.5 cursor-pointer'>
            <img className='w-5 ' src={home} alt="home" />
            <p className='text-black/70'>View Site</p>
        </li>
        <li onClick={()=>{navigate(`/`)}} className='flex items-center gap-1.5 cursor-pointer'>
            <img className='w-5 ' src={logout} alt="logout" />
            <p className='text-black/70'>Logout</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar_Dashboard
