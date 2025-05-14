import React, { useState } from 'react'

export const Array = () => {
 const [val,setval] = useState([1,2,3,4,5,6]);
 const [arr,setArr] = useState([
  {name:"Raju",age:26},
  {name:"Amit",age:28},
  {name:"Raushan",age:35}
 ])

 let onclickhandler = ()=>{
  // in this fileter method take a two parameter first is the item it is allocate the indvisual item and second is the index item is denote as index of the array  and also compare the
  // current index and val.lenght index which is the last index of the array

    // setval(() =>val.filter((item,index)=> index!=val.length-1)
    // )
    // Update the state `arr` by mapping through each item; if an item's name is "Raju", replace it with a new object {name: "Raju", age: 50}, otherwise keep the item unchanged.
setArr(() => arr.map(item => item.name === "Raju" ? ({ name: "Raju", age: 50 }) : item));


 }
  return (
    <div className='p-4'>
      {arr.map((item) =>(
       ( <div>
        <h1>{item.name}</h1>
        <h1>{item.age}</h1>
        </div>

       )

      ))}

      <button  onClick={onclickhandler} className='bg-blue-400 rounded-2xl py-2 px-3'>Change in Array</button>
    </div>
  )
}

