import React, { Fragment } from 'react';
import './index.css';
import imgTest from './img/icon-phone.svg'

const App = () => (
//Fragment is temporary before setting up router
  <Fragment>
    <h1 className="text-9xl">Hello world</h1>
    <img className='h-8 bg-purple-900 p-2' src={imgTest} alt=""/>
    <p>under img</p>
  </Fragment>
);

export default App;