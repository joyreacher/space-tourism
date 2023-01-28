import '../styles/styles.css'
import 'lazysizes'
import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from './modules/Header';
import Footer from './modules/Footer';


const footer = createRoot(document.querySelector('.footer'))
const navbar = createRoot(document.querySelector('.header'));
navbar.render(<Header tab="home" />);
footer.render(<Footer />);


if (module.hot) {
  module.hot.accept()
}