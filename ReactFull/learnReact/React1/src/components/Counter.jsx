import React, { useState } from 'react'

export default function Counter() {

const [count,setCount] = useState(0);
// how to use state work in real componets
const [style,setStyle] = useState({backgroundColor:`rgb(256,256,256)`})
  const handlecount = ()=>{
    setCount(count+1)
    // random number generate
   const  red = Math.floor(Math.random()*256);
   const  green = Math.floor(Math.random()*256);
   const blue = Math.floor(Math.random()*256);
   // har bar jo naya color generate ho raha hai usko set kar raha hai 
     setStyle( {
      backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    })


  };

  // how to random color genreate



  return (
  <div className='p-4 h-screen w-screen ' style={style}>
      <p className='text-2xl text-black text-center'>{count}</p>
      <button onClick={handlecount} className='bg-blue-400 py-3 px-2 rounded'>increase Counter</button>
    </div>
  )
}
