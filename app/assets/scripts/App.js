import '../styles/styles.css'
import 'lazysizes'
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './modules/Header';
import Footer from './modules/Footer';
import MobileMenu from './modules/MobileMenu';



// Check for page title
let title = () => {
  return document.title
}
ReactDOM.render(<Footer/>, document.querySelector('.footer'))
ReactDOM.render(<Header active={title}/>, document.querySelector('.header'))

new MobileMenu()

if (module.hot) {
  module.hot.accept()
}