import React from 'react'
import { useNavigate } from 'react-router-dom'


const formNewPost = () => {

    const navigate = useNavigate()

    const handleClickCreatePost = () => {
        navigate('/admin')
    }

    return (
    <div className='mx-4 sm:mx-6 md:mx-12 lg:mx-20 xl:mx-60 my-10'>
            <form action="post" className='flex flex-col gap-6'>
                <label className='flex flex-col border border-gray-300 p-5 rounded-2xl gap-3 shadow'>
                    Title *
                    <input className='border border-gray-300 focus:border-blue-500 focus:border-2 outline-none rounded-xl p-3 shadow' type="text"
                        name='title'
                        placeholder='Enter Post Title'
                        required />
                </label>
                <label className='flex flex-col border border-gray-300 p-5 rounded-2xl gap-3 shadow'>
                    URL Slug *
                    <input className='border border-gray-300 focus:border-blue-500 focus:border-2 outline-none rounded-xl p-3 shadow' type="text"
                        name='title'
                        placeholder='post-url-slug'
                        required />
                </label>
                <label className='flex flex-col border border-gray-300 p-5 rounded-2xl gap-3 shadow'>
                    Cover Image URL *
                    <div className='flex gap-2'>
                        <input className='border border-gray-300 focus:border-blue-500 focus:border-2 outline-none rounded-xl p-3 shadow w-full' type="text"
                            name='title'
                            placeholder='https://example.com/image.jpg'
                            required />
                        <button className='border-none bg-blue-500 text-white p-3 px-5 rounded-2xl cursonr-pointer'>Browse</button>
                    </div>

                </label>
                <label className='flex flex-col border border-gray-300 p-5 rounded-2xl gap-3 shadow'>
                    Summary *
                    <textarea className='h-42 border border-gray-300 focus:border-blue-500 focus:border-2 outline-none rounded-xl p-3 shadow'
                        type="text"
                        name='title'
                        placeholder='A brief summary of your post'
                        required />
                </label>
                <label className='flex flex-col border border-gray-300 p-5 rounded-2xl gap-3 shadow'>
                    Content *
                    <textarea className='h-100 border border-gray-300 focus:border-blue-500 focus:border-2 outline-none rounded-xl p-3 shadow'
                        type="text"
                        name='title'
                        placeholder='Write your post content here'
                        required />
                </label>
                <div className='flex gap-4'>
                    <label className='flex flex-col border border-gray-300 p-5 rounded-2xl gap-3 shadow w-1/2'>
                        Author *
                        <input className='border border-gray-300 focus:border-blue-500 focus:border-2 outline-none rounded-xl p-3 shadow'
                            type="text" name='Admin' value='Admin' />
                    </label>
                    <label className='flex flex-col border border-gray-300 p-5 rounded-2xl gap-3 shadow w-1/2'>
                        Category *
                        <select name="category" id="" className='border border-gray-300 focus:border-blue-500 focus:border-2 outline-none rounded-xl p-3 shadow'>
                            <option value="Technology">Technology</option>
                            <option value="Design">Design</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Business">Business</option>
                        </select>
                    </label>
                </div>
                <div className='flex gap-4'>
                    <input className='w-1/2 border-none bg-blue-500 text-white p-3 rounded-xl cursor-pointer'
                    type="submit"
                    name='submit' 
                    value='Create Post' />
                    <button onClick={handleClickCreatePost} className='w-1/2 border-none bg-gray-300 rounded-xl cursor-pointer p-3'>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default formNewPost
