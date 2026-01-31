import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../assets/posts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useAppContext } from '../context/AppContext'

const Blog = ({ activeItem, setActiveItem }) => {
  const { blogId } = useParams()
  const{ axios } = useAppContext()

  const [data, setData] = useState(null)

  const fetchBlogData = async ()=>{
      try {
        const {data} = await axios.get(`/api/blog/${blogId}`)
        data.success ? setData(data.blog) : toast.error(data.message)
        console.log(data)
      } catch (error) {
        toast.error(error.message)
      }
  }

  useEffect(() =>{
      fetchBlogData()
  }, [])

  // Helper to get ordinal suffix
  function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  if (!data) return <div>Loading...</div>

  return (
    <div>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <main className='max-w-4xl mx-auto p-4 sm:p-6 md:p-8'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>{data.title}</h1>
        <div className='text-sm text-gray-500 mb-2 flex justify-between'>
          <span>{String(data.category)[0].toUpperCase() + String(data.category).slice(1)}</span>
          <span>
            Published on: {(() => {
              const dateObj = new Date(data.createdAt);
              const month = dateObj.toLocaleString('en-US', { month: 'long' });
              const day = getOrdinal(dateObj.getDate());
              const year = dateObj.getFullYear();
              return `${month} ${day}, ${year}`;
              // return dateObj.toDateString()
            })()}
          </span>
        </div>
        <p className='text-sm text-gray-500 mb-6'>Written by: Chirs Brown</p>
        <img src={data.image} alt={data.title} className='w-full h-auto mb-6 rounded' />
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </main>
      <Footer activeItem={activeItem} setActiveItem={setActiveItem}/>
    </div>
  )
}

export default Blog
