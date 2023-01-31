import gsap from "gsap"
class MobileMenu{
  constructor() {
    this.toggleAnimation = gsap.timeline({paused: true, reversed: true})
    
    this.body = document.querySelector('body')
    this.icon = document.querySelector('.header__mobile-expand-container')
    this.iconTop = document.querySelector('.header__mobile--top')
    this.iconMid = document.querySelector('.header__mobile--mid')
    this.iconBottom = document.querySelector('.header__mobile--bottom')
    this.modal = document.querySelector('.header__mobile')
    
    this.listText = document.querySelectorAll('.header__mobile-nav-item')
    this.events()
    
    this.modalAnimation()
    this.iconAnimation()
    this.textAnimation()
  }
  modalAnimation() {
    this.toggleAnimation
    .fromTo(this.modal, {display:'none',opacity:0},{display:'flex',opacity:1}, '<')
    .fromTo(this.modal,{x:'100%'}, {x: 0}, '<')
  }
  iconAnimation() {
    this.toggleAnimation
    .fromTo(this.iconMid, {opacity: 1}, {opacity: '0'}, '<')
    .fromTo(this.iconTop, {transform: 'rotate(0deg) translate(0)'},{transform: 'rotate(45deg) translate(.5em, 1.25em)'}, '<')
    .fromTo(this.iconBottom, {transform: 'rotate(0deg) translateY(0)'},{transform: 'rotate(-45deg) translate(.5em, -1.15em)'}, '<')
  }
  textAnimation(){
    this.toggleAnimation
      .fromTo(this.listText, {opacity:0}, {opacity:1, stagger:.03, ease: 'power3.inOut'}, "-=.5")
  }
  
  events() {
    this.icon.addEventListener('click', () =>this.toggle())
  }
  toggle() {
    if(this.toggleAnimation.reversed()){
      this.toggleAnimation.play()
    }else{
      this.toggleAnimation.reverse()
    }
    this.body.classList.toggle('overflow-hidden')
    // this.modal.classList.toggle('header__mobile--active')
    
  }
}
export default MobileMenu