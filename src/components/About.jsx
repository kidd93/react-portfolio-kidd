import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-slate-600 text-zinc-300'>
      <div className='flex flex-col justify-center place-items-center w-full h-full'>
        <div className='flex flex-col justify-center place-items-center p-8'>
          <p className='text-3xl pb-5'>About</p>
          <h1 className='max-w-[700px]'>
            Hello and welcome! My name is Kelsie Kidd and a I'm a newly certified Full Stack Web Developer. I attended a coding bootcamp and I graduated from UW of Madison Extended Campus November of 2022. My previous work history was primarily in a wide variety of manufactoring work and I've always found myself craving the urge to continuously learn. After taking the course through UW of Madison I can certainly say I found the holy grail of continuously learning and have truly enjoyed the, at times, puzzling world of coding. I would be immensely overjoyed if I could switch careers and go from a blue-collar worker to a white-collar worker.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default About