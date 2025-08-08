import React from 'react'

const Header = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-800 via-violet-600 to-indigo-600 w-full flex items-center px-6 py-3 shadow-lg">
        <img
          className="h-12 w-auto object-contain"
          src="/image-removebg-preview.png"
          alt="Meme Generator Logo"
        />
        <h1 className="text-white font-bold text-2xl ml-3 tracking-wide">
          Meme Generator
        </h1>
      </div>
    </>
  )
}

export default Header
