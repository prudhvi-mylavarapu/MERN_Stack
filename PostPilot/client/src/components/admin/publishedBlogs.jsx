import React, { useEffect } from 'react'
import { useState } from 'react'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const publishedBlogs = () => {

    const [blogs, setBlogs] = useState([]);
    const { axios } = useAppContext()

    const fetchPublishedBlogs = async () => {
        try {
            const { data } = await axios.get('/api/blog/published')
            if (data.success) {
                setBlogs(data.blogs)
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        fetchPublishedBlogs()
    }, [])

    // Helper to strip HTML tags
    const stripHtml = (html = '') => html.replace(/<[^>]+>/g, '');
    const getTwoSentences = (text = '') => {
        if (!text) return '';
        // Remove HTML tags before splitting
        const plain = stripHtml(text);
        const sentences = plain.split('.').slice(0, 2).join('.');
        return sentences + (sentences.endsWith('.') ? '' : '.');
    }

    return (
        <>
            {Array.isArray(blogs) && blogs.length > 0 && blogs.map((post) => (
                post ? (
                    <div key={post._id} className='flex flex-col sm:flex-row gap-3 sm:gap-5 border-b border-gray-200 p-3 sm:p-5'>
                        <img className='aspect-video w-full sm:w-1/8 rounded-2xl' src={post.image} alt="logo" />
                        <div className='flex flex-col gap-2 sm:gap-2.5 w-full sm:w-5/6'>
                            <div className='flex flex-col sm:flex-row gap-2 sm:gap-0'>
                                <h1 className='text-lg sm:text-xl text-black/80'>{post.title}</h1>
                                <span className='sm:ml-auto border-none rounded-xl px-3 py-1 bg-green-300 text-green-800 text-xs sm:text-sm w-fit'>{post.isPublished ? 'Published' : 'Draft'}</span>
                            </div>
                            <p className='text-xs sm:text-sm text-black/60'>{getTwoSentences(post.description)}</p>
                            <p className='text-xs sm:text-sm text-black/60'>{post.name} &nbsp;&nbsp;&nbsp;&nbsp;. &nbsp;&nbsp;&nbsp;&nbsp;{String(post.category)[0].toUpperCase() + String(post.category).slice(1)}&nbsp;&nbsp;&nbsp;&nbsp;. &nbsp;&nbsp;&nbsp;&nbsp;{post.date}</p>
                        </div>
                    </div>
                ) : null
            ))}
        </>
    )
}

export default publishedBlogs
