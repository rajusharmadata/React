import React, { useState } from 'react'
import Card from './Card'

function Testimonial(porps) {
 const reviews = porps.reviews;
 const[id,Setid] = useState(0);

 console.log(reviews)
  
  return (
       <div className=''>
        

        <Card reviews = {reviews[id]} id = {id} Setid = {Setid} allreviews = {reviews}/>
       </div>
  )
}

export default Testimonial