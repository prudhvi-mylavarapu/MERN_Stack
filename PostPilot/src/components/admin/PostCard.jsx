import React from 'react'
import eye from '../../assets/eye.svg'
import pencil from '../../assets/pencil.svg'
import trash from '../../assets/trash.svg'
import { posts } from '../../assets/posts'


const PostCard = () => {

  const getTwoSentences = (text) => {
    const sentences = text.split('.').slice(0, 2).join('.')
    return sentences + (sentences.endsWith('.') ? '' : '.')
  }

    return (
        <>
            {posts.map((post) => (
                <div key={post.id} className='flex gap-5 border-b border-gray-200 p-5'>
                    <img className='aspect-video w-1/8 rounded-2xl' src={post.image} alt="logo" />
                    <div className='flex flex-col gap-2.5 w-5/6'>
                        <div className='flex'>
                            <h1 className='text-xl text-black/80'>{post.title}</h1>
                            <span className='ml-auto border-none rounded-xl px-3 py-1 bg-green-300 text-green-800'>Published</span>
                        </div>
                        <p className='text-black/60'>{getTwoSentences(post.description)}</p>
                        <p className='text-black/60'>{post.name} &nbsp;&nbsp;&nbsp;&nbsp;. &nbsp;&nbsp;&nbsp;&nbsp;{String(post.category)[0].toUpperCase() + String(post.category).slice(1)}&nbsp;&nbsp;&nbsp;&nbsp;. &nbsp;&nbsp;&nbsp;&nbsp;{post.date}</p>
                    </div>
                    <div className='flex items-start gap-5 mx-2'>
                        <img className='w-6 cursor-pointer border-none hover:bg-green-200 rounded' src={eye} alt="eye" />
                        <img className='w-6 cursor-pointer border-none hover:bg-blue-200 rounded' src={pencil} alt="edit" />
                        <img className='w-6 cursor-pointer border-none hover:bg-red-200 rounded' src={trash} alt="delete" />
                    </div>
                </div>
            ))}

            {/* {posts.map((post) => (
      <div key={post.id} className='flex gap-5 mb-5'>
        <img className='aspect-video w-1/8 rounded-2xl' src={post.image} alt={post.title} />
        <div className='flex flex-col gap-2.5'>
          <div className='flex'>
              <h1 className='text-xl text-black/80'>{post.title}</h1>
              <span className='ml-auto border-none rounded-xl px-3 py-1 bg-green-300 text-green-800'>Published</span>
          </div>
          <p className='text-black/60'>{post.description}</p>
          <p className='text-black/60'>{post.name} &nbsp;&nbsp;&nbsp;&nbsp;. &nbsp;&nbsp;&nbsp;&nbsp;{post.category} &nbsp;&nbsp;&nbsp;&nbsp;. &nbsp;&nbsp;&nbsp;&nbsp;{post.date}</p>
        </div>
        <div className='flex items-start gap-5 mx-2'>
          <img className='w-6' src={eye} alt="eye" />
          <img className='w-6' src={pencil} alt="edit" />
          <img className='w-6' src={trash} alt="delete" />
        </div>
      </div>
    ))} */}
        </>
    )
}

export default PostCard
