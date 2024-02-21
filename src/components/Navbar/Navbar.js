
import React, { useEffect, useState } from 'react';
import '../Navbar/Navbar.css'


function Navbar() {
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let scroll_top = window.scrollY;
      const el_autohide = document.querySelector('.autohide');

      if (scroll_top < lastScrollTop) {
        el_autohide.classList.remove('scrolled-down');
        el_autohide.classList.add('scrolled-up');
      } else {
        el_autohide.classList.remove('scrolled-up');
        el_autohide.classList.add('scrolled-down');
      }
      setLastScrollTop(scroll_top);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav className="autohide Navbar navbar navbar-expand-lg  bg-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Coffee Shop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
          </ul>
          <div className="d-flex align-items-center me-5 ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Menu</a>
            </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#">Blog</a>
              </li>
            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">FaQ</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Subscription</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
              
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
