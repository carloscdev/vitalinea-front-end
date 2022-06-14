import React from 'react';
import { Navbar, Footer } from '../components';

export const BaseLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
