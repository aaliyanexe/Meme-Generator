import { useState } from 'react'


export default function Inner() {
  const [meme, setMeme] = useState({
    topText: 'One does not simply',
    bottomText: 'Walk into Mordor',
    imageUrl: 'http://i.imgflip.com/1bij.jpg',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setMeme((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className="flex flex-col items-center px-4 py-6 animate-fade-in">
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-200">
            Top Text
          </label>
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-200">
            Bottom Text
          </label>
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
      </div>

      <button
        className="w-full max-w-2xl py-3 font-semibold text-white transition-all duration-300 ease-out rounded-md shadow-md cursor-pointer  bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-500 hover:to-fuchsia-400 active:scale-95 hover:shadow-lg hover:brightness-110"
      >
        Get a new meme image 🖼
      </button>

      <div className="relative w-full max-w-2xl mt-4">
        <img
          src={meme.imageUrl}
          alt="Generated meme"
          className="w-full h-auto rounded-md shadow-lg"
        />
        <span className="absolute text-2xl font-extrabold tracking-wide text-center text-white uppercase -translate-x-1/2 top-4 left-1/2 sm:text-3xl drop-shadow-lg">
          {meme.topText}
        </span>
        <span className="absolute text-2xl font-extrabold tracking-wide text-center text-white uppercase -translate-x-1/2 bottom-4 left-1/2 sm:text-3xl drop-shadow-lg">
          {meme.bottomText}
        </span>
      </div>
    </main>
  )
}
