import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Navbar from './componets/Navbar'
import RoutesProject from './componets/RoutesProject'

function App() {
  

  return (
   <div className='app'>
   
      <Router>
        <Navbar/>
        <RoutesProject/>
      </Router>
    
   </div>
  )
}

export default App
