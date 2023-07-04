import { useLocation,Route,Routes } from "react-router-dom";
import Home from '../pages/Home.jsx'
import Cart from '../pages/Cart.jsx'



const RoutesProject = () => {
  return (
    //rotas
    <div>
      
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
      
    </div>
  )
}

export default RoutesProject