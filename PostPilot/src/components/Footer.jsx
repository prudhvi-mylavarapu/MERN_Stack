import React from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom';


const Footer = ({activeItem, setActiveItem}) => {
    const navigate = useNavigate;

    const handleClick = (item) => {
        setActiveItem(item);
        navigate('/');
    }
    return (
        <div className='bg-blue-950 text-white/80 pb-10'>
            <div className='flex flex-col sm:flex-row justify-between items-start gap-12 p-10 w-full max-w-7xl mx-auto'>
                <div className='w-full sm:w-1/3'>
                    <div className='flex items-center gap-3'>
                        <img className='w-7 h-7 object-contain cursor-pointer' src={logo} alt="logo" />
                        <h4 className='text-2xl font-bold'>Post Pilot</h4>
                    </div>
                    <p className='mt-3 text-white/60'>A modern content management system for<br/>bloggers and content creators.</p>
                </div>

                <ul className='w-full sm:w-1/3 list-none space-y-2'>
                    <li><h4 className='text-lg font-bold'>Categories</h4></li>
                    <li onClick={()=> handleClick('Technology')} className='text-white/60 cursor-pointer hover:font-bold '>Technology</li>
                    <li onClick={()=> handleClick('Design')} className='text-white/60 cursor-pointer hover:font-bold'>Design</li>
                    <li onClick={()=> handleClick('LifeStyle')} className='text-white/60 cursor-pointer hover:font-bold'>Lifestyle</li>
                    <li onClick={()=> handleClick('Business')} className='text-white/60 cursor-pointer hover:font-bold'>Business</li>
                </ul>

                <div className='w-full sm:w-1/3'>
                    <h4 className='text-lg font-bold'>Contact</h4>
                    <p className='mt-2'>Email: hello@postpilot.com</p>
                    <p>Twitter: @postpilot</p>
                </div>
            </div>

            <p className='text-sm mt-6 text-center w-full'>© 2024 PostPilot. All rights reserved.</p>
        </div>
    )
}

export default Footer
