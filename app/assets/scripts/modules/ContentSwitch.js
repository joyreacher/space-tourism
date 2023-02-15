import gsap from 'gsap'
class ContentSwitch{
  constructor(page){
    this.page = page
    this.contentList = document.querySelectorAll(`.page__${this.page}--content`)
    this.items = document.querySelectorAll(`.page__${this.page}--pagination-number`)
    this.markers = document.querySelectorAll(`.page__${this.page}--marker`)
    this.currentDestination = 1
    this.pagenationLimit = 1
    this.elementsToAnimate = []
    this.events()
    this.setCurrentDestination(1)
  }
  getAnimationElements(){
    if(this.page == 'crew'){
      this.elementsToAnimate =[
        `.page__${this.page}--image`,
        `.page__${this.page}--text-role`,
        `.page__${this.page}--text-name`,
        `.page__${this.page}--text-bio`,
        `.page__${this.page}--line`
      ]
    }else if(this.page == 'destination'){
      this.elementsToAnimate = [
        `.page__${this.page}--image`,
        `.page__${this.page}--main-title`,
        `.page__${this.page}--description`, 
        `.page__${this.page}--text-distance`, 
        `.page__${this.page}--text-travel`
        ]
    }
  }
  events(){
    this.items.forEach((item) => {
      const destinationIndex = Number(item.getAttribute(`${this.page}-index`))
      if(destinationIndex){
        item.addEventListener('click', () => {
          // gsap.fromTo(this.elementsToAnimate, {autoAlpha:1, opacity:1, visibility:'visible'},{clearProps:'opacity, visibility', visibility:'hidden',autoAlpha:0,ease: 'power2.inOut', stagger:.009,opacity:0, onComplete:() => this.setCurrentDestination(destinationIndex)})
          gsap.to(this.elementsToAnimate, {clearProps:'opacity, visibility', visibility:'hidden',autoAlpha:0,ease: 'power2.inOut', stagger:.009,opacity:0, onComplete:() => this.setCurrentDestination(destinationIndex)})
        })
      }
    })
  }
  handleActiveDestionation(){
    this.items.forEach((item, i) => {
      // this.markers[i].classList.remove(`page__${this.page}--marker-active`)
      // Crew page menu animation
      if(this.page === 'crew')gsap.to(this.markers[i], {clearProps: 'all', opacity:.17})
      item.classList.remove(`page__${this.page}--pagination-number--active`)
      const destinationIndex = Number(item.getAttribute(`${this.page}-index`))
      if(destinationIndex == this.currentDestination){
        item.classList.add(`page__${this.page}--pagination-number--active`)
        // this.markers[i].classList.add(`page__${this.page}--marker-active`)
        // Crew page menu animation
        if(this.page === 'crew')gsap.fromTo(this.markers[i], .75,{opacity:.45, ease:'power2.out'},{opacity:1})
      }
    })
  }
  menuAnimation(destination){
    if(destination > this.currentDestination){
      return gsap.fromTo(`.page__${this.page}--marker`, {ease:'power2.out',width: '0%'},{ease:'power2.out',cssFloat:'left',width: '100%'})
    }else if(destination < this.currentDestination){
      return gsap.fromTo(`.page__${this.page}--marker`, {ease:'power2.out',width: '0%'},{ease:'power2.out',cssFloat: 'right', width: '100%'})
    }
  }
  contentAnimation(){
    return gsap.from(this.elementsToAnimate, {autoAlpha:0,ease: 'power2.inOut', stagger:.009,opacity:0})
  }
  crewContentAnimation(){
    return gsap.fromTo(this.elementsToAnimate, {autoAlpha:0,ease: 'power2.inOut', stagger:.009,opacity:0},{autoAlpha:1,ease: 'power2.inOut', stagger:.009,opacity:1})
  }

  setCurrentDestination(destination){
    this.getAnimationElements()
    if(this.page === 'destination')this.menuAnimation(destination)
    this.currentDestination = destination
    this.handleActiveDestionation()
    const prevRange = (destination - 1) * this.pagenationLimit
    const currRange = destination * this.pagenationLimit
    this.contentList.forEach((item, index)=>{
      item.classList.add(`page__${this.page}--content-hidden`)
      item.classList.remove(`page__${this.page}--content-active`)
      if(index >= prevRange && index < currRange){
        this.contentAnimation()
        item.classList.remove(`page__${this.page}--content--hidden`)
        item.classList.add(`page__${this.page}--content-active`)
        
      }
    })
    
  }
}

export default ContentSwitch