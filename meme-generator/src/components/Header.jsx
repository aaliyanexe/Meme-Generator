import React from 'react'

const Header = () => {
  return (
    <>
      <div className="bg-animated-gradient w-full flex items-center justify-center sm:justify-start px-4 sm:px-6 py-3 shadow-lg sm:shadow-xl shadow-indigo-900/40 animate-fade-in">
        <div className="flex items-center">
          <img
            className="h-10 sm:h-12 w-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
            src="/image-removebg-preview.png"
            alt="Meme Generator Logo"
          />
          <h1 className="text-white font-semibold text-xl sm:text-2xl ml-2 sm:ml-3 tracking-wide drop-shadow-md">
            Meme Generator
          </h1>
        </div>
      </div>
    </>
  )
}

export default Header
