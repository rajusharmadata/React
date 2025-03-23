import { useState } from "react"
export default function Counter() {
    let [count,setcount] = useState(0); // create a usestate counter 
    

 function increment() {
    setcount(count+1);
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