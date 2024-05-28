import React from 'react'


const BizDetails = ({icon,title,information}) => {
  return (
    <div>
      <h2 className='text-[1.5rem] font-normal' >{title}</h2>
      <p className='font-light text-[1rem]'>{information}</p>
    </div>
  )
}

export default BizDetails;
