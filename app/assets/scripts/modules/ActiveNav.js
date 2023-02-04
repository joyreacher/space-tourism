import gsap from 'gsap'
class ActiveNav{
  constructor(){
    this.navItems = document.querySelectorAll('.header__nav-item-marker')
    this.marker = document.querySelector('.header__nav-item-marker--active')
  }
  leave01(page){
    if(page != 'home'){
      return gsap.fromTo(this.marker, {autoAlpha: 1, visibility:1, opacity: 1, width: '100%'}, {cssFloat: 'left', visibility:0, opacity: 0, width: '0%'})
    }else{
      return gsap.fromTo(this.marker, {autoAlpha: 1, visibility:1, opacity: 1, width: '100%'}, {cssFloat: 'right', visibility:0, opacity: 0, width: '0%'})
    }
    
  }
  leave23(direction){
    if(direction === 'right'){
      return gsap.fromTo(this.marker, {autoAlpha: 1, visibility:1, opacity: 1, width: '100%'}, {cssFloat: 'right', visibility:0, opacity: 0, width: '0%'})
    }else{
      return gsap.fromTo(this.marker, {autoAlpha: 1, visibility:1, opacity: 1, width: '100%'}, {cssFloat: 'left', visibility:0, opacity: 0, width: '0%'})
    }
    
  }
  enter01(page){
    if(page != 'home'){
      return gsap.fromTo(this.marker, {autoAlpha: 0, visibility:0, opacity: 0, width: 0}, {cssFloat:'left', autoAlpha: 1, visibility:1, opacity: 1, width: '100%'})
    }else{
      return gsap.fromTo(this.marker, {autoAlpha: 0, visibility:0, opacity: 0, width: 0}, {cssFloat:'right', autoAlpha: 1, visibility:1, opacity: 1, width: '100%'})
    }
    
  }
  enter23(direction){
    if(direction === 'right'){
      return gsap.fromTo(this.marker, {autoAlpha: 0, visibility:0, opacity: 0, width: 0}, {cssFloat:'right', autoAlpha: 1, visibility:1, opacity: 1, width: '100%'})
    }else{
      return gsap.fromTo(this.marker, {autoAlpha: 0, visibility:0, opacity: 0, width: 0}, { autoAlpha: 1, visibility:1, opacity: 1, width: '100%'})
    }
  }
}
export default ActiveNav