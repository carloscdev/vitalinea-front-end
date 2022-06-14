import React from 'react';
import LogoDanone from '../../assets/images/img-logo-danone.png';
import LogoFooter from '../../assets/images/img-logo-footer.png';
import '../../assets/styles/footer.scss';

export const Footer = () => {
  return (
    <footer className="footer container">
      <figure className="footer__first-logo">
        <img src={LogoDanone} alt="Logo Danone" />
      </figure>
      <div className="footer__links">
        <p>
          <a
            href="https://me.carlosc.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Términos y condiciones
          </a>
          |
          <a
            href="https://me.carlosc.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Políticas de privacidad
          </a>
          |
          <a
            href="https://me.carlosc.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aviso de privacidad
          </a>
        </p>
        <p>
          Danone de México 2017 ©. Todos los derechos reservados 2017
        </p>
      </div>
      <figure className="footer__second-logo">
        <img src={LogoFooter} alt="Logo Vitalinea" />
      </figure>
    </footer>
  )
}
