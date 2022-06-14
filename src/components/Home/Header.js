import React from "react"
import Vitalinea from "../../assets/images/img-bote-fresa.png"
import SelloAvalado from "../../assets/images/img-sello-avalado.png";
import Healthy from "../../assets/images/img-100-kcal.png";
import Arrow from "../../assets/images/arrow.png";
import Fresa1 from "../../assets/images/img-fresas-1.png";
import Fresa2 from "../../assets/images/img-fresas-2.png";
import Fresa3 from "../../assets/images/img-fresas-3.png";
import Fresa4 from "../../assets/images/img-fresas-4.png";
import { Title, CustomButton, Text } from '../';
import "../../assets/styles/header.scss"

export const Header = () => {
  return (
    <header className="header">
      <img className="fresa fresa-1" src={Fresa1} alt="Fresas" />
      <img className="fresa fresa-2" src={Fresa2} alt="Fresas" />
      <img data-aos="fade-up" className="fresa fresa-3" src={Fresa3} alt="Fresas" />
      <img data-aos="fade-up" className="fresa fresa-4" src={Fresa4} alt="Fresas" />
      <section className="header__container container">
        <figure className="header__image">
          <img width="220" height="auto" src={Vitalinea} alt="Vitalinea" />
        </figure>
        <div>
          <div className="header__tags">
            <p>Sabor: </p>
            <ul>
              <li className="active">Fresa</li>
              <li>Guayaba</li>
              <li>Toronja</li>
            </ul>
          </div>
          <div className="header__description">
            <Title>Vitalínea® Bebible Fresa 217 gr.</Title>
            <Text>
              ¡La presentación ideal para llevar contigo! Vitalínea bebible es la
              opción si eres de las personas que siempre están activas y quieren
              probar algo sano, rico y práctico.
            </Text>
            <CustomButton
              link="https://me.carlosc.dev"
              content="Comprar en Walmart"
            />
            <div className="header__description--logos">
              <figure>
                <img width="62" height="62" src={SelloAvalado} alt="Sello Avalado" />
              </figure>
              <figure>
                <img width="86" height="62" src={Healthy} alt="100 kcal" />
              </figure>
            </div>
          </div>
          <a href="#information" className="header__arrow">
            <img width="22" height="23" src={Arrow} alt="Arrow Down" />
          </a>
        </div>
      </section>
    </header>
  )
}
