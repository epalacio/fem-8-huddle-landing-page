import React, { Fragment } from 'react';
import './index.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Community from './components/Community';
import Footer from './components/Footer';

const App = () => (
//Fragment is temporary before setting up router
  <Fragment>
    <Hero/>
    <Features/>
    <Community/>
    <Footer/>
  </Fragment>
);

export default App;