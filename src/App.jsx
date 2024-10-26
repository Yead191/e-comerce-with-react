import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllProducts from './components/all products/allProducts'
import CartContainer from './components/cartContainer/cartContainer'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: 'cart'
  })





  const [selectedProduct, setSelectedProduct] = useState([])


  const [price, setPrice] = useState(0)


  const handleIncreasePrice= (pr)=>{
    const finalPrice = price + pr
    const formattedPrice = parseFloat(finalPrice.toFixed(2))
    setPrice(formattedPrice)
  }
  const handleDecreasePrice= (id)=>{
    const product = selectedProduct.find((p)=> p.id == id)
    const finalPrice2 = price - product.price
    const formattedPrice = parseFloat(finalPrice2.toFixed(2))
    setPrice(formattedPrice)
  }


  const handleDelete = (id)=>{
    handleDecreasePrice(id)
    const remProducts = selectedProduct.filter((p)=> p.id != id)
    setSelectedProduct(remProducts)
  }




  const handleSelectedProduct = (product) => {
    const ifExist = selectedProduct.find((p) => p.id == product.id)
    if (ifExist) {
      alert('mal ta age thekei ache')

    }
    else {
      handleIncreasePrice(product.price)
      const newProduct = [...selectedProduct, product]
      setSelectedProduct(newProduct)
    }



  }
  // console.log(selectedProduct);







  const handleIsActiveState = (status) => {
    if (status == 'cart') {
      setIsActive({
        cart: true,
        status: 'cart'
      })
    }
    else {
      setIsActive({
        cart: false,
        status: 'about'
      })
    }
  }
  // console.log(isActive);

  return (
    <>
    <Navbar price={price} selectedProduct={selectedProduct}></Navbar>
    <div className='flex'>
      <AllProducts handleSelectedProduct={handleSelectedProduct}></AllProducts>
      <CartContainer handleDelete={handleDelete} selectedProduct={selectedProduct} isActive={isActive} handleIsActiveState={handleIsActiveState} ></CartContainer>
    </div>
    </>
  )
}

export default App
