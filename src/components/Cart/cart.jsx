export default function Cart({selectedProduct, handleDelete}){

    return(
        <div>
            {
                selectedProduct.map((product)=>(
                    <div style={{marginTop: '20px', alignItems: 'center'}} className="flex">
                        <div className="flex-cart">
                            <img style={{width: '50px', height:'100%'}} src={product.image} alt="" />
                            <div>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            </div>
                            
                        </div>
                        <div>
                            <button onClick={()=>handleDelete(product.id)}>Del</button>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}