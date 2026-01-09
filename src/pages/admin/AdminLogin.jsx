import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

  const navigate = useNavigate()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
  }

  return (
    <div className='bg-blue-600 min-h-screen w-screen flex items-center'>
      <div className='bg-white w-1/3 rounded-2xl p-10 mx-auto'>
        <div onClick={() => navigate('/')} className='flex gap-1 items-center cursor-pointer mb-10'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#454545" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
          <p className='text-m text-gray-500'>Back to home</p>
        </div>
        <div className='bg-blue-200 rounded-full p-3 w-fit mx-auto mb-7'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#0091ff" viewBox="0 0 256 256"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path></svg>
        </div>
        <div className='flex flex-col items-center gap-2 mb-7'>
          <h1 className='text-3xl text-black/75'>Admin Login</h1>
          <p className='text-gray-500'>Sign in to access the dashboard</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label className='flex flex-col text-black/60 gap-2 mb-7'>
            Email Address:
            <input onChange={e=> setEmail(e.target.value)} value={email}
            type="text" name='email' placeholder='admin@postpilot.com' required className='border border-black/30 p-3 rounded-xl'/>
          </label>
          <label className='flex flex-col text-black/60 gap-2 mb-10'>
            Password:
            <input onChange={e=> setPassword(e.target.value)} value={password}
             type="password" name='password' placeholder='Enter your password' className='border border-black/30 p-3 rounded-xl'/>
          </label>
          <button type="submit" className='cursor-pointer bg-blue-500 mx-auto w-full rounded-xl p-3 text-xl text-white'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
