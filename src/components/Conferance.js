import React from 'react'

const conf = () => {
  
  return (
    <div class="flex flex-col items-center bg-indigo-700 border rounded-lg shadow-md md:flex-row md:max-w-xl">
    <div class=" px-28 flex flex-col justify-between p-4 leading-normal">
        <h1 class="mb-2 text-2xl font-bold tracking-tight text-white ">
            Noteworthy technology acquisitions 2022
            {/*
                {this.state.conferenc.title}
            */}
        </h1>
        <p class="mb-3 font-normal text-indigo-50 ">
            Here are the biggest enterprise technology acquisitions of 2022 so far, in reverse chronological order don't miss it.
            {/*
                {this.state.conferences.description}
            */}
        </p>
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-indigo-100 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-indigo-100 ">
                    ISET Nabeul 
                    {/*
                        {this.state.conferences.location}
                    */}
                </span>
            </li>
            <li class="flex space-x-3">
                
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-indigo-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-indigo-100 ">
                    Safwen Hali
                    {/*
                        {this.state.conferences.guest}
                    */}
                </span>
            </li>
            <li class="flex space-x-3">
                
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-indigo-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-indigo-100 ">
                    13/10/2023
                    {/*
                        {this.state.conferences.date}
                    */}
                </span>
            </li>
        </ul>
        
        <a href="/login" class="rounded bg-indigo-50 text-center text-indigo-700 hover:text-indigo-900 hover:bg-indigo-200">
        Book a place
      </a> 
        </div>
       </div>
    )
}   

export default conf