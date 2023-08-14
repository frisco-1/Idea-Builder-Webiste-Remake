import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 text-white">
              <a href=".." className="flex items-center">
              <img
                src="./photos/logo.png"
                className="h-11 mr-3"
                alt="Idea Builder Logo"
              />
              <div>
                <span className="self-center text-2xl font-semibold whitespace-nowrap ">Idea Builder</span>
              <br></br>
              <span>Printing & Design</span>
              </div>

              </a>
              <div className="flex items-center">
                <a href="tel:5617211473" className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(561) 721-1473</a>
              </div>
          </div>
      </nav>
      
    </>
  )
}
