import '../styles/styles.css'
import 'lazysizes'
import barba from '@barba/core'
import gsap from 'gsap'
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './modules/Header';
import Footer from './modules/Footer';
import MobileMenu from './modules/MobileMenu';
import ActiveNav from './modules/ActiveNav'
import ContentSwitch from './modules/ContentSwitch'


barba.init({
  transitions: [{
    name: 'opacity-transition',
    beforeLeave(data){
      gsap.set('body', {overflow:'hidden'})
      return gsap.to('#bg-image', .95,{ opacity: 0, ease:"power2.out", transform: 'scale(1.05)'})
    },
    leave(data) {
      return gsap.to(data.current.container, .25,{opacity: 0, display:'none', ease: "power2.in"});
    },
    enter(data) {
      return gsap.from(data.next.container, .25, { opacity: 0, ease: 'power2.in'});
    },
    afterEnter(){
      gsap.set('body', {overflow:'auto'})
      return gsap.fromTo('#bg-image', {opacity: 0, ease:"power2.in", transform:'scale(1.05)'},{duration: 1.2, opacity:1, ease:"power2.out",transform:'scale(1)'}, '+=.25');
    },
  }],
  views:[
    // HOME
    {
      namespace:'home',
      afterLeave(){
        new ActiveNav().leave01('home');
      },
      afterEnter(data) {
        ReactDOM.render(<Header active={data.next.namespace}/>, document.querySelector('#header'))
        new MobileMenu()
        new ActiveNav().enter01('home')
      },
    },
    
    // DESTINATION
    {
      namespace:'destination',
      afterLeave(data){
        if(data.next.namespace != 'home'){
          new ActiveNav().leave23('right')
        }else{
          new ActiveNav().leave23('left')
        }
      },
      
      afterEnter(data) {
        new ContentSwitch(data.next.namespace)
        ReactDOM.render(<Header active={data.next.namespace}/>, document.querySelector('#header'))
        new MobileMenu()
        if(data.current.namespace != 'home'){
          new ActiveNav().enter23('right')
        }else{
          new ActiveNav().enter23('left')
        }
      },
    },
    // CREW
    {
      namespace:'crew',
      afterLeave(data){
        if(data.next.namespace != 'technology'){
          new ActiveNav().leave23('left')
        }else{
          new ActiveNav().leave23('right')
        }
      },
      afterEnter(data) {
        ReactDOM.render(<Header active={data.next.namespace}/>, document.querySelector('#header'))
        new MobileMenu()
        if(data.current.namespace != 'technology'){
          new ActiveNav().enter23('left')
        }else{
          new ActiveNav().enter23('right')
        }
      },
    },
    // Technology
    {
      namespace:'technology',
      afterLeave(){
        new ActiveNav().leave01('technology');
      },
      afterEnter(data) {
        ReactDOM.render(<Header active={data.next.namespace}/>, document.querySelector('#header'))
        new MobileMenu()
        new ActiveNav().enter01('technology')
      },
    }
  ]
});


ReactDOM.render(<Footer/>, document.querySelector('#footer'))


if (module.hot) {
  module.hot.accept()
}