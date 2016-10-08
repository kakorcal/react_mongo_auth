import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {logout} from '../../actions/authActions'

class Navbar extends Component{
  logout(e){
    e.preventDefault();
    this.props.logout();
  }

  render(){
    const {isAuthenticated} = this.props.auth;

    const userLinks = (
      <ul className='rma-nav-menu'>
        <li className='rma-item'>
          <a href='#' onClick={this.logout.bind(this)}>Logout</a>
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
    );

    const guestLinks = (
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
    );

    return (
      <nav className='rma-nav'>
        <p className='rma-title'><Link to='/'>Home</Link></p>
        {isAuthenticated ? userLinks : guestLinks}
      </nav>
    );
  }
}

// we expect auth to be in the component 
Navbar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
};

// get a slice of the redux store
function mapStateToProps(state){
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {logout})(Navbar);