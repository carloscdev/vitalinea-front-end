import React, { useState } from 'react';
import '../../assets/styles/navbar.scss';
import LogoVitalinea from '../../assets/images/img-logo-vitalinea.png';
import Facebook from '../../assets/images/img-social-facebook.svg';
import Youtube from '../../assets/images/img-social-youtube.svg';
import Instagram from '../../assets/images/img-social-instagram.svg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBurger = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="navbar">
      <section className="navbar__container container">
        <figure className="navbar__logo">
          <img src={LogoVitalinea} alt="Logo Vitalinea" />
        </figure>
        <div
          className={`navbar__btn ${isOpen ? "open" : ""}`}
          onClick={toggleBurger}
        >
          <div className="navbar__btn--burger"></div>
        </div>
        <ul className={`navbar__list ${isOpen ? "open" : ""}`}>
          <li>Nuestros productos</li>
          <li>Disfruta cuidarte</li>
          <li>Blog</li>
          <li>
            <a
              href="https://www.linkedin.com/in/carloscdev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="32" height="32" src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/in/carloscdev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="32" height="32" src={Instagram} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/carloscdev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="32" height="32" src={Youtube} alt="Youtube" />
            </a>
          </li>
        </ul>
      </section>
    </nav>
  )
}
