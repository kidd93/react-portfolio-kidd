import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const click = () => setNav(!nav)

  return (
    <div className='fixed h-[60px] w-full flex justify-between px-3 place-items-center alignItems:flex-end text-zinc-100 text-2xl font-bold z-20' style={{ display: 'flex', justifyContent: 'right' }}>

      <ul className='hidden md:flex'>
        <li className='hover:text-sky-900'>
          <Link to='home' smooth={true} duration={500}>Home</Link>
        </li>
        <li className='hover:text-sky-900'>
          <Link to='about' smooth={true} duration={500}>About</Link>
        </li>
        <li className='hover:text-sky-900'>
          <Link to='projects' smooth={true} duration={500}>Projects</Link>
        </li>
        <li className='hover:text-sky-900'>
          <Link to='contact' smooth={true} duration={500}>Contact</Link>
        </li>

      </ul>

      <div onClick={click} className='md:hidden text-zinc-100 z-20'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-800 flex flex-col justify-center items-center'}>
        <li className='hover:text-sky-900 pb-5'>
          <Link onClick={click} to='home' smooth={true} duration={300}>Home</Link>
        </li>
        <li className='hover:text-sky-900 pb-5'>
          <Link onClick={click} to='about' smooth={true} duration={300}>About</Link>
        </li>
        <li className='hover:text-sky-900 pb-5'>
          <Link onClick={click} to='projects' smooth={true} duration={300}>Projects</Link>
        </li>
        <li className='hover:text-sky-900'>
          <Link onClick={click} to='contact' smooth={true} duration={300}>Contact</Link>
        </li>
      </ul>

    </div>
  )
}

export default Navbar