
import React,{useContext} from 'react'
import'./cartitem.css'
import { ShopContext } from '../context/Context-shop';

const CartItem = (props) => {
    const {id,productName,price,productImage}=props.data;
    const { cartItems,addToCart,removeFromCart }=useContext(ShopContext)
//adição dos doces de forma logica 
//exibição no carrinho
  return (
    <div className='cartitem'>
        <img src={productImage} alt="" />
        <div className='descrit'>{productName} </div>
        <p> ${price}</p>
        <div className='count'>
            <button onClick={()=>removeFromCart(id)}> - </button>
            <input value={cartItems[id]} />
            <button onClick={()=>addToCart(id)}> + </button>
        </div>
    </div>
  )
}

export default CartItem