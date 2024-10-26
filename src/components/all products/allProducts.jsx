import { useEffect, useState } from 'react'
import './allProducts.css'
import SingleProducts from '../SingleProducts/SingleProducts'

export default function AllProducts({handleSelectedProduct}){
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])
    // console.log(products);

    return(
        <div className='allProduct'>
            <h2>allProduct.jsx</h2>
            <div className='flex'>
            {
                products.map((p)=><SingleProducts handleSelectedProduct={handleSelectedProduct} key={p.id} product={p} ></SingleProducts>)
            }

            </div>
            

        </div>
    )
} 