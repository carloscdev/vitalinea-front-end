import React from 'react';
import { Navbar, Footer } from '../components';

export const BaseLayout = ({ children }) => {
  return (
    <section className="base-layout">
      <Navbar />
      {children}
      <Footer />
    </section>
  )
}
