import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../api_tools/Button/Button';
import './navbarStyle.css';

export const Navbar = () => {
  return (
    <section className = 'nav'>     
      <Link to='/' className='link'><h2>Own companies</h2></Link>
      <div>
        <Link to='/login'><Button>Log In</Button></Link>
        <Link to='/registration' className='btn'><Button>Sign Up</Button></Link>
        <Link to='/' className='btn'><Button>Log Out</Button></Link>
      </div>
    </section>
  )
}
