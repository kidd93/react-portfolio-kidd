import React from 'react'
import bg from '../assets/background.png'

const Contact = () => {
  return (
    <div className='w-full items-center relative md:h-screen text-zinc-300' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: `no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} name='contact' >
      <div className='flex flex-col justify-center items-center w-full h-full'>

        <form method='POST' action='https://getform.io/f/1d468805-f4e2-4a6b-a77e-6f781c2aa606' className='flex flex-col justify-center max-w-[800px] shadow-black shadow-xl bg-gradient-to-tr from-[#181818] to-[#707070] lg:rounded-lg'>
          <div>
            <p className='text-3xl flex justify-center items-center py-5 pb-4 text-cyan-500 font-bold'>Contact</p>
            <p className='px-5 pb-5 text-gray-100'>I hope you enjoyed my portfolio. If you have any comments or questions please fill out this contact form. Thank you for your time!</p>
          </div>
          <input className='p-2 m-5 rounded-lg text-black text-lg shadow-lg shadow-black' type='text' placeholder='Name' name='name'></input>
          <input className='my-1 p-2 m-5 rounded-lg text-black text-lg shadow-lg shadow-black' type='text' placeholder='Email' name='email'></input>
          <textarea className='p-2 m-5 rounded-lg text-black text-lg shadow-lg shadow-black pb-5' rows='10' placeholder='Message' name='message'></textarea>
          <button className='my-1 mx-auto flex items-center border-2 border-gray-100 shadow-lg shadow-black px-5 py-3 hover:bg-cyan-700 hover:border-cyan-800 font-semibold'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact