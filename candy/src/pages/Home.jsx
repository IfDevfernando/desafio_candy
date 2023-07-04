import{PRODUCTS} from '../Products.jsx'
import Product from '../componets/Product.jsx'
import '../componets/Products.css'
const Home = () => {
  return (
    <div className='shop_title'>
        <h1>welcome to my candy shop</h1>
        
        <div className='products' >
        {PRODUCTS.map((product)=>(
          <Product data={product}/>
        ))}
        </div>
        
    </div>
    
  )
}

export default Home