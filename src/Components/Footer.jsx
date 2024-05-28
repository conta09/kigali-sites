// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#000] p-4 text-white text-center">
    <div className="flex flex-col md:flex-row ml-5 py-5">
      <div className="flex-1 text-left">
        <h3 className=" text-[0.9rem] ml-3 text-[#717373] py-3 font-semibold">QUICK LINKS</h3>
        <ul className='flex flex-col font-semibold  text-[0.9rem]  leading-3  '>
            <li className='hover:text-white p-4'><Link to="/">Pricing</Link></li>
            <li className='hover:text-white p-4'><Link to="templates">Templates</Link></li>
            <li className='hover:text-white p-4'><Link to="/">About</Link></li>
            <li className='hover:text-white p-4'><Link to="/">Flash sales</Link></li>
            <li className='hover:text-white p-4'><Link to="templates">Small Business</Link></li>
        </ul>
      </div>
      <div className="flex-1 text-start">
        <h3 className="text-[0.9rem] ml-2 text-[#717373] py-3 font-semibold">CONTACT</h3>
        <ul className='flex flex-col font-semibold  text-[0.9rem]  leading-3  '>
            <li className='hover:text-white p-4'><Link to="/">About</Link></li>
            <li className='hover:text-white p-4'><Link to="/">Flash sales</Link></li>
            <li className='hover:text-white p-4'><Link to="/">Small Business</Link></li>
        </ul>
      </div>
      <div className="flex-1 mt-5">
        <h3 className="text-[0.7rem]  text-[] font-semibold mb-2">Send me tips, trends, freebies, updates & offers.</h3>
        <form>
          <input type="email" placeholder="Enter your email" className="w-50 bg-gray-700 p-2 rounded mb-2" />
          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">Sign Up</button>
        </form>
      </div>
    </div>
    <hr className="h-px bg-[#5a5757c1] w-full mb-3" />
    <div className="text-[#5a5757c1] font-medium ml-auto">
    © 2024 Mucyo conta.
    </div>
  </footer>
);
};
   
export default Footer;
