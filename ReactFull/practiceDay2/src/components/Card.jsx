import { useState } from "react";
import Button from "./Button";

function Card({ item ,handler,interstedhandler}) {
  const[Readmore,SetReadmore] = useState(false);
  const { url, price, city, About, id } = item;
  const decription = `${About.substring(0,200)}....`
  
function ReadmoreHandler(){
  SetReadmore(!Readmore);
  
}




  return (
    <div className="flex justify-center items-center px-2 sm:block ">
      <div className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md bg-white rounded-lg shadow-lg overflow-hidden m-4">
        <img
          src={url}
          alt={city}
          className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
        />

        <div className="p-3 sm:p-4 md:p-5">
          <h3 className="text-blue-600 font-bold text-lg sm:text-xl md:text-2xl mb-1">
            ₹ {price}
          </h3>
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl mb-2">
            {city}
          </h1>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 hover:cursor-pointer">
            {Readmore? About:decription}
            <span onClick={ReadmoreHandler} className="text-blue-400">
            {Readmore? 'Show less': 'more show'}
            </span>
          </p>

          <div className="flex justify-center">
            <button onClick={()=>{handler(id)}} className="w-full sm:w-auto border-2 border-red-500 text-red-500 rounded px-4 sm:px-6 py-2 hover:bg-red-500 hover:text-white transition duration-300">
              Not Interested
            </button>
            <button onClick={()=>{
              interstedhandler(id);
            }} className="w-full sm:w-auto border-2 border-green-500 text-green-500 rounded px-4 sm:px-6 py-2 hover:bg-green-500 hover:text-white transition duration-300 ml-2">
             Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
