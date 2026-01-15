import React from 'react'
import file from '../../assets/file.svg'
import eye from '../../assets/eye.svg'
import clock from '../../assets/clock.svg'

const countCards = ({ dashboardData }) => {
    return (
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-5'>
            <div className='border border-gray-200 shadow w-full sm:w-1/3 mt-10 p-4 rounded-xl'>
                <div className='flex items-center gap-3 mb-3'>
                    <img className='border border-none bg-sky-100 p-1 rounded-xl w-8 h-8' src={file} alt="" />
                    <p className='text-gray-500 text-sm sm:text-base'>Total Posts</p>
                </div>
                <p className='text-2xl sm:text-3xl text-blue-700'>{dashboardData.allposts}</p>
            </div>
            <div className='border border-gray-200 shadow w-full sm:w-1/3 mt-10 p-4 rounded-xl'>
                <div className='flex items-center gap-3 mb-3'>
                    <img className='border border-none bg-green-100 p-1 rounded-xl w-8 h-8' src={eye} alt="" />
                    <p className='text-gray-500 text-sm sm:text-base'>Published</p>
                </div>
                <p className='text-2xl sm:text-3xl text-green-700'>{dashboardData.published}</p>
            </div>
            <div className='border border-gray-200 shadow w-full sm:w-1/3 mt-10 p-4 rounded-xl'>
                <div className='flex items-center gap-3 mb-3'>
                    <img className='border border-none bg-orange-100 p-1 rounded-xl w-8 h-8' src={clock} alt="" />
                    <p className='text-gray-500 text-sm sm:text-base'>Drafts</p>
                </div>
                <p className='text-2xl sm:text-3xl text-orange-700'>{dashboardData.drafts}</p>
            </div>

        </div>
    )
}

export default countCards
