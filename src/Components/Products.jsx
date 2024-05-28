import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ imageSource, description, linkPath }) => {
  return (
  
    <Link to={linkPath} className="template-card lg:m-6 m-2  sm:gap-4 grid lg:grid-cols-1  rounded-md">
      <div className="">
      <img className="lg:w-[230px]  lg:h-[180px] h-[150px] w-[200px]  object-cover rounded-lg   " src={imageSource} alt="profile" />
      <div className="p-4">
        <h2 className="text-[1rem] font-semibold mb-1 m">{description}</h2>
        <p className="text-[#6A6A6A]  text-[0.7rem] font-bold ">By contamucyo</p>
      </div>
      </div>
   
    </Link>
    
  );
};

export default Card;
