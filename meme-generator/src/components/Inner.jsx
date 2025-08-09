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

      {/* Fancy Glow Button */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-md group">
        {/* Sliding shine */}
        <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transition-all duration-700 h-full w-44 bg-gradient-to-r from-white/20 to-white/5 opacity-40 -skew-x-12"></div>

        <button className="relative z-[1] w-full py-3 font-semibold text-white transition-all duration-300 ease-out rounded-md shadow-md cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-500 hover:to-fuchsia-400 active:scale-95 hover:shadow-lg hover:brightness-110">
          Get a new meme image 😎
        </button>

        {/* Outer glow */}
        <div className="absolute inset-0 duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-purple-700 blur-[30px] -z-10"></div>
      </div>

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
