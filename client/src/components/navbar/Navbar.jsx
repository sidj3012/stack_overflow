import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import './navbar.css';
import Avatar from '../avatar/Avatar';

import bars from '../../assets/bars-solid.svg';
import logo from '../../assets/logo.png';
import search from '../../assets/search-solid.svg';
const Navbar = ({handleSlidein}) => {
  var User= null;
  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <button className='slide-in-icon' onClick={()=>handleSlidein()}>
          <img src={bars} alt='bars' width='15'/>
        </button>
        <div className="navbar-1">
          <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt='logo' />
          </Link>
          <Link to='/' className='nav-item nav-button res-nav'>
          About
          </Link>
          <Link to='/' className='nav-item nav-button res-nav'>
            Products
          </Link>
          <Link to='/' className='nav-item nav-button res-nav'>
            For Teams
          </Link>
          <form>
            <input type="text" placeholder='Search...'/>
            <img src={search} alt="search" width='18' className='search-icon'/>
          </form>
        </div>
        <div className="navbar-2">
          {User===null ?(
            <Link to='/' className='nav-item nav-links'>
              Log In
            </Link>
          ):(
            <>
              <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white'>
                <Link to='' style={{color:'white', textDecoration:"none"}}>
                </Link>
              </Avatar>
              <button className='nav-item  nav-links'>Log Out</button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
