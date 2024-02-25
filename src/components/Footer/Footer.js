import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer-height'>
      <footer>
        <div className="background">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="100%"
            height="100%"
            viewBox="0 0 1600 900"
          >
            <defs>
              <linearGradient id="bg" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#6F4E37' }} /> {/* Dark coffee color */}
                <stop offset="100%" style={{ stopColor: '#D2B48C' }} /> {/* Light coffee color */}
              </linearGradient>

              <path
                id="wave"
                fill="url(#bg)"
                d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
          s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
              />
            </defs>
            <g>
              <use xlinkHref="#wave" opacity=".3">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="8s"
                  calcMode="spline"
                  values="270 230; -334 180; 270 230"
                  keyTimes="0; .5; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite"
                />
              </use>
              <use xlinkHref="#wave" opacity=".6">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="6s"
                  calcMode="spline"
                  values="-270 230;243 220;-270 230"
                  keyTimes="0; .6; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite"
                />
              </use>
              <use xlinkHref="#wave" opacity=".9">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="4s"
                  calcMode="spline"
                  values="0 230;-140 200;0 230"
                  keyTimes="0; .4; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite"
                />
              </use>
            </g>
          </svg>
        </div>

        <section>
          <ul className="socials">
            <li><a className="fa-brands icons fa-facebook"></a></li>
            <li><a className="fa-brands icons fa-twitter"></a></li>
            <li><a className="fa-brands icons  fa-linkedin"></a></li>
            <li><a className="fa-brands icons fa-instagram"></a></li>
          </ul>
          <ul className="links">
            <Link to="/home">
            <li><a>Home</a></li>
            </Link>

            <Link to="/contact">
            <li><a>Contact</a></li>
            </Link>

            <Link to="/menu">
            <li><a>Menu</a></li>
            </Link>

            <Link to="/review">
            <li><a>Review</a></li>
            </Link>

            <Link to="/faq">
            <li><a>FaQ</a></li>
            </Link>
            
          </ul>
          <p className="legal">© 2024 All rights reserved - Coffee Shop</p>
        </section>
      </footer>

    </div>
  );
};

export default Footer;
