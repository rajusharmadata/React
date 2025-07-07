import React from 'react'

function ProductDate(props) {
  return (
    <div className='bg-black text-white w-[80px] p-4 rounded-2xl justify-center items-center flex
    flex-col '>
      <p>{props.day}</p>
      <p>{props.month}</p>
      <p>{props.year}</p>
    </div>
  )
}

export default ProductDate;
