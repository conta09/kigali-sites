import React from 'react'
import Description from './Description'

const Temp = () => {
  return (
  <div className="">

  <div className="flex gap-4">
      <div className="w-3/4 bg-white p-4">
        {/* Left container content */}
      <Description />
        
      </div>
      <div className="flex justify-center flex-wrap w-1/4 bg-[#FAFAFA] p-4 ">
        {/* Right container content */}
    
      </div>
    </div>
    <div className="desc bg-white pt-5">
     <h1 className="font-bold text-start ml-5 text-[1rem] py-7 text-[#353434]" >Static Website template </h1>
     <div className="theme-desc w-3/5 m-4">
     <p className='p-4'>The theme is packed with lots of pre-designed widgets for Elementor page builder. Gallery, Portfolio, Video, Blog and much more. Gilber is 100% responsive and Retina ready theme, which is very important for web development and our customers.</p>
     <p className='p-4'>We made the theme compatible with such premium plugins as Elementor, ACF Pro etc. This plugins will help you to create gorgeous pages and layouts fast and easy without coding.</p>
     <p className="p-4">We handcrafted this theme with a lot of care for simplicity and visual appeal. We wanted to match a wide spectrum of different types of content, build a theme as adaptable as possible.</p>
     <h2 className='p-4 font-bold text-[1rem] '>Features</h2>
     </div>
    
    </div>




  </div>
   
  
  )
}

export default Temp
