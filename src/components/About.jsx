import React, { useState } from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import Mannie from '../assets/images/Mannie.JPG'
import Luna from '../assets/images/Luna.JPG'
import Rocco from '../assets/images/Rocco.JPG'
import Ryley from '../assets/images/Ryley.JPG'

const About = () => {

  const petPics = [
    {
      url: [Mannie]
},

    {
      url: [Luna]
    },

    {
      url: [Rocco]
    },

    {
      url: [Ryley]
    },
  ];

  return (
    <div name='about' className='w-full h-screen bg-slate-500 text-zinc-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='flex flex-col justify-center place-items-center max-w-[800px] bg-slate-700 rounded-lg'>
          <p className='text-3xl'>About</p>
          <h1 className='md:text-lg px-5'>
            Hello and welcome! My name is Kelsie Kidd and a I'm a newly certified Full Stack Web Developer. I attended a coding bootcamp and I graduated from UW of Madison Extended Campus November of 2022. My previous work history was primarily in a wide variety of manufactoring work and I've always found myself craving the urge to continuously learn. After taking the course through UW of Madison I can certainly say I found the holy grail of continuously learning and have truly enjoyed the, at times, puzzling world of coding. I would be immensely overjoyed if I could switch careers and go from a blue-collar worker to a white-collar worker. Hopefully you can help me with that. Please enjoy this image slider of my two dogs and two cats!
          </h1>
          <div className='w-full mx-auto py-8 px-4'>
            <div className='flex justify-center w-full h-full pb-6'>
              <div className='shadow-lg shadow-black relative'>
              <SimpleImageSlider
                width={306}
                height={385}
                images={petPics}
                showBullets={true}
                showNavs={true}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About