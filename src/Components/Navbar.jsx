import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <div className="drop-shadow-md bg-white">
    <div className='flex  py-2 bg-[#1C2B36]'>
      
        <h1 className='font-bold text-[1.2rem] text-[#1B82D6] py-2 pt-3 ml-10'><Link to="/">KglSites</Link></h1>
      
      
         
        <div className="bg-white mr-6 mt-2 ml-auto rounded-md"><Link to="templates"><h1 className='font-semibold text-[0.9rem] text-center mx-3 py-3 '>Get Templates</h1></Link></div>
    </div>
    <div className="">
    <ul className='flex mx-4 font-normal text-[0.9rem] '>
            <li className='p-4'><Link to="">App Templates</Link></li>
            <li className='p-4'><Link to="">Collections</Link></li>
            <li className='p-4 font-bold text-[#1B82D6]'><Link to="">Hire a freelancer</Link></li>


        </ul>
    </div>
     
  </div>
    
  )
};

export default Navbar
                                                                                                                            