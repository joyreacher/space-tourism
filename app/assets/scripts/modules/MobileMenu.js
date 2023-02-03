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
    this.handleMobileNav()
    
    this.modalAnimation()
    this.textAnimation()
    this.iconAnimation()
  }
  modalAnimation() {
    this.toggleAnimation
    .fromTo(this.modal,  {autoAlpha: 0, visibility: 'hidden', display:'none',opacity:0},{autoAlpha: 1, visibility: 'visible', display:'flex',opacity:1}, '<')
    .fromTo(this.modal, .25,{ease: 'power2.in', x:'100%'}, {x:0, ease: 'power2.in'}, '<')
    .fromTo(this.modal, .85,{backdropFilter:"blur(0rem)", ease: 'power2.in'}, {backdropFilter:"blur(1.4rem)", ease: 'power2.inOut'}, '<');
    
  }
  iconAnimation() {
    this.toggleAnimation
    .fromTo(this.iconMid, {opacity: 1}, {opacity: '0'}, '<')
    .fromTo(this.iconTop, {transform: 'rotate(0deg) translate(0)'},{transform: 'rotate(45deg) translate(.5em, 1.25em)', ease: 'power2.inOut'}, '<')
    .fromTo(this.iconBottom, {transform: 'rotate(0deg) translateY(0)'},{transform: 'rotate(-45deg) translate(.5em, -1.15em)', ease: 'power2.inOut'}, '<')
  }
  textAnimation(){
    this.toggleAnimation
      .fromTo(this.listText, .9,{ease: 'power2.in', opacity:0, y:'-30px'}, {opacity:1, stagger:.03, y:0, ease: 'power2.out'}, '-=.15')
  }
  
  events() {
    this.icon.addEventListener('click', () =>this.toggle())
  }
  handleMobileNav() {
    this.listText.forEach((el) => el.addEventListener('click', () => this.toggle()))
  }
  toggle() {
    if(this.toggleAnimation.reversed()){
      this.toggleAnimation.play()
    }else{
      this.toggleAnimation.reverse()
    }
    this.body.classList.toggle('overflow-hidden')
  }
}
export default MobileMenu