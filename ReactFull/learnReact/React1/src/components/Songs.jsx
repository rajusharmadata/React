import React from 'react'

export default function Songs() {
  let data = [
    {name:"ye rate ",discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {name:"jai hanuman ",discription:"Vitae, pariatur voluptatum quos sapiente, voluptatem veritatis"},
    {name:"ye rate ",discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {name:"jai hanuman ",discription:"Vitae, pariatur voluptatum quos sapiente, voluptatem veritatis"},
  ]
  // This is handle the onclick event to handle it

  let handleonclick = ()=>{alert("This is danger")};
  return (
    //This is fragement it use to wrapping of data in single unit to return it
    <>
    <div className='h-screen w-screen bg-sky-200 justify-center items-center flex  flex-col gap-5'>
      {data.map((el,index) =>(
              <div className=' w-90 bg-sky-100 rounded-2xl px-4 py-5' key={index}>
              <h1>{el.name}</h1>
              <p>{el.discription}</p>
              <button  onClick={handleonclick} className='bg-blue-700 text-sky-100 py-2 px-3 rounded mt-5'>Download</button>
            </div>

      ))}
    </div>
    </>
  )
}
