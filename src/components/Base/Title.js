import React from 'react';
import './styles/title.scss';

export const Title = ({children}) => {
  return (
    <h2 data-aos="fade-down" className="title">
      {children}
    </h2>
  )
}
