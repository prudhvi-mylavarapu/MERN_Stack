import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import Quill from 'quill'
import toast from 'react-hot-toast'

const formNewPost = () => {
    const {axios} = useAppContext()
    const [isAdding, setIsAdding] = useState(false)

    const editorRef = useRef(null)
    const quillRef = useRef(null)

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [category, setcategory] = useState('Startup');
    const [isPublished, setIsPublished] = useState(false)
    const [imageUrl, setImageUrl] = useState('');
    const [filePreview, setFilePreview] = useState('');
    const [file, setFile] = useState(null);

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            setIsAdding(true);
            const formData = new FormData();
            formData.append('image', file); // file must be the File object
            formData.append('blog', JSON.stringify({
                title,
                summary,
                description: quillRef.current ? quillRef.current.root.innerHTML : '',
                category,
                isPublished
            }));
            await axios.post('/api/blog/add', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            // ...handle success (e.g., redirect, clear form, etc.)
        } catch (error) {
            // ...handle error
        } finally {
            setIsAdding(false);
        }
    }

    const generateContent = async ()=>{

    }

    const navigate = useNavigate()
    const handleClickCancel = () => {
        navigate('/admin')
    }

    useEffect(()=>{
        //Initiate Quill only once
        if(!quillRef.current && editorRef.current){
            quillRef.current = new Quill(editorRef.current, {theme: 'snow'})
        }
    })


    return (
    <div className='mx-4 sm:mx-6 md:mx-12 lg:mx-20 xl:mx-60 my-10'>
            <form onSubmit={onSubmitHandler} className='flex flex-col gap-6'>
                <label className='flex flex-col border border-gray-300 p-5 rounded-2xl gap-3 shadow'>
                    Title *
                    <input className='border border-gray-300 focus:border-blue-500 focus:border-2 outline-none rounded-xl p-3 shadow'   type="text"
                        name='title'
                        placeholder='Enter Post Title'
                        onChange={e=> setTitle(e.target.value)}
                        value={title}
                        required />
                </label>
                <label className='flex flex-col border border-gray-300 p-5 rounded-2xl gap-3 shadow'>
                    Cover Image *
                    <div className='flex flex-col gap-2'>
                      <input
                        type="file"
                        accept="image/*"
                        id="cover-image-file"
                        name="image"
                        className="hidden"
                        onChange={e => {
                          const fileObj = e.target.files[0];
                          if (fileObj) {
                            setFile(fileObj);
                            setFilePreview(URL.createObjectURL(fileObj));
                          }
                        }}
                        required
                      />
                      <label
                        htmlFor="cover-image-file"
                        className="border border-gray-300 bg-blue-500 text-white p-3 px-5 rounded-2xl cursor-pointer text-center"
                      >
                        Upload your image
                      </label>
                      {filePreview && (
                        <img
                          src={filePreview}
                          alt="Preview"
                          className="mt-2 rounded"
                          style={{ maxWidth: 200 }}
                        />
                      )}
                    </div>
                </label>
                <label className='flex flex-col border border-gray-300 p-5 rounded-2xl gap-3 shadow'>
                    Summary *
                    <textarea className='h-42 border border-gray-300 focus:border-blue-500 focus:border-2 outline-none rounded-xl p-3 shadow'
                        type="text"
                        name='title'
                        placeholder='A brief summary of your post'
                        onChange={e=> setSummary(e.target.value)}
                        value={summary}
                        required />
                </label>
                <label className='flex flex-col border border-gray-300 p-5 rounded-2xl gap-3 shadow'>
                    <div className='flex items-center'>
                        <p>Content *</p>
                        <button onClick={generateContent} type='button' className='border-none bg-blue-500 text-white p-3 px-5 rounded-2xl cursor-pointer ml-auto'>Generate with AI</button>
                    </div>

                    <textarea ref={editorRef} className='h-100 border border-gray-300 focus:border-blue-500 focus:border-2 outline-none rounded-xl p-3 shadow'
                        type="text"
                        name='title'
                        placeholder='Write your post content here'
                        required />
                </label>
                <div className='flex gap-4'>
                    <label className='flex flex-col border border-gray-300 p-5 rounded-2xl gap-3 shadow w-1/2'>
                        Author *
                        <input className='border border-gray-300 focus:border-blue-500 focus:border-2 outline-none rounded-xl p-3 shadow'
                            type="text" name='Admin' value='Chris Brown' />
                    </label>
                    <label className='flex flex-col border border-gray-300 p-5 rounded-2xl gap-3 shadow w-1/2'>
                        Category *
                        <select onChange={e=> setcategory(e.target.value)} name="category" id="" className='border border-gray-300 focus:border-blue-500 focus:border-2 outline-none rounded-xl p-3 shadow'>
                            <option value="">Select Category</option>
                            <option value="Technology">Technology</option>
                            <option value="Design">Design</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Business">Business</option>
                        </select>
                    </label>
                </div>
                {/* Publish Now Section */}
                <div className="flex items-center justify-between border border-gray-300 rounded-2xl p-5 shadow mb-4 bg-white">
                  <div>
                    <div className="text-lg font-semibold text-gray-800 mb-1">Publish Now</div>
                    <div className="text-sm text-gray-500">Make your post live for everyone to see.</div>
                  </div>
                  <label className="flex items-center cursor-pointer">
                    <span className="mr-2 text-gray-700">Status:</span>
                    <input
                      type="checkbox"
                      checked={isPublished}
                      onChange={e => setIsPublished(e.target.checked)}
                      className="toggle toggle-primary"
                    />
                    <span className={`ml-2 font-medium ${isPublished ? 'text-green-600' : 'text-gray-400'}`}>
                      {isPublished ? 'Published' : 'Draft'}
                    </span>
                  </label>
                </div>
                <div className='flex gap-4'>
                    <button disaled={isAdding} className='w-1/2 border-none bg-blue-500 text-white p-3 rounded-xl cursor-pointer'
                    type="submit">{isAdding ? 'Creating the Post...' : 'Create Post'}</button>
                    <button onClick={handleClickCancel} className='w-1/2 border-none bg-gray-300 rounded-xl cursor-pointer p-3'>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default formNewPost
