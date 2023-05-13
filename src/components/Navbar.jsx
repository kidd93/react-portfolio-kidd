import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const click = () => setNav(!nav)

  return (
    <div className='fixed flex justify-end w-full px-3 text-zinc-100 lg:text-3xl font-bold z-20'>

      <div onClick={click} className='flex justify-center lg:m-10 lg:text-[30px] text-gray-100 z-20'>
        {!nav ? <FaBars className='hover:text-cyan-400' /> : <FaTimes className='hover:text-[#282828]' />}
      </div>

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-cyan-700 flex flex-col justify-center items-center'}>
        <li className='hover:text-[#282828] pb-5'>
          <Link onClick={click} to='home' smooth={true}>Home</Link>
        </li>
        <li className='hover:text-[#282828] pb-5'>
          <Link onClick={click} to='about' smooth={true}>About</Link>
        </li>
        <li className='hover:text-[#282828] pb-5'>
          <Link onClick={click} to='projects' smooth={true}>Projects</Link>
        </li>
        <li className='hover:text-[#282828]'>
          <Link onClick={click} to='contact' smooth={true}>Contact</Link>
        </li>
      </ul>

    </div>
  )
}

export default Navbar