import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {MdFingerprint} from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Button } from './Button';
import { IconContext } from 'react-icons/lib';
import "./Navbar.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleclick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 980){
      setButton(false);
    }else{
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className="navbar">
        <div className="navbar-container container">
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                <MdFingerprint className='navbar-icon'/>
                LANDING
            </Link>
            <div className="menu-icon" onClick={handleclick}>
                {click ? <FaTimes/> : <FaBars/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className="nav-item">
                 <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                    Home
                 </Link>
               </li>
               <li className="nav-item">
                 <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                    Services
                 </Link>
               </li>
               <li className="nav-item">
                 <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                    Products
                 </Link>
               </li>
               <li className="nav-btn">
                 {button ? (
                    <Link to="/" className="btn-link" >
                        <Button buttonStyle='btn--outline'>SIGN UP</Button>
                    </Link>
                 ) : (
                    <Link to="/" className="btn-link" >
                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>SIGN UP</Button>
                    </Link>
                 )}
               </li>
            </ul>
        </div>
      </div>
      </IconContext.Provider>
    </>
  )
}

export default Navbar