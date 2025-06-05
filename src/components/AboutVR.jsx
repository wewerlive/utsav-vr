// src/components/AboutVR.jsx
import React from 'react';
import '../App.css';

function AboutVR() {
  return (
    <div className="p-5 max-w-3xl bg-black rounded-lg mx-auto mt-16 mb-2 md:mb-5">
      <div className='font-bold text-3xl mb-4'>About UtsavVR</div>
      <div className='text-base md:text-xl text-white'>
        UtsavVR is a divlatform that allows you to explore virtual reality tours from around the world.
        Whether you want to visit historical landmarks, dive into the oceans, or take a journey through space,
        UtsavVR has something for everyone.
        Our goal is to make virtual reality experiences accessible to everyone and to celebrate the wonders of the world every day.
      </div>
    </div>
  );
}

export default AboutVR;