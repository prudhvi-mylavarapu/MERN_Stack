import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = ({activeItem, setActiveItem}) => {
    const navigate = useNavigate();

    const handleClick = (item) => {
        setActiveItem(item);
        navigate('/');
    }

    return (
        <nav className='sticky top-0 p-4 bg-white z-50 shadow-sm'>
            <ul className='flex items-center gap-6 '>
                <li onClick={() => navigate('/')} className='flex cursor-pointer'>
                    <img className='w-7 cursor-pointer' src={logo} alt="logo" />
                    <div className='text-3xl'>PostPilot</div>
                </li>
                <li onClick={() => handleClick('All')}
                    className={`relative cursor-pointer hover:text-blue-500 ${activeItem === 'All' ? 'text-blue-500 font-bold ' : ''}`}
                >All {activeItem === 'All' && (<motion.div layoutId='underline' transition={{ type: 'spring', stiffness: 500, damping: 30 }} className='absolute -bottom-1 left-0 h-0.5 bg-sky-500 w-full' />)}
                </li>
                <li onClick={() => handleClick('Technology')}
                    className={`relative cursor-pointer hover:text-blue-500 ${activeItem === 'Technology' ? 'text-blue-500 font-bold' : ''}`}
                >Technology {activeItem === 'Technology' && (<motion.div layoutId='underline' transition={{ type: 'spring', stiffness: 500, damping: 30 }} className='absolute -bottom-1 left-0 h-0.5 bg-sky-500 w-full' />)}
                </li>
                <li onClick={() => handleClick('Design')}
                    className={`relative cursor-pointer hover:text-blue-500 ${activeItem === 'Design' ? 'text-blue-500 font-bold' : ''}`}
                >Design {activeItem === 'Design' && (<motion.div layoutId='underline' transition={{ type: 'spring', stiffness: 500, damping: 30 }} className='absolute -bottom-1 left-0 h-0.5 bg-sky-500 w-full' />)}
                </li>
                <li onClick={() => handleClick('LifeStyle')}
                    className={`relative cursor-pointer hover:text-blue-500 ${activeItem === 'LifeStyle' ? 'text-blue-500 font-bold' : ''}`}
                >LifeStyle {activeItem === 'LifeStyle' && (<motion.div layoutId='underline' transition={{ type: 'spring', stiffness: 500, damping: 30 }} className='absolute -bottom-1 left-0 h-0.5 bg-sky-500 w-full' />)}</li>
                <li onClick={() => handleClick('Business')}
                    className={`relative cursor-pointer hover:text-blue-500 ${activeItem === 'Business' ? 'text-blue-500 font-bold' : ''}`}
                >Business {activeItem === 'Business' && (<motion.div layoutId='underline' transition={{ type: 'spring', stiffness: 500, damping: 30 }} className='absolute -bottom-1 left-0 h-0.5 bg-sky-500 w-full' />)}</li>
                <li className='flex items-center gap-4 ml-auto'>
                    <div className='flex items-center border border-black rounded-2xl h-10  p-3 gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 sm:w-6 sm:h-6 shrink-0' fill="#CCCCCC" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
                        <input className='outline-none' type="text" name="Search" placeholder='Search Posts...' id="" />
                    </div>
                    <button onClick={() => navigate('/admin')} className='rounded-2xl cursor-pointer bg-sky-500 text-white p-2'>Admin Login</button>
                </li>
            </ul>


        </nav>
    )
}

export default Navbar
