import React from 'react'

const Contact = () => {
  return (
    <div className='w-full md:h-screen bg-slate-500 text-zinc-300 flex justify-center items-center pt-3' name='contact'>
      <form method='POST' action='https://getform.io/f/1d468805-f4e2-4a6b-a77e-6f781c2aa606' className='flex flex-col max-w-[800px] bg-slate-700 px-5 rounded-lg'>
        <div className='pb-8'>
          <p className='text-3xl flex justify-center items-center px-5 py-5 pb-4'>Contact</p>
          <p className='px-5'>I hope you enjoyed my portfolio. If you have any comments or questions please fill out this contact form. Thank you for your time!</p>
        </div>
        <input className='p-3 rounded-lg text-black text-lg shadow-lg shadow-black' type='text' placeholder='Name' name='name'></input>
        <input className='my-2 p-3 rounded-lg text-black text-lg shadow-lg shadow-black' type='text' placeholder='Email' name='email'></input>
        <textarea className='p-3 rounded-lg text-black text-lg shadow-lg shadow-black pb-5' rows='10' placeholder='Message' name='message'></textarea>
        <button className='my-2 mx-auto flex items-center shadow-lg border-2 border-zinc-400 shadow-black px-8 py-3 hover:bg-sky-900 hover:border-sky-900 font-semibold'>Send</button>
      </form>
    </div>
  )
}

export default Contact