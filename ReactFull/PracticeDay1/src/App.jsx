import React from 'react';
import Product from './components/Product';

function App() {

  const ProductList = [
    {
      title:"phone",
      day:20,
      month:"june",
      year:2023
    },
     {
      title:"pen",
      day:30,
      month:"july",
      year:2021
    }, {
      title:"car",
      day:20,
      month:"Augest",
      year:2025
    }
  ]
  return (
      <div className='flex justify-center items-center mt-5 '>
        <div className='bg-yellow-300 justify-center items-center h-[500px] w-[600px] rounded-2xl p-3'>
          <Product product={ProductList}/>
        </div>

      </div>
  )
}

export default App
