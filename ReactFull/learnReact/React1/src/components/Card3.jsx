import React from 'react';

function Card3({ value ,buttonHandler}) {
  const { name, profestion, charge, image } = value;

  return (
    <div className=" p-4">
      <div className="h-70 w-52 bg-white rounded-2xl overflow-hidden shadow-lg transform transition hover:scale-105 duration-300">
        <div className="h-32 w-full">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-3">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <h5 className="text-sm text-gray-600">{profestion}</h5>
          <p className="text-blue-500 font-semibold mt-2">{charge}</p>
           <button onClick={buttonHandler}  className='bg-blue-400 py-1 px-3 mt-4 rounded'>Add cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card3;
