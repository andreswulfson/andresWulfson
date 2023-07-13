import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import payonner from '../assets/logo-payoneer.png';
import upwork from '../assets/logo-upwork.png';
// import ln from '../assets/logo-ln.svg';

function footer() {
  return (
    <footer>
      <div className="footer__grid">
        <div className="footer__navigation footer__grid--nav">
          <h3 className="info__title">Andrés Wulfson</h3>
          <NavLink to="/aboutus">About us</NavLink>
          {'  ∙  '}
          <NavLink to="/services">Services</NavLink> {'  ∙  '}
          <NavLink to="/contact">Contact</NavLink>
          <br />
          <NavLink to="/termsandconditions">Terms & conditons</NavLink>
          {'  ∙  '}
          <NavLink to="/privacypolicy">Privacy policy</NavLink> {'  ∙  '}
        </div>
        <div className="info footer__grid--accept">
          <h4 className="info__title">We accept</h4>
          <img src={upwork} alt="upwork" />
          <img src={payonner} alt="payonner" />
          <p>This is to confirm my affiliation with the website</p>
        </div>
        <div>
          <div className="info footer__grid--contact">
            <h4 className="info__title">Contact us</h4>
            <a href="tel:+14782871368" target="_blank" rel="noreferrer">
              +54 9 3416 74 00 84
            </a>
            <br />
            <a
              href="mailto:andreswulfson@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              andreswulfson@gmail.com
            </a>
            <br />
            <a
              href="www.linkedin.com/in/shajarllc"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/andreswulfson
            </a>{' '}
            {/* </div> */}
            {/* <div className="info footer__grid--office"> */}
            {/* <h4 className="info__title"> Office</h4> */}
            <br />
            <br />
            <p>Corrientes 1624, 1, Rosario, Santa Fe, Argentina</p>
          </div>
        </div>
        <h2 className="footer__title footer__grid--title">
          <Link to="/" className="logo">
            Andrés Wulfson
          </Link>
          <br />
          Let&apos;s work together!{' '}
        </h2>
      </div>
    </footer>
  );
}

export default footer;
