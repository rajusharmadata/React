import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [input, Setinput] = useState('')
  const[size,Setsize] = useState(window.innerWidth)

  function InputHandler(event){
    Setinput(event.target.value);
    console.log(input)
  }

  // useEffect--hook --vartion -1 EVERY TIME RUN HOGA 
  // useEffect(()=>{
  //   console.log("useEffect is working on the behind ........")
  // })

  // useEffect--hook --vartion -2 FIRST TIME RUN HO JAB PURA COPONENT KA CODE LOAD HO RAHA HOGA 
  //  useEffect(()=>{
  //   console.log("useEffect is working on the behind ........")
  // },[]);

  // useEffect--hook --vartion -3 FIRST TIME TO HOGA + JAB HAM INPUT KE VALUE KO CHANGE KARENGE TO TAB BHI RUN HOGA [input]--ek dependncy ka kaam kar raha hai 
  //  useEffect(()=>{
  //   console.log("useEffect is working on the behind ........")
  // },[input]);

  // USEEFFECT UNMOUNTING SYSTUATION 
  useEffect(()=>{
    console.log("listner added ....")
    return ()=>{
      console.log("listner removed.....")
    }
  },[input]
  )


  // it is good example of the mounting....
  useEffect(()=>{
    console.log(size)
    const handle = ()=>{
      Setsize(window.innerWidth)
    }
      // mounting 
    window.addEventListener('resize',handle);// This line is add the eventlistner
        // Cleanup when unmounting
    ()=>{
      return window.removeEventListener('resize',handle);// remove the EventListner... 
    }
  },[])


  return (
    <>
      <div>
        <input type="text" name="" id=""  onChange={InputHandler}
         />
         <h1>Window size is : {size}</h1>

      </div>
    </>
  )
}

export default App
