import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Navbar from './componets/Navbar'
import RoutesProject from './componets/RoutesProject'
import { ShopContextProvider } from './context/Context-shop'
function App() {
  

  return (
   <div className='app'>
    <ShopContextProvider>
      <Router>
        <Navbar/>
        <RoutesProject/>
      </Router>
    </ShopContextProvider>
   </div>
  )
}

export default App
