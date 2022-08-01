import React  from 'react';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';



const NavbarFunc = () => {
 
  const state = useSelector((state)=> state.handleCart);

  
  

    return (
       <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <NavLink className="navbar-brand fw-bold" to="/">Ecommerce Store</NavLink>
    <div className="" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link"  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Product</NavLink>
        </li>
       
        
      </ul>

      <div className='buttons'>
        <NavLink to="/login" className='btn btn-outline-dark'>
          <i className='fa fa-sign-in me-1'></i> Login
        </NavLink>
      </div>

      <div className='buttons'>
        <NavLink to="register" className='btn btn-outline-dark ms-2'>
          <i className='fa fa-user-plus me-1'></i> Register
        </NavLink>
      </div>


      <div className='buttons'>
        <NavLink to="/cart" className='btn btn-outline-dark ms-2'>
          <i className='fa fa-shopping-cart me-1'></i> Cart (0)
        </NavLink>
      </div>
    </div>
  </div>
</nav>
       </div>
    )
  
}

export default NavbarFunc
