import { useState } from "react"
export default function Counter() {
    let [count,setcount] = useState(0); // create a usestate counter 
    // re -- render state 
    console.log(count);

 function increment() {
    // This is behavie like Synchronous function
    setcount((currCount) => {
        return currCount + 1
 });
    setcount((currCount) => {
        return currCount + 1
 });
  // This is behavie like Asyncronous function 
    // setcount(count+1);
    // setcount(count+1);

    console.log(count);
    }
    

    return (
        <>
        <h1>Counter</h1>
        <p> count = {count}</p>
        <button onClick={increment}> button </button>
        </>
    )
    }