import React from 'react';
import './styles/text.scss';

export const Text = ({children}) => {
  return (
    <p className="text">
      {children}
    </p>
  )
}
