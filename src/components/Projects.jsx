import React from 'react'
import soon from '../assets/comingsoon.jpg'
import styleBuddy from '../assets/styleBuddy2.png'
// import svelte from '../assets/SvelteCreationForm.png'
import booksearch from '../assets/booksearch.png'
import Doggypedia from '../assets/Doggypedia.png'
import bg from '../assets/background.png'

const Projects = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center lg:h-screen bg-slate-500 text-zinc-300' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: `no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} name='projects'>
      <div className='flex justify-center'>
        <div className='flex flex-col justify-center items-center max-w-[800px] shadow-black shadow-xl bg-gradient-to-tr from-[#181818] to-[#707070] lg:rounded-lg'>
          <p className='text-3xl py-2 m-5 text-cyan-500 font-bold'>Projects</p>
          <h1 className='text-md px-5 text-gray-100'>Please click below to view/demo my bootcamp projects. All applications are deployed through Heroku and I will share a link to my Github for code viewing purposes. Thank you!</h1>

          <div className='flex flex-col justify-center mt-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <div>
                <a href='https://style-buddy22.herokuapp.com/'>
                  <img src={styleBuddy} alt='' style={{ width: '300px', height: '200px' }} className='shadow-xl shadow-black hover:shadow-zinc-400'>
                  </img>
                </a>
              </div>

              <div>
                <a href='https://vast-mountain-00582.herokuapp.com/'>
                  <img src={booksearch} alt='' style={{ width: '300px', height: '200px' }} className='shadow-xl shadow-black hover:shadow-zinc-400'>
                  </img>
                </a>
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center m-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <div>
                
                  <img src={soon} alt='' style={{ width: '300px', height: '200px'}} className='shadow-xl shadow-black hover:shadow-zinc-400'>
                  </img>
               
              </div>

              <div>
                <a href='https://alexcourtney18.github.io/cocktail-doggo/'>
                  <img src={Doggypedia} alt='' style={{ width: '300px', height: '200px' }} className='shadow-xl shadow-black hover:shadow-zinc-400'>
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