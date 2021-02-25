const hamTrigger= document.querySelector('.hamTrigger')
const hamburger= document.querySelector('.hamburger')
const close= document.querySelector('.close')
const nav= document.querySelector('.disa')



VANTA.WAVES({
    el: "#vantajs",
    mouseControls: true,
   touchControls: true,
   gyroControls: false,
   minHeight: 200.00,
   minWidth: 200.00,
   scale: 1.00,
   scaleMobile: 1.00,
   color: 0x0
 })

 hamTrigger.addEventListener('click',()=>{
    hamburger.style.display='block'
    nav.style.display='none'
 })

 close.addEventListener('click',()=>{
    hamburger.style.display='none'
    nav.style.display='flex'
 })