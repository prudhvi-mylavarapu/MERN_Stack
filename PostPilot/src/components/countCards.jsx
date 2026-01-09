import React from 'react'
import file from '../assets/file.svg'
import eye from '../assets/eye.svg'
import clock from '../assets/clock.svg'

const countCards = () => {
    return (
        <div className='flex gap-5'>
            <div className='border border-gray-200 shadow w-1/3 mt-10 p-4 rounded-xl'>
                <div className='flex items-center gap-3 mb-3'>
                    <img className='border border-none bg-sky-100 p-1 rounded-xl' src={file} alt="" />
                    <p className='text-gray-500'>Total Posts</p>
                </div>
                <p className='text-3xl text-blue-700'>5</p>
            </div>
            <div className='border border-gray-200 shadow w-1/3 mt-10 p-4 rounded-xl'>
                <div className='flex items-center gap-3 mb-3'>
                    <img className='border border-none bg-green-100 p-1 rounded-xl' src={eye} alt="" />
                    <p className='text-gray-500'>Published</p>
                </div>
                <p className='text-3xl text-green-700'>5</p>
            </div>
            <div className='border border-gray-200 shadow w-1/3 mt-10 p-4 rounded-xl'>
                <div className='flex items-center gap-3 mb-3'>
                    <img className='border border-none bg-orange-100 p-1 rounded-xl' src={clock} alt="" />
                    <p className='text-gray-500'>Drafts</p>
                </div>
                <p className='text-3xl text-orange-700'>0</p>
            </div>

        </div>
    )
}

export default countCards
