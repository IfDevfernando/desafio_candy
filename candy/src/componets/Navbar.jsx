import { Link } from 'react-router-dom'
import React from 'react'
import './Navbar.css'
import{FaCandyCane} from 'react-icons/fa'
import{GiCupcake} from 'react-icons/gi'

import{TiShoppingCart} from 'react-icons/ti'
import{BsShop} from 'react-icons/bs'



const Navbar = () => {
 
  
  return (
    //navbar
    <div>
            
        <nav className='container_nav'>
        <h1>
          <b className='container-loli'>
            <GiCupcake className='loli'/> 
          </b>
        Candy</h1> 
                <div className='links'>
                    <Link to="/" > <BsShop size={25}/> </Link>
                    <Link to="/cart"><TiShoppingCart size={25}/> </Link>
                </div>
        </nav>
    </div>
  )
}

export default Navbar