import React from 'react'
import bg from '../assets/background.png'

const Contact = () => {
  return (
    <div className='w-full h-screen text-zinc-300 flex justify-center items-center' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: `no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} name='contact' >

      

      <form action='' className='flex flex-col justify-center max-w-[800px] shadow-black shadow-xl bg-gradient-to-tr from-[#181818] to-[#707070] lg:rounded-lg'>
        <div>
          <p className='text-3xl flex justify-center items-center px-5 py-5 pb-4 text-cyan-500 font-bold'>Contact</p>
          <p className='px-5 pb-5 text-gray-100'>I hope you enjoyed my portfolio. If you have any comments or questions please fill out this contact form. Thank you for your time!</p>
        </div>

        <input className='p-2 m-5 rounded-lg shadow-lg shadow-black' type='text' placeholder='Name' name='name'></input>
        <input className='my-1 p-2 m-5 rounded-lg shadow-lg shadow-black' type='text' placeholder='Email' name='email'></input>
        <textarea className='p-2 m-5 rounded-lg shadow-lg shadow-black' rows='10' placeholder='Message' name='message'></textarea>
        <button className='my-2 mx-auto flex items-center border-2 border-zinc-400 shadow-lg shadow-black px-8 py-3 hover:bg-cyan-700 hover:border-cyan-800 font-semibold'>Send</button>

      </form>
    </div>
  )
}

export default Contact