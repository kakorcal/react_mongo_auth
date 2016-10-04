import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Navbar extends Component{
  render(){
    return (
      <nav className='rma-nav'>
        <p className='rma-title'><Link to='/'>Home</Link></p>
        <ul className='rma-nav-menu'>
          <li className='rma-item'>
            <Link to='/login'>Login</Link>
            <ul className='rma-nav-submenu'>
              <li className='rma-subitem'><span>One</span></li>
              <li className='rma-subitem'><span>Two</span></li>
              <li className='rma-subitem'><span>Three</span></li>
            </ul>
          </li>
          <li className='rma-item'>
            <Link to='/signup'>Sign Up</Link>
            <ul className='rma-nav-submenu'>
              <li className='rma-subitem'><span>One</span></li>
              <li className='rma-subitem'><span>Two</span></li>
              <li className='rma-subitem'><span>Three</span></li>
            </ul>
          </li>
          <li className='rma-item'>
            <Link to='/about'>About</Link>
            <ul className='rma-nav-submenu'>
              <li className='rma-subitem'><span>One</span></li>
              <li className='rma-subitem'><span>Two</span></li>
              <li className='rma-subitem'><span>Three</span></li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}