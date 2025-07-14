import { useState } from 'react'
import Spinner from './Spinner'
import useGif from '../Hook/useGif'

const RandGif2 = () => {
  const [tag, settag] = useState('car')

  const { Loding,fetchData,Gifs } = useGif(tag);

  // const RandomGifHanler = () => {
  //   // console.log(tag)
  //   fetchData()
  //   // do somthings
  // }
  const onchangeHanler = (event) => {
    settag(event.target.value)
  }

  return (
    <div className=" sm:w-5/12  w-96 border border-gray-500 rounded shadow bg-gradient-to-bl from-gray-700 to-[#242323] shadow-gray-400 sm:h-8/12  h-[600px] flex flex-col items-center pb-20 mb-15">
      <div>
        <h1 className="t</div><div classNext-center text-xl font-bold mt-3 text-white">
          Random Gifs
        </h1>
      </div>
      <div className="w-80 h-80 flex items-center justify-center mt-8">
        {Loding ? (
          <Spinner />
        ) : (
          <img
            src={Gifs}
            alt="Random Gifs"
            className=" h-full w-full object-cover"
          />
        )}
      </div>
      <div className="w-72">
        <input
          type="text"
          placeholder="Enter random Things "
          className="bg-gray-600 border text-center focus:text-white mt-6 w-full py-2 px-2 rounded forced-colors:bg-gray-800 focus:via-none focus-visible:blur-none "
          onChange={onchangeHanler}
          value={tag}
        />
      </div>
      <div>
        <button
          className="px-20 py-2 rounded mt-10  border border-gray-400 text-white cursor-pointer
        "
          onClick={()=>fetchData()}
        >
          Generte Ranndom Gifs
        </button>
      </div>
    </div>
  )
}

export default RandGif2
