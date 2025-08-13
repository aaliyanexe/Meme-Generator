import React from 'react'

const Footer = () => {
  return (
    <footer className=" w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2025{' '}
        <span className="hover:underline cursor-default">Meme Generator™</span>.
        All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://github.com/aaliyanexe/Meme-Generator/tree/main/meme-generator"
            className="hover:underline mr-4 md:mr-6"
          >
            Github Repo
          </a>
        </li>
        <li>
          <a
            href="https://x.com/AaliyanDevX"
            className="hover:underline mr-4 md:mr-6"
          >
            Twitter
          </a>
        </li>
        <li>
          <a href="" className="hover:underline mr-4 md:mr-6">
            Discord
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
