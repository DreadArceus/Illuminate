import React, { useEffect, useState } from "react";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  // window.addEventListener('resize', showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          Menu
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
