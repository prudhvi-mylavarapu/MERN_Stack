import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <div className='flex flex-col items-center justify-center gap-10 h-[30vh] w-full py-12 px-4 bg-linear-to-br from-blue-700 to-purple-900 text-white/80'>
                <div className='text-5xl'>Welcome to Post Pilot</div>
                <div className='text-2xl'>Discover insights, stories, and knowledge across technology, design, lifestyle, and more.</div>
            </div>
        </div>
    )
}

export default Header
