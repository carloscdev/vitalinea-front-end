import React from 'react';
import { BaseLayout } from '../layouts';
import { Header, Information, Carousel } from '../components';

export const Home = () => {
  return (
    <BaseLayout>
      <Header />
      <Information />
      <Carousel />
    </BaseLayout>
  )
}
