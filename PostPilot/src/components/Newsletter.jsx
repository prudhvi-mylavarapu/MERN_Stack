import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-16 sm:my-24 md:my-32 px-4'>
      <h1 className='text-xl sm:text-2xl md:text-4xl font-semibold'>Never Miss a Blog!</h1>
      <p className='text-sm sm:text-base md:text-lg text-gray-500/70 pb-4 md:pb-8 max-w-2xl'>Subscribe to get the latest blog, new tech, and exclusive news.</p>
      <form className='flex flex-col sm:flex-row items-center justify-between w-full sm:max-w-2xl md:h-13 h-auto gap-2 sm:gap-0'>
        <input className='border border-gray-300 rounded-md h-12 md:h-13 border-r-0 outline-none w-full sm:rounded-r-none px-3 text-gray-500 text-sm md:text-base' type="text" placeholder='Enter your email id' required/>
        <button type='submit' className='md:px-12 px-6 sm:px-8 h-12 md:h-13 text-white bg-sky-600/80 hover:bg-sky-500 transitioin-all cursor-pointer rounded-md sm:rounded-l-none w-full sm:w-auto text-sm md:text-base'>Subscribe</button>
      </form>
    </div>
  )
}

export default Newsletter
