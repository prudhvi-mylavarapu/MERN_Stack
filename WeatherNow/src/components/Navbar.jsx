import React from 'react'

const Navbar = ({ onSearch }) => {
  return (
    <nav className='px-4 sm:px-6 md:px-8 py-4'>
      <ul className='flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-0'>
        <li className='text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 italic'>WeatherNow</li>
        <li className='flex items-center bg-black/15 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl p-2 sm:p-3 w-full sm:w-auto max-w-md sm:max-w-none'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 sm:w-8 sm:h-8 shrink-0' fill="#CCCCCC" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
          <input
            className='font-bold text-white/50 rounded-3xl h-full px-2 mx-2 border-transparent bg-transparent outline-none w-full text-sm sm:text-base'
            type="text"
            name="search"
            placeholder='Search (eg: London)'
            onKeyPress={(e) => e.key === 'Enter' && onSearch(e.target.value)}
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
