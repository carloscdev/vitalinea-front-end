import React from 'react';
import { Title, Text } from '../';
import '../../assets/styles/information.scss';

export const Information = () => {
  return (
    <main className="information" id="information">
      <section className="information__container container">
        <Title>Información nutrimental</Title>
        <div className="information__description">
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
        <div className="information__stats">
          <p>
            <span>Contenido energético kJ/kcal</span>
            <span>413,2/97,9</span>
          </p>
          <p>
            <span>Proteínas (g)</span>
            <span>5.3</span>
          </p>
          <p>
            <span>Grasas (lípidos) (g)</span>
            <span>2.1</span>
          </p>
          <p>
            <span>Carbohidratos (Hidratos de carbono) (g)</span>
            <span>12.4</span>
          </p>
          <p>
            <span>Azúcares (g)</span>
            <span>7.7</span>
          </p>
          <p>
            <span>Azúcares añadidos (g)</span>
            <span>0.1</span>
          </p>
          <p>
            <span>Fibra dietética(g)</span>
            <span>0.0</span>
          </p>
          <p>
            <span>Sodio (mg)</span>
            <span>92.7</span>
          </p>
          <p>
            <span>Calcio (g)</span>
            <span>199.6</span>
          </p>
          <p>
            <span>%VNR*</span>
            <span>22</span>
          </p>
        </div>
      </section>
    </main>
  )
}
