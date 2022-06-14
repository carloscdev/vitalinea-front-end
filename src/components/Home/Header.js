import React from "react"
import Vitalinea from "../../assets/images/img-bote-fresa.png"
import SelloAvalado from "../../assets/images/img-sello-avalado.png";
import Healthy from "../../assets/images/img-100-kcal.png";
import Arrow from "../../assets/images/arrow.png";
import { Title, CustomButton, Text } from '../';
import "../../assets/styles/header.scss"

export const Header = () => {
  return (
    <header className="header">
      <section className="header__container container">
        <figure className="header__image">
          <img src={Vitalinea} alt="Vitalinea" />
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
