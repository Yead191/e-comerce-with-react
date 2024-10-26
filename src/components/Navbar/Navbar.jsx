import React from 'react'
import './Navbar.css'

export default function Navbar({selectedProduct, price}) {
  return (
    <div className='nav'>
        <div className='flex'>
            <div className="logo">
                Logo
            </div>
            <div className="menus flex">
                <li className="item">Home</li>
                <li className="item">Product</li>
                <li className="item">Cart {selectedProduct.length} </li>
                <li className="item">$ {price}</li>
            </div>
        </div>
    </div>
  )
}
