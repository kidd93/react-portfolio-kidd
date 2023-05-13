import React from 'react'
import soon from '../assets/comingsoon.jpg'
import styleBuddy from '../assets/styleBuddy2.png'
// import svelte from '../assets/SvelteCreationForm.png'
import booksearch from '../assets/booksearch.png'
import Doggypedia from '../assets/Doggypedia.png'
import Jate from '../assets/Jate.png'

const Projects = () => {
  return (
    <div className='w-full md:h-screen bg-slate-500 text-zinc-300' name='projects'>
      <div className='flex flex-col justify-center place-items-center w-full h-full'>
        <div className='flex flex-col justify-center place-items-center max-w-[800px] bg-slate-700 rounded-lg'>
          <p className='text-3xl py-8'>Projects</p>
          <h1 className=' md:text-lg pb-5 px-5'>Please click below to view/demo my bootcamp projects. All applications are deployed through Heroku. A few are collaborations that I helped contribute towards and enjoyed working on. Thank you!</h1>

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
                <a href='https://calm-castle-89895.herokuapp.com/'>
                  <img src={Jate} alt='' style={{ width: '350px', height: '250px'}} className='shadow-xl shadow-black hover:shadow-zinc-400'>
                  </img>
               </a>
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