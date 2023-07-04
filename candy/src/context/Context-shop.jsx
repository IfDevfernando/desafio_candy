

import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Products'
import Product from '../componets/Product';

export const ShopContext=createContext(null)

const getDefaultCart=()=>{
    let cart={}
    for(let i=1; i < PRODUCTS.length + 1; i++){
        cart[i]=0
    }
    return cart;
};

export const ShopContextProvider = (props) => {

    const[cartItems,setCartItems]=useState(getDefaultCart());

        //logita subtotal no rodape do carrinho
        const getTotalAmout=()=>{
            let total=0
            for(const item in cartItems){
                if(cartItems[item] > 0){
                    let itemInfo=PRODUCTS.find((product)=>product.id===Number(item))
                    total +=cartItems[item] * itemInfo.price
                }
            }
            return total;
        }
        //logica de adiçao dos doces ao carrinho
        const addToCart=(itemId)=>{
            setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}))
        }
        //logica de remoção dos doces no carrinho
        const removeFromCart=(itemId)=>{
            setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}))
        }
        //passando os valores para exportar
            const contextValue={cartItems,addToCart,removeFromCart,getTotalAmout}

            
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

