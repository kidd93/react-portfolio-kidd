import React, { useState } from 'react'
import Selfie from '../assets/Selfie.jpg'
import bg from '../assets/background.png'
import { Link } from 'react-scroll'


const Home = () => {
  const [view, setView] = useState(false)
  const click = () => setView(!view)

  return (
    <div name='home' className='w-full h-screen p-8' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: `no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>

      <div className='absoulte flex flex-col justify-center items-center w-full h-full text-zinc-300'>
        <img src={Selfie} alt='selfie-img' style={{ width: '200px' }} class='Selfie' className='shadow-lg shadow-black'></img>
        <h1 className='text-3xl pb-2 pt-5'>Welcome to my Portfolio!</h1>
        <p className='text-lg pb-5'>My Name is Kelsie Kidd. I am a certified Full Stack Web Developer. Please feel free to explore my portfolio.</p>
        <button className='border-2 border-zinc-400 shadow-lg shadow-black px-5 py-3 hover:bg-sky-900 hover:border-sky-900 font-semibold'>
          <Link onClick={click} to='projects' smooth={true} duration={300}> View Projects</Link>
        </button>
      </div>
    </div>
  )
}

export default Home