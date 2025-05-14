// How work the props in recat.jsx i give a simple example to  undestand it how props work in real life components me

import React from 'react'
// in the button function ke ander ham jo value recive karte hai jiske madat se ham dynamic render karwate hai so
function Button({text,color}) {
  return (
    <div>
     {/* is buuton components ke ander ham dynamic render karwa rahe hai  with the help of componet0 */}
      <button className={`py-1 px-4 ${color} rounded m-2`}>{text}</button>
    </div>
  )
}

export default Button
