import gsap from 'gsap'
class ContentSwitch{
  constructor(page){
    this.contentList = document.querySelectorAll('.page__destination--content')
    this.items = document.querySelectorAll('.page__destination--pagination-number')
    this.currentDestination = 1
    this.pagenationLimit = 1
    this.events()
    this.setCurrentDestination(1)
  }
  events(){
    this.items.forEach((item) => {
      const destinationIndex = Number(item.getAttribute('destination-index'))
      if(destinationIndex){
        item.addEventListener('click', () => this.setCurrentDestination(destinationIndex))
      }
    })
  }
  handleActiveDestionation(){
    this.items.forEach((item) => {
      item.classList.remove('page__destination--pagination-number--active')
      const destinationIndex = Number(item.getAttribute('destination-index'))
      if(destinationIndex == this.currentDestination){
        item.classList.add('page__destination--pagination-number--active')
        
      }
    })
  }
  menuAnimation(destination){
    if(destination > this.currentDestination){
      return gsap.fromTo('.page__destination--marker', {ease:'power2.out',width: '0%'},{ease:'power2.out',cssFloat:'left',width: '100%'})
    }else if(destination < this.currentDestination){
      return gsap.fromTo('.page__destination--marker', {ease:'power2.out',width: '0%'},{ease:'power2.out',cssFloat: 'right', width: '100%'})
    }
  }
  contentAnimation(){
    return gsap.from([
      '.page__destination--image',
      '.page__destination--main-title',
      '.page__destination--description', 
      '.page__destination--text-distance', 
      '.page__destination--text-travel'
      ], {autoAlpha:0,ease: 'power2.inOut', stagger:.009,opacity:0})
  }
  setCurrentDestination(destination){
    this.menuAnimation(destination)
    this.currentDestination = destination
    this.handleActiveDestionation()
    const prevRange = (destination - 1) * this.pagenationLimit
    const currRange = destination * this.pagenationLimit
    this.contentList.forEach((item, index)=>{
      item.classList.add('page__destination--content-hidden')
      item.classList.remove('page__destination--content-active')
      if(index >= prevRange && index < currRange){
        this.contentAnimation()
        item.classList.remove('page__destination--content--hidden')
        item.classList.add('page__destination--content-active')
        
      }
    })
    
  }
}

export default ContentSwitch