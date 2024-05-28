import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({imageurl,cname,description}) => {
  return (
  
    <Link to="" className="template-card m-6 grid grid-cols-1 bg-white rounded-lg shadow-xl">
      <img className="h-40 w-60 object-cover rounded-t-md" src={imageurl} alt="profile" />
      <div className="p-4">
        <h2 className="text-[0.8rem] font-semibold mb-1">{cname}</h2>
        <p className="text-[#6A6A6A]  text-[0.7rem] font-bold ">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
