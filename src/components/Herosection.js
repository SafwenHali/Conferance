import React from 'react';
import './Herosection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>YOUR CONFERANCE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      <a href="/conferences" class="inline-block text-lg h-10 px-6 py-2 leading-none border text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0">
        GET STARTED NOW
      </a>  
      </div>
    </div>
  );
}

export default HeroSection;