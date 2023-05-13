import React from 'react'
import bg from '../assets/background.png'
import soon from '../assets/comingsoon.jpg'
import styleBuddy from '../assets/styleBuddy2.png'
// import svelte from '../assets/SvelteCreationForm.png'
import booksearch from '../assets/booksearch.png'
import Doggypedia from '../assets/Doggypedia.png'

const Projects = () => {
  return (
    <div className='w-full md:h-screen bg-slate-500 text-zinc-300' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: `no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} name='projects'>
      <div className='flex flex-col justify-center place-items-center w-full h-full'>
        <div className='flex flex-col justify-center place-items-center max-w-[800px] lg:rounded-xl shadow-black shadow-xl bg-gradient-to-tr from-[#181818] to-[#707070]'>
          <p className='text-3xl text-cyan-500 font-bold px-5 py-5 pb-4'>Projects</p>
          <h1 className=' md:text-lg pb-5 px-5'>Please click below to view/demo my bootcamp projects. All applications are deployed through Heroku. A few are collaborations that I helped contribute towards and enjoyed working on. To see the code for my projects please visit my GitHub. The link is located at the top. Thank you!</h1>

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