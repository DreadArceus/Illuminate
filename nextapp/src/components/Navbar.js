import React, { useEffect, useState } from "react";

function Navbar() {
  const [click, setClick] = useState(false);
 

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            Menu 
            </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul1 className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">Home</li>

            <li className="nav-item">Shit</li>

            <li className="nav-item">Shit</li>
          </ul1>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
