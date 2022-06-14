import React from 'react';
import { Title, Text } from '../';
import Fresa5 from "../../assets/images/img-fresas-5.png";
import Fresa6 from "../../assets/images/img-fresas-6.png";
import Fresa7 from "../../assets/images/img-fresas-7.png";
import Fresa8 from "../../assets/images/img-fresas-8.png";
import Fresa9 from "../../assets/images/img-fresas-9.png";
import '../../assets/styles/information.scss';

export const Information = () => {
  const stats = [
    { title: 'Contenido energético kJ/kcal', value: '413,2/97,9' },
    { title: 'Proteínas (g)', value: '5.3' },
    { title: 'Grasas (lípidos) (g)', value: '2.1' },
    { title: 'Carbohidratos (Hidratos de carbono) (g)', value: '12.4' },
    { title: 'Azúcares (g)', value: '7.7' },
    { title: 'Azúcares añadidos (g)', value: '0.1' },
    { title: 'Fibra dietética(g)', value: '0.0' },
    { title: 'Sodio (mg)', value: '92.7' },
    { title: 'Calcio (g)', value: '199.6' },
    { title: '%VNR*', value: '22' },
  ]
  return (
    <main className="information" id="information">
      <img data-aos="fade-up" className="fresa fresa-5" src={Fresa5} alt="Fresas" />
      <img data-aos="fade-up" className="fresa fresa-6" src={Fresa6} alt="Fresas" />
      <img data-aos="fade-up" className="fresa fresa-7" src={Fresa7} alt="Fresas" />
      <img data-aos="fade-up" className="fresa fresa-8" src={Fresa8} alt="Fresas" />
      <img data-aos="fade-up" className="fresa fresa-9" src={Fresa9} alt="Fresas" />
      <section className="information__container container">
        <Title>Información nutrimental</Title>
        <div data-aos="fade-right"  className="information__description">
          <ul>
            <li>Vitalínea® Bebible Guayaba 217gr</li>
            <li>Valor promedio por porción de 217gr</li>
            <li>Porciones por envase: 1</li>
          </ul>
          <Text>
            <strong>Ingredientes:</strong>
            <br />
            Leche descremada pasteurizada y/o reconstituida
            pasteurizada de vaca. 3.5% preparado de fruta guayaba (acesulfame K y
            sucralosa (27.2mg/100g)), crema, almidón modificado, maltodextrina y
            cultivos lácticos.
          </Text>
        </div>
        <div data-aos="fade-left"  className="information__stats">
          {
            stats.map((item, index) => (
              <p key={index}>
                <span>{item.title}</span>
                <span>{item.value}</span>
              </p>
            ))
          }
        </div>
      </section>
    </main>
  )
}
