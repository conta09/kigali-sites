import React from 'react';
import Navbar from './Navbar';
import About from '../pages/About';
import Home from '../pages/Home';
import Button from './button';
import Products from './Products';
import Footer from './footer';
import Pricing from './Pricing';
import { Link } from 'react-router-dom';
import Card from './Card';
import BizDetails from './BizDetails';


const cardData = [
  { imageSource: '/profile1.png', description: 'Startups', linkPath: 'templates' },
  { imageSource: '/firm.png', description: 'Firms and companies', linkPath: 'templates' },
  { imageSource: '/Group 16.png', description: 'Hotels', linkPath: 'templates' },
  { imageSource: '/Group 2.png', description: 'Restaurants', linkPath: 'templates' },
  
  // Add more objects for additional cards with their respective linkPaths
];


const tempData =[
  
];


const App = () => {
  return (
    <div className="bg-[#FAFAFA]"> 
      <Navbar />
      
      <div className="pb-5">
        <h1 className="font-bold text-center text-[3rem] pt-10 mt-10 text-[#353434]" >Elevate Your Online Presence</h1>
        <p className="text-center font-normal pb-4 text-[1.2rem] text-[#6b6969] m-3">Access templates from creative web designers.From just 70,000 RWF.</p>
        <div className="flex justify-center flex-wrap">
      {cardData.map((data, index) => (
        <Products
          key={index}
          imageSource={data.imageSource}
          description={data.description}
          linkPath={data.linkPath} // Pass the linkPath prop
        />
         ))}
         

        </div>
        <div className="bg-[#111827] text-white mr-6 mt-2 ml-auto mr-auto rounded-md w-1/5">
            <Link to="templates"><h1 className='font-semibold text-[0.9rem] text-center mx-3 py-5 '>See more</h1>
            </Link></div>

      </div>


      <div className="text-center my-5">
      <h1 className="font-bold text-center text-[1.5rem] pt-10 mt-10 text-[#0b0b0b]" >"Navigate Through Themes with Ease"</h1>
      <p className='font-normal my-3 text-[#5f5e65] text-center lg:w-[60%] mx-auto '>I've written extensively on the benefits of cost-effective web development, but the truth is, you'll never fully appreciate the value until you experience it for yourself. If you can set aside any reservations and give it a try, I believe you'll wonder how you ever justified spending so much more on web development.</p>

      </div>
      <Footer />

      </div>
      
    
  )
};
export default App;


