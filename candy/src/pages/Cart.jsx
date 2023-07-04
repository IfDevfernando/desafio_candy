
import {useNavigate} from 'react-router-dom'
import React,{useContext} from 'react'
import { PRODUCTS } from '../Products'
import { ShopContext } from '../context/Context-shop'
import CartItem from '../componets/CartItem'
import{BsShop} from 'react-icons/bs'
import{animate,motion} from "framer-motion"
//parte logica da exibição dos items no carrinho
//exibição esta sendo no componets (cartitem)
const Cart = () => {
  const { cartItems,getTotalAmout }=useContext(ShopContext)

  const totalAmount=getTotalAmout()

  const home=useNavigate()

  
  return (
    <motion.div 
    initial={{opacity:0, x:"-100%"}}
    animate={{opacity:1, x:0}}
    transition={{duration:1}}
    exit={{opacity:0,x:"100%"}}
    className='cart-items'>
        <div>

          <h1>Seu Carrinho:</h1>
          
        </div>
        <div className='cartitems'>
          {PRODUCTS.map((product)=>{
                if(cartItems[product.id] !==0){
                  return <CartItem data={product}/>
                }
          })}
        </div>
        {totalAmount > 0 ? (
        <div className='checkout'>
        
          <p><strong>Subtotal:</strong> R${totalAmount}</p>
          <button onClick={()=>home("/")}> <BsShop/> </button>
          <button className='fina'>Finalizar</button>
          </div>
        ):(
          <h1>Seu carrinho esta vazio</h1>
        )}
        
    </motion.div>
  )
}

export default Cart