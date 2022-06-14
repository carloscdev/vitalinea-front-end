import React from 'react';
import VitalineaBebible from '../../assets/images/img-vitalinea-bebible.png';
import VitalineaGriego from '../../assets/images/img-vitalinea-griego.png';
import VitalineaAzucar from '../../assets/images/img-vitalinea-sin-azucar.png';
import '../../assets/styles/carousel.scss';

export const Carousel = () => {
  return (
    <section className="carousel">
      <h3>LA FAMILIA VITALÍNEA</h3>
      <div className="carousel__container container">
        <div>
          <img src={VitalineaGriego} alt="Vitalinea Griego" />
          <span>Vitalínea Griego</span>
        </div>
        <div>
          <img src={VitalineaAzucar} alt="Vitalinea Sin Azúcar" />
          <span>Vitalínea Sin Azúcar</span>
        </div>
        <div>
          <img src={VitalineaBebible} alt="Vitalinea Bebible" />
          <span>Vitalínea Bebible</span>
        </div>
      </div>
    </section>
  )
}
