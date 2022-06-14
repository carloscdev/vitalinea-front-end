import React from 'react';
import './styles/button.scss';

export const CustomButton = ({content, link}) => {
  return (
    <a
      className="button"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  )
}
