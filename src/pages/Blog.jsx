import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../assets/posts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Blog = ({ activeItem, setActiveItem }) => {
  const { slug } = useParams()

  const [data, setData] = useState(null)

  useEffect(() =>{
    const found = posts.find(item => item.slug === slug)
    setData(found || null)
  }, [slug])

  if (!data) return <div>Loading...</div>

  return (
    <div>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <main className='max-w-4xl mx-auto p-8'>
        <h1 className='text-3xl font-bold mb-4'>{data.title}</h1>
        <div className='text-sm text-gray-500 mb-2 flex justify-between'>
          <span>{String(data.category)[0].toUpperCase() + String(data.category).slice(1)}</span>
          <span>Published on: {data.date}</span>
        </div>
        <p className='text-sm text-gray-500 mb-6'>Written by: {data.name}</p>
        <img src={data.image} alt={data.title} className='w-full h-auto mb-6 rounded' />
        <p>{data.description}</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, velit ipsa? Sunt, repellat tempora excepturi blanditiis incidunt reprehenderit doloremque magnam nemo exercitationem maiores rem quos vel ratione eum numquam ipsam.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, velit ipsa? Sunt, repellat tempora excepturi blanditiis incidunt reprehenderit doloremque magnam nemo exercitationem maiores rem quos vel ratione eum numquam ipsam.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, velit ipsa? Sunt, repellat tempora excepturi blanditiis incidunt reprehenderit doloremque magnam nemo exercitationem maiores rem quos vel ratione eum numquam ipsam.</p>
      </main>
      <Footer activeItem={activeItem} setActiveItem={setActiveItem}/>
    </div>
  )
}

export default Blog
