import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {

    const {title, description, category, image, date, slug} = blog;
    const navigate = useNavigate()

  return (
    <div onClick={()=> navigate(`/blog/${slug}`)} className='w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-white/25 duration-300 cursor-pointer'>
      <img src={image} alt="" className='aspect-video'/>
      <span className='ml-5 mt-4 px-3 py-1 inline-block bg-sky-500 rounded-full text-white text-xs'>{String(category)[0].toUpperCase() + String(category).slice(1)}</span>
      <div className='p-5'>
        <h5 className='mb-2 font-medium text-gray-900'>{title}</h5>
        <p className='mb-3 text-xs text-gray-600'>{description.slice(0, 80)}</p>
      </div>
    </div>
  )
}

export default BlogCard
