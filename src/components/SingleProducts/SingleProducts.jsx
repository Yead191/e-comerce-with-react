import React, { Children } from 'react'
import './SingleProducts.css'

export default function SingleProducts({product, handleSelectedProduct}) {
    // console.log(product);
    const {id, name, image, description, price }=product


  return (
    <div className='card'>
        <img className='img' src= {image} alt="" />
        <h4>{name}</h4>
        <p>{description}</p>
        <p>${price}</p>
        <button onClick={()=>handleSelectedProduct(product)}>Add to Cart</button>

    </div>
  )
}
