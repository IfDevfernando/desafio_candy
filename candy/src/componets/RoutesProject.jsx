import { useLocation,Route,Routes } from "react-router-dom";
import Home from '../pages/Home.jsx'
import Cart from '../pages/Cart.jsx'
import{AnimatePresence} from "framer-motion"


const RoutesProject = () => {

  const location=useLocation()
  return (
    //rotas
    <div>
      <AnimatePresence location={location} key={location.pathname}>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default RoutesProject