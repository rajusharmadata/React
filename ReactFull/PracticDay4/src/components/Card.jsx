import React, { useState } from 'react';
import { LuHeart } from "react-icons/lu";
import { FcLike } from "react-icons/fc";
import { toast } from 'react-toastify';


function Card({ title, imge, description, alt }) {
  const[like,Setlike] = useState(false)
  const showSuccessToast = () => {
    if(like===true){
      toast.error("UnLike");
    }else{
      
      toast.success("Like");

    }
    Setlike(!like);
  }
    
    
  return (
    <div className='bg-[#141414]  rounded-xl shadow-xl w-72 overflow-hidden hover:shadow-xl transition-shadow duration-300 m-2 border border-[#616161]'>
      
      <div className='relative'>
        <img src={imge} alt={alt} className='object-cover h-48 w-full' />
        <div className='absolute bottom-[-20px] right-5 w-10 h-10 rounded-full bg-white bg-opacity-30 flex items-center justify-center transition-colors duration-300 cursor-pointer'>
             { like?(<FcLike onClick={showSuccessToast} className='text-2xl'/>):( <LuHeart onClick={showSuccessToast} className='text-2xl'/>) }
          
        </div>
      </div>
      
      <div className='flex-col justify-center items-center px-1'>
        <h3 className='font-bold mb-2 text-white opacity-90 '>{title}</h3>
        <p className='text-white opacity-90 text-sm text-center '>{description}</p>
      </div>
      
    </div>
  );
}

export default Card;
