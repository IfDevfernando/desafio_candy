
import React, {useContext} from 'react'



export const Product = (props) => {
    //fazendo chamada API
    //exibição esta sendo feita na page Home 

    const {id,productName,price,productImage}=props.data;
   
  return (
    <div className="product">
        <img src={productImage} />
        <div className="descrit">
            <h3>{productName}</h3>
            <p>${price}</p>
        </div>
        <button className='add_btn' >ADD Cart</button>
    </div>
  )
}

export default Product