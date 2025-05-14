import React, { useState } from 'react'

export const Newobj = () => {
  // how work usestate in object first Things to destructuring the your object
  const[val,setval] = useState({name:"Raju kumar",isBanned:true});
  let onclickhandler = ()=>(setval({...val, isBanned:!val.isBanned ,name:"Raju"}))
  return (
    <div className='p-4 bg-amber-700 h-screen w-full'>
      <h1>name:{val.name}</h1>
      <h1>Banned:{val.isBanned.toString()}</h1>

      <button onClick={onclickhandler} className= {`${val.isBanned? "bg-blue-600":"bg-red-600"} py-1 px-3 rounded-2xl`}>changeBand</button>

    </div>
  )
}

