import { useState, useEffect } from 'react'

export default function Inner() {
  const fallbackImage = '/default-meme.jpg'

  const [meme, setMeme] = useState({
    topText: 'When the code finally runs',
    bottomText: 'But you have no idea why',
    imageUrl: fallbackImage,
  })

  const [allMemes, setAllMemes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    async function getMemes() {
      try {
        const res = await fetch('https://api.imgflip.com/get_memes', {
          signal: controller.signal,
        })
        const data = await res.json()

        if (data.success && Array.isArray(data.data?.memes)) {
          setAllMemes(data.data.memes)
          setMeme((prev) => ({
            ...prev,
            imageUrl: data.data.memes[0].url,
          }))
        } else {
          console.error('Invalid meme data from API')
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Failed to fetch memes:', error)
        }
      } finally {
        setLoading(false)
      }
    }

    getMemes()
    return () => controller.abort()
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setMeme((prev) => ({ ...prev, [name]: value }))
  }

  function getRandomMemeImage() {
    if (allMemes.length > 0) {
      const randomIndex = Math.floor(Math.random() * allMemes.length)
      const url = allMemes[randomIndex].url
      setMeme((prev) => ({ ...prev, imageUrl: url }))
    }
  }

  return (
    <main className="flex flex-col items-center px-4 py-6 animate-fade-in">
      {/* Input Fields */}
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
        <div className="flex flex-col">
          <label
            htmlFor="topText"
            className="mb-1 text-lg font-bold text-blue-500"
          >
            Top Text
          </label>
          <input
            id="topText"
            type="text"
            placeholder="One does not simply"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            className="px-4 py-2 text-lime-50 text-md border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="bottomText"
            className="mb-1 text-lg font-bold text-blue-500"
          >
            Bottom Text
          </label>
          <input
            id="bottomText"
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            className="px-4 py-2 text-lime-50 border text-md border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
      </div>

      {/* Meme Button */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-md group">
        <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transition-all duration-700 h-full w-44 bg-gradient-to-r from-white/20 to-white/5 opacity-40 -skew-x-12"></div>

        <button
          onClick={getRandomMemeImage}
          disabled={loading}
          className={`relative z-[1] w-full py-3 font-semibold text-white rounded-md shadow-md cursor-pointer transition-all duration-300 ease-out ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-500 hover:to-fuchsia-400 active:scale-95 hover:shadow-lg hover:brightness-110'
          }`}
        >
          {loading ? 'Loading memes...' : 'Get a new meme image 😎'}
        </button>

        <div className="absolute inset-0 duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-purple-700 blur-[30px] -z-10"></div>
      </div>

      {/* Meme Display */}
      <div className="relative w-full max-w-2xl mt-4">
        <img
          src={meme.imageUrl}
          alt="Generated meme"
          className="w-full h-auto rounded-md shadow-lg object-cover"
          onError={(e) => (e.target.src = fallbackImage)}
        />
        <>
          <>
            <>
              <span
                className="absolute w-[90%] text-center uppercase"
                style={{
                  top: '1rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                  color: 'white',
                  WebkitTextStroke: '2px black', // clean black outline
                  fontFamily: 'Impact, Arial Black, sans-serif',
                  fontWeight: '900',
                  lineHeight: 1.1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  textTransform: 'uppercase',
                  wordBreak: 'break-word',
                }}
              >
                {meme.topText}
              </span>

              <span
                className="absolute w-[90%] text-center uppercase"
                style={{
                  bottom: '1rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                  color: 'white',
                  WebkitTextStroke: '2px black',
                  fontFamily: 'Impact, Arial Black, sans-serif',
                  fontWeight: '900',
                  lineHeight: 1.1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  textTransform: 'uppercase',
                  wordBreak: 'break-word',
                }}
              >
                {meme.bottomText}
              </span>
            </>
          </>
        </>
      </div>
    </main>
  )
}
