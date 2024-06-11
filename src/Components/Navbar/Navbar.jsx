import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="Dis">
        <h1>
          Half-Yearly Sale is on now! <span>Up to 50% off. Sale</span>
        </h1>
      </div>
      <div className='Nav'>
        <Link to="/" className='Nord'> <h1>NORDSTROM</h1> </Link>
              
              <div className='Search'>
                  
              </div>
         <Link to="/Signin" className='link'>  <h4>Sign In</h4> </Link> 
         <Link to="/Stores" className='link'> <h4>Stores</h4> </Link> 
         <Link to="/Purchases" className='link'> <h4>Purchase</h4> </Link> 

          </div>
          <hr />
    </>
  );
}

export default Navbar






