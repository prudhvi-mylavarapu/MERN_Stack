import React, { useEffect, useState } from 'react'
import eye from '../../assets/eye.svg'
import pencil from '../../assets/pencil.svg'
import trash from '../../assets/trash.svg'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import { useOutletContext } from 'react-router-dom'

const PostCard = (props) => {
    const [blogs, setBlogs] = useState([]);
    const { axios } = useAppContext()
    const { fetchDashboard } = useOutletContext() || {}

    const fetchBlogs = async () => {
        try {
            const { data } = await axios.get('/api/admin/blogs')
            if (data.success) {
                setBlogs(data.blogs)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const deleteBlog = async (blog)=>{
        const confirm = window.confirm('Are you sure you want to delete this blog?')
        if(!confirm) return;
        try {
            const { data } = await axios.post('/api/blog/delete', {id: blog._id})
            if (data.success){
                toast.success(data.message)
                await fetchBlogs()
                if (fetchDashboard) fetchDashboard();
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const togglePublish = async (blog) =>{
        try {
            const { data } = await axios.post('/api/blog/toggle-publish', {id: blog._id})
            if (data.success){
                toast.success(data.message)
                await fetchBlogs()
                if (fetchDashboard) fetchDashboard();
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchBlogs()
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
                        <div className='flex items-start gap-3 sm:gap-5 mx-0 sm:mx-2'>
                            <img onClick={() => togglePublish(post)} className='w-5 sm:w-6 cursor-pointer border-none hover:bg-green-200 rounded hover:p-0.5' src={eye} alt="eye" />
                            {/* Edit Button */}
                            {/* <img className='w-5 sm:w-6 cursor-pointer border-none hover:bg-blue-200 rounded' src={pencil} alt="edit" /> */}
                            <img onClick={() => deleteBlog(post)} className='w-5 sm:w-6 cursor-pointer border-none hover:bg-red-200 rounded hover:p-0.5' src={trash} alt="delete" />
                        </div>
                    </div>
                ) : null
            ))}
        </>
    )
}

export default PostCard
