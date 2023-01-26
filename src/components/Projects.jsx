import React from 'react'
import styleBuddy from '../assets/styleBuddy2.png'
import booksearch from '../assets/booksearch.png'
import Doggypedia from '../assets/Doggypedia.png'

const Projects = () => {
  return (
    <div className='w-full md:h-screen bg-slate-500 text-zinc-300' name='projects'>
      <div className='flex flex-col justify-center place-items-center w-full h-full'>
        <div className='flex flex-col justify-center place-items-center max-w-[800px] bg-slate-700 rounded-lg'>
          <p className='text-3xl py-8'>Projects</p>
          <h1 className=' md:text-lg pb-5 px-5'>Please click below to view/demo my bootcamp projects. All applications are deployed through Heroku and I will share a link to my Github for code viewing purposes. Thank you!</h1>

          <div className='flex flex-col justify-center'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 pb-5'>
              <div className=''>
                <a href='https://style-buddy22.herokuapp.com/'>
                  <img src={styleBuddy} alt='' style={{ width: '350px', height: '250px' }} className='shadow-xl shadow-black hover:shadow-zinc-400'>
                  </img>
                </a>
              </div>

              <div className='grid grid-cols2 gap-4 justify-center'>
                <a href='https://vast-mountain-00582.herokuapp.com/'>
                  <img src={booksearch} alt='' style={{ width: '350px', height: '250px' }} className='shadow-xl shadow-black hover:shadow-zinc-400'>
                  </img>
                </a>
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 pb-10'>
              <div>
                <a href='https://style-buddy22.herokuapp.com/'>
                  <img src={styleBuddy} alt='' style={{ width: '350px', height: '250px'}} className='shadow-xl shadow-black hover:shadow-zinc-400'>
                  </img>
                </a>
              </div>

              <div className='grid grid-cols2 gap-4 justify-center'>
                <a href='https://alexcourtney18.github.io/cocktail-doggo/'>
                  <img src={Doggypedia} alt='' style={{ width: '350px', height: '250px' }} className='shadow-xl shadow-black hover:shadow-zinc-400'>
                  </img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects