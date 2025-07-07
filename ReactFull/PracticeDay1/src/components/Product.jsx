import React from 'react'
import ProductTitle from './ProductTitle'
import ProductDate from './ProductDate'

 const Product = function Product(props) {
  return (
    <div className='p-2 flex bg-blue-600 rounded-2xl '>

      <ProductDate day = {props.product[0].day}  month = {props.product[0].month} year = {props.product[0].year}/>
      <ProductTitle title = {props.product[0].title}/>

    </div>
  )
}

export default Product
