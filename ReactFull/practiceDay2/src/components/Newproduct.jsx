// import React, { useState } from 'react'

function Newproduct(props) {
 

  function callingParent(){
    console.log("inside the new product.js");
    console.log(data);
    props.product(data);
  }

  

  
  const data = {
    name:"raju",
    village:"parasdih"
  }

  return (
    <div>
      <h1>This is new product </h1>
      <button onClick={callingParent}>click </button>
    </div>
  )
}

export default Newproduct