import React from 'react'

const NavBar = () => (

<nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <div className="flex items-center">
     
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">TODO APP</span>
  </div>
  <div className="flex">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
  </div>
  </div>
</nav>
)

export default NavBar