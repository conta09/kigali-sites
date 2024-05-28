import React from 'react'
import { Link } from 'react-router-dom';

const Card = () => {
  return (
 <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-[50rem] mb-4 pt-6">
      <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
        <h2 id="pricing" className=" text-[2rem] font-semibold  ">
          Pricing
        </h2>
        <p className="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl"></p>
      </div>

      <div id="pricing" className="grid grid-cols-1 gap-4 mt-4 leading-7  text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
        {/* Price 1 */}
        <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border-2 border-[#7E9CCF] rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
          {/* Price details */}
          <ul class="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        1 Website
                    </li>
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SSL (HTTPS)
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SiteFast Domain
                    </li>
           </ul>
          
        </div>

        {/* Price 2 */}
        <div className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-[#111827] border-2 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
          {/* Price details */}
          <ul class="flex-1 p-0 mt-4 ml-5 leading-7 text-white border-0 border-gray-200">
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-normal leading-7 text-[#9AA1AD] sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        1 Website
                    </li>
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-normal leading-7 text-[#9AA1AD] sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SSL (HTTPS)
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-normal leading-7 text-[#9AA1AD] sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SiteFast Domain
                    </li>
           </ul>
           <Link  to="" className='pt-5'><h2  className="inline-flex justify-center w-full px-4 py-3  font-sans text-sm leading-none text-center text-white no-underline bg-blue-600  rounded-[10px] cursor-pointer   sm:text-base md:text-lg">
            Get started
            </h2></Link>
        </div>

        {/* Price 3 */}
        <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border-2  border-[#7E9CCF] rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
          {/* Price details */}
          <ul class="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        1 Website
                    </li>
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SSL (HTTPS)
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SiteFast Domain
                    </li>
           </ul>
        </div>
      </div>
    </div>    

  );
};

export default Card;
