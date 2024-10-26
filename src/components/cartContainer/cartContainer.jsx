import './cart-container.css'
import Cart from '../Cart/cart'
import About from '../about/about'
export default function CartContainer({handleIsActiveState, isActive, selectedProduct, handleDelete}){
// console.log(isActive);

    return(
        <div className='cart-container sticky'>
            <h2>Cart Container</h2>
            <div className=" flex">
                <button onClick={()=>handleIsActiveState('cart')} className={`${isActive.cart? " active btn-t":"btn-t"}`}>Cart</button>
                <button onClick={()=>handleIsActiveState('about')} className={`${isActive.cart? "  btn-t":"btn-t active"}`}>About</button>
            </div>
            {isActive.cart?<Cart handleDelete={handleDelete} selectedProduct={selectedProduct}></Cart> :<About></About>}
        </div>
    )
}