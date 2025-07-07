
// import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Homework from './components/Homework'



function App() {
// const[first,setfirst] = useState("");
// const[last,setlast] = useState("");


//  function FirstNameHandler(event){
//   setfirst(event.target.value)
  
//  }

//   function LastNameHandler(event){
//     setlast(event.target.value);
//  }

  return (
    <>
     {/* <div>
      <h1>Form</h1>

       <input type="text" onChange={FirstNameHandler}
       placeholder='First Name'
       />
       <br />
       <input type="text" onChange={LastNameHandler}
       placeholder='Last Name'
       />

       <h1>First Nam :{first}</h1>
       <h2>Last Name : {last}</h2>

     </div> */}
     {/* <Form/> */}
     <div className=''>
     <Homework/>

     </div>
    </>
  )
}

export default App
