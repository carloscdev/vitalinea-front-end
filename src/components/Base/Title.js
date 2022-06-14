import React from 'react';
import './styles/title.scss';

export const Title = ({children}) => {
  return (
    <h2 className="title">
      {children}
    </h2>
  )
}
