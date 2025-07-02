import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card(porps) {
  const { name, job, image, text } = porps.reviews;
  const length = porps.allreviews.length;
  console.log(length);
  let id = porps.id;
  let Setid = porps.Setid;
  function lefthandler() {
    if (id <= 0) {
      Setid(length-1);
    } else {
      Setid((prev) => prev - 1);
    }
  }
  function rightHandler() {
    if (id >= length-1) {
      Setid(0); // jitna id hoga waha tak chalega
    } else {
      Setid((prev) => prev + 1); //
    }
  }
  function Randomhandlere() {
    let random = Math.floor(Math.random() * length);
    Setid(random);
  }

  return (
    <div className="flex flex-wrap md:px-40 justify-center items-center bg-white relative rounded-md hover:shadow-md ">
      <div className=" absolute flex flex-wrap rounded-full bg-blue-500
       h-24 w-24 sm:h-40 sm:w-40
       left-1 top-[-45px] sm:left-4 sm:top-[-45px]">
        <img
          src={image}
          alt={name}
          className="object-cover  rounded-full relative top-2 right-0.5 "
        />
      </div>
      <div className="flex flex-col flex-wrap  justify-center items-center w-96 p-5">
        <h1 className="text-2xl font-bold ">{name}</h1>
        <h5 className="font-bold opacity-50">{job}</h5>
        <button className="text-blue-700 ">
          <FaQuoteLeft />
        </button>

        <p className="opacity-75">{text}</p>
        <button className="text-blue-700  ">
          <FaQuoteRight />
        </button>

        <div className="flex gap-2.5 mt-4 p-2.5">
          <button onClick={lefthandler}className="opacity-75 cursor-pointer" >
            <FaChevronLeft />
          </button>
          <button onClick={rightHandler} className="opacity-75 cursor-pointer">
            <FaChevronRight />
          </button>
        </div>
        <button
          onClick={Randomhandlere}
          className="bg-violet-400 hover:bg-violet-500 px-2 py-1 rounded-sm m-6 text-white text-lg cursor-pointer"
        >
          Suprise Me
        </button>
      </div>
    </div>
  );
}

export default Card;
