// import { useState } from 'react';
import './App.css'

import Newproduct from './components/Newproduct'
import CounterApp from './components/CounterApp';
import Card from './components/Card';
function App() {
//   const[name,Setname] = useState("");

//  function productHandler(data){
//    console.log("This section is the App.js ");
//    Setname(data.name)
//    console.log(data);
//  }



  return (
    <>
    {/* <div> 
      <h1>my name is : {name}</h1>
      <h1>This is App componet </h1>
    </div>


    <Newproduct product = {productHandler}/>
    <CounterApp/> */}
    <Card/>
    </>
  )
}

export default App
