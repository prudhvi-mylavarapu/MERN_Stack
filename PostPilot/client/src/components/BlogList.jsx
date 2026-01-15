import React from 'react'
import { posts } from '../assets/posts'
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'

const BlogList = ({activeItem}) => {
  const normalized = activeItem ? String(activeItem).toLowerCase() : 'all'

  const {blogs, input} = useAppContext()

  const filteredBlogs = ()=>{
    if(input === ''){
      return blogs
    }
    return blogs.filter((blog)=> blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()))
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 pt-5 sm:mx-16 xl:mx-40'>
      {filteredBlogs().filter((blog) => normalized === 'all' ? true : String(blog.category).toLowerCase() === normalized)
        .map((blog) => <BlogCard key={blog._id} blog={blog} />)}
    </div>
  )
}

export default BlogList
