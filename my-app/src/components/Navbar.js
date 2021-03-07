import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Navbar.css';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton]=useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton= () =>{
        if (window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    
    window.addEventListener('resize', showButton)

    return (
        <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
            Menu 
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul1 className ={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                        </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Shit
                        </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Shit
                        </Link>
                </li>

            </ul1>
            
        </div>
      </nav>
    </>
    );
}

export default Navbar;
