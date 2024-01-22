import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-4'>
      <h1 className='font-bold'>LOGO</h1>
      <ul className='flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact Us</li>
        <li className='p-4'>SignIn</li>

      </ul>
    </div>
  )
}

export default Header
