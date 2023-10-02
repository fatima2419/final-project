import React from 'react'
import '../App.css';
import logoo from './logoo.png'
export default function Navbar() {
  return (
    <div>
      <div className="navbar">
      <div className="logo">
        <img src={logoo} alt="Logo" width="30" height="30" /> 
       <div className='logoname'>COMPLEX.IQ</div>
      </div>
      <div className="nav-options">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/complex">Complex</a>
          <a href="/contact">Contact</a>
        </div>
      <div className="buttons">
        <button className="button login">LOGIN</button>
        <button className="button signup">SIGN UP</button>
      </div>
    </div>
    </div>
  )
}
