import '../styles/styles.css'
import 'lazysizes'
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './modules/Header';
import Footer from './modules/Footer';
import MobileMenu from './modules/MobileMenu';
import barba from '@barba/core'
import gsap from 'gsap'


barba.init({
  transitions: [{
    name: 'opacity-transition',
    beforeLeave(data){
      gsap.set('body', {overflow:'hidden'})
      return gsap.to('#bg-image', .95,{ opacity: 0, ease:"power2.out", transform: 'scale(1.05)'})
    },
    leave(data) {
      return gsap.to(data.current.container, .5,{opacity: 0, display:'none', ease: "power2.in"});
    },
    enter(data) {
      return gsap.from(data.next.container, .5, { opacity: 0, ease: 'power2.in'});
    },
    afterEnter(){
      gsap.set('body', {overflow:'auto'})
      return gsap.fromTo('#bg-image', {opacity: 0, ease:"power2.in", transform:'scale(1.05)'},{duration: 1.2, opacity:1, ease:"power2.out",transform:'scale(1)'}, '+=.25');
    },
  }],
  views:[
    {
      namespace:'home',
      afterEnter(data) {
        ReactDOM.render(<Header active={data.next.namespace}/>, document.querySelector('#header'))
        new MobileMenu()
      },
    },
    {
      namespace:'destination',
      afterEnter(data) {
        ReactDOM.render(<Header active={data.next.namespace}/>, document.querySelector('#header'))
        new MobileMenu()
      },
    },
    {
      namespace:'crew',
      afterEnter(data) {
        ReactDOM.render(<Header active={data.next.namespace}/>, document.querySelector('#header'))
        new MobileMenu()
      },
    },{
      namespace:'technology',
      afterEnter(data) {
        ReactDOM.render(<Header active={data.next.namespace}/>, document.querySelector('#header'))
        new MobileMenu()
      },
    }
  ]
});


ReactDOM.render(<Footer/>, document.querySelector('#footer'))


if (module.hot) {
  module.hot.accept()
}