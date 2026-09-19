import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {

    const {title = '', summary = '', category = '', image = '', _id} = blog || {};
    const navigate = useNavigate()
    const safeCategory = String(category || '').trim();
    const safeSummary = String(summary || '').slice(0, 80);

  return (
    <div onClick={()=> navigate(`/blog/${_id}`)} className='w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-white/25 duration-300 cursor-pointer'>
      <img src={image} alt="" className='aspect-video'/>
      <span className='ml-5 mt-4 px-3 py-1 inline-block bg-sky-500 rounded-full text-white text-xs'>
        {safeCategory ? safeCategory.charAt(0).toUpperCase() + safeCategory.slice(1) : 'General'}
      </span>
      <div className='p-5'>
        <h5 className='mb-2 font-medium text-gray-900'>{title}</h5>
        <p className='mb-3 text-xs text-gray-600'>{safeSummary}</p>
      </div>
    </div>
  )
}

export default BlogCard
