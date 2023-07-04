import{PRODUCTS} from '../Products.jsx'
import Product from '../componets/Product.jsx'
import '../componets/Products.css'
import{animate,motion,useMotionValue,useSpring} from "framer-motion"
const Home = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}
    exit={{opacity:0,x:"-100%"}}
    className='shop_title'>
        <h1>welcome to my candy shop</h1>
        
        <div className='products' >
        {PRODUCTS.map((product)=>(
          <Product data={product}/>
        ))}
        </div>
        
    </motion.div>
    
  )
}

export default Home