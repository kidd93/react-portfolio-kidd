import React from 'react'
import styleBuddy from '../assets/styleBuddy2.png'
import Doggypedia from '../assets/Doggypedia.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen bg-slate-600 text-zinc-300'>
      <div className='flex flex-col justify-center place-items-center w-full h-full'>
        <div className='flex flex-col justify-center place-items-center p-8'>
          <p className='text-3xl pb-5'>Projects</p>
        </div>

        <div className='flex flex-col justify-center'>
          <div className='grid grid-cols-2 gap-4 pb-5'>
            <div>
              <a href='https://style-buddy22.herokuapp.com/'>
                <img src={styleBuddy} alt='' style={{ width: '350px', height: '250px' }} className='shadow-xl shadow-black'>
                </img>
              </a>
            </div>

            <div className='grid grid-cols2 gap-4 justify-center'>
              <a href='https://style-buddy22.herokuapp.com/'>
                <img src={styleBuddy} alt='' style={{ width: '350px', height: '250px' }} className='shadow-xl shadow-black'>
                </img>
              </a>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center'>
          <div className='grid grid-cols-2 gap-4 pb-5'>
            <div>
              <a href='https://style-buddy22.herokuapp.com/'>
                <img src={styleBuddy} alt='' style={{ width: '350px', height: '250px' }} className='shadow-xl shadow-black'>
                </img>
              </a>
            </div>

            <div className='grid grid-cols2 gap-4 justify-center'>
              <a href='https://alexcourtney18.github.io/cocktail-doggo/'>
                <img src={Doggypedia} alt='' style={{ width: '350px', height: '250px' }} className='shadow-xl shadow-black'>
                </img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects