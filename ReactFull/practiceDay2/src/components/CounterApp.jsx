import { useState } from "react"

function CounterApp(){
  const[count,Setcount]= useState(0)
   function decrementHandler(){
    if(count>0){
        Setcount(()=>{
      return count-1;
    })
    }
  
   }

     function incrementHandler(){
     Setcount((prevescount)=>{
      return prevescount+1;
    })
   }
   function RestButtonHandler(){
    Setcount(0);
   }
  
  return(
    <div>
      <h1>This is  Counter App 
      </h1>

      <button onClick={decrementHandler}style={{fontSize:'30px', padding:'10px' ,margin:'20px'}}>-</button>
      {count}
      <button onClick={incrementHandler}style={{fontSize:'30px', padding:'10px' ,margin:'20px'}}>+</button>
      <br />
      <button onClick={RestButtonHandler} style={{backgroundColor:'blue', padding:'10px' ,margin:'20px'}}>Reset</button>
    </div>
  )
}

export default CounterApp