
import React, {useContext} from 'react'
import { ShopContext } from '../context/Context-shop';
import{animate,motion,useMotionValue,useSpring} from "framer-motion"


export const Product = (props) => {
  

  
  
  const {id,productName,price,productImage}=props.data;
  const { addToCart,cartItems }=useContext(ShopContext)

    //passando o id dos items que vão ser somados no button
   const cartItemsAmout=cartItems[id]
  return (
    <div  className="product">
        <img src={productImage} />
        <div className="descrit">
            <h3>{productName}</h3>
            <p>${price}</p>
        </div>
        <motion.button whileHover={{width:100,border:"2px solid white"}} 
        className='add_btn' onClick={()=> addToCart(id)}>
         Buy {cartItemsAmout > 0 && <>({cartItemsAmout})</>} </motion.button>
    </ div>
  )
}

export default Product