import React from 'react'

const Nav = () => {
  
  return (
    <nav class="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
      <a href="/">
        <span class="font-semibold text-2xl tracking-tight">
          CONFERENCE
        </span>
      </a>
      </div>
  
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-indigo-100 border-indigo-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>

  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-lg lg:flex-grow">
      <a href="/home" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white mr-4">
        Home
      </a>
      <a href="/conferences" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white mr-4">
       Conferences
      </a>
      <a href="/about" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white">
        About
      </a>
    </div>
    <div>
      <a class="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white mt-4 lg:mt-0">
        Sign Up
      </a>
    </div>
  </div>
</nav>
  )
}

export default Nav