import gsap from 'gsap'
class ActiveNav{
  constructor(){
    this.marker = document.querySelector('.header__nav-item-marker--active')
  }
  enter(current, next){
    if(current == 'home' && !next){
      return gsap.fromTo(this.marker, {autoAlpha: 0, visibility:'visible', opacity: 0, width: '0%'}, {autoAlpha: 1, cssFloat: 'right', visibility:'visible', opacity: 1, width: '100%'})
    }
    if(next == 'destination' && current == 'home'){
      return gsap.fromTo(this.marker, {autoAlpha: 0, visibility:'visible', opacity: 0, width: '0%'}, {autoAlpha: 1, cssFloat: 'left', visibility:'visible', opacity: 1, width: '100%'})
    }
    if(next == 'destination' && current == 'crew'){
      return gsap.fromTo(this.marker, {autoAlpha: 0, visibility:'visible', opacity: 0, width: '0%'}, {autoAlpha: 1, cssFloat: 'right', visibility:'visible', opacity: 1, width: '100%'})
    }
    if(next == 'destination' && current == 'technology'){
      return gsap.fromTo(this.marker, {autoAlpha: 0, visibility:'visible', opacity: 0, width: '0%'}, {autoAlpha: 1, cssFloat: 'right', visibility:'visible', opacity: 1, width: '100%'})
    }
    
    if(next == 'crew' && current == 'destination'){
      return gsap.fromTo(this.marker, {autoAlpha: 0, visibility:'visible', opacity: 0, width: '0%'}, {autoAlpha: 1, cssFloat: 'left', visibility:'visible', opacity: 1, width: '100%'})
    }
    if(next == 'crew' && current == 'home'){
      return gsap.fromTo(this.marker, {autoAlpha: 0, visibility:'visible', opacity: 0, width: '0%'}, {autoAlpha: 1, cssFloat: 'left', visibility:'visible', opacity: 1, width: '100%'})
    }
    if(next == 'crew' && current == 'technology'){
      return gsap.fromTo(this.marker, {autoAlpha: 0, visibility:'visible', opacity: 0, width: '0%'}, {autoAlpha: 1, cssFloat: 'right', visibility:'visible', opacity: 1, width: '100%'})
    }
    if(next === 'technology'){
      return gsap.fromTo(this.marker, {autoAlpha: 0, visibility:'visible', opacity: 0, width: '0%'}, {autoAlpha: 1, cssFloat: 'left', visibility:'visible', opacity: 1, width: '100%'})
    }
    if(next === 'home'){
      return gsap.fromTo(this.marker, {autoAlpha: 0, visibility:'visible', opacity: 0, width: '0%'}, {autoAlpha: 1, cssFloat: 'right', visibility:'visible', opacity: 1, width: '100%'})
    }
    if(!current){
      return gsap.fromTo(this.marker, {autoAlpha: 0, visibility:'hidden', opacity: 0, width: '0%'}, {autoAlpha: 1, cssFloat: 'left', visibility:'visible', opacity: 1, width: '100%'})
    }
  }
  leave(current, next){
    if(current == 'home'){
      return gsap.fromTo(this.marker, {autoAlpha: 1, visibility:'visible', opacity: 1, width: '100%'}, {autoAlpha: 0, cssFloat: 'right', visibility:'hidden', opacity: 0, width: '0%'})
    }
    if(current == 'technology'){
      return gsap.fromTo(this.marker, {autoAlpha: 1, visibility:'visible', opacity: 1, width: '100%'}, {autoAlpha: 0, cssFloat: 'left', visibility:'hidden', opacity: 0, width: '0%'})
    }
    if(current === 'destination' && next === 'home'){
      return gsap.fromTo(this.marker, {autoAlpha: 1, visibility:'visible', opacity: 1, width: '100%'}, {autoAlpha: 0, cssFloat: 'left', visibility:'hidden', opacity: 0, width: '0%'})
    }
    if(current === 'destination' && next != 'home'){
      return gsap.fromTo(this.marker, {autoAlpha: 1, visibility:'visible', opacity: 1, width: '100%'}, {autoAlpha: 0, cssFloat: 'right', visibility:'hidden', opacity: 0, width: '0%'})
    }
    
    if(current === 'crew' && next == 'technology'){
      return gsap.fromTo(this.marker, {autoAlpha: 1, visibility:'visible', opacity: 1, width: '100%'}, {autoAlpha: 0, cssFloat: 'right', visibility:'hidden', opacity: 0, width: '0%'})
    }
    if(current === 'crew' && next != 'technology'){
      return gsap.fromTo(this.marker, {autoAlpha: 1, visibility:'visible', opacity: 1, width: '100%'}, {autoAlpha: 0, cssFloat: 'left', visibility:'hidden', opacity: 0, width: '0%'})
    }
  }
}
export default ActiveNav