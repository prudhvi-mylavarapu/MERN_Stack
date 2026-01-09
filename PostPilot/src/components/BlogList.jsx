import React from 'react'
import { posts } from '../assets/posts'
import BlogCard from './BlogCard'

const BlogList = ({activeItem}) => {
  const normalized = activeItem ? String(activeItem).toLowerCase() : 'all'

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 pt-5 sm:mx-16 xl:mx-40'>
      {posts
        .filter((blog) => normalized === 'all' ? true : String(blog.category).toLowerCase() === normalized)
        .map((blog) => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  )
}

export default BlogList
