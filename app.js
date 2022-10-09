const services = document.querySelector('.allLinks');
const oneTime = document.querySelector('#onetime');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');
const moveIn = document.querySelector('#movein');
const paragraph1 = document.querySelector('#onetimetext');
const paragraph2 = document.querySelector('#weeklytext');
const paragraph3 = document.querySelector('#monthlytext');
const paragraph4 = document.querySelector('#moveintext');
const firstPhoto = document.querySelector('#firstphoto');
const secondPhoto = document.querySelector('#secondphoto');
const thirdPhoto = document.querySelector('#thirdphoto');
const fourthPhoto = document.querySelector('#fourthphoto');
const oneTimeHeader = document.querySelector('#onetimeheader')
const weeklyHeader = document.querySelector('#weeklyheader')
const monthlyHeader = document.querySelector('#monthlyheader')
const moveInHeader = document.querySelector('#moveinheader')



//one time clean animation
oneTime.addEventListener('mouseover', function(){
  oneTime.style.backgroundColor = 'rgba(230,215,255,.3)'
  paragraph1.style.backgroundColor = "rgba(230,215,255,.3)"
  oneTimeHeader.style.fontSize = 'x-large'
})
oneTime.addEventListener('mouseout', function(){
  oneTime.style.backgroundColor = 'rgb(255,255,255)'
  paragraph1.style.backgroundColor = "rgb(255,255,255)"
  firstPhoto.style.minHeight = '200px'
  oneTimeHeader.style.fontSize = 'large'

})

//weekly clean animation
weekly.addEventListener('mouseover', function(){
  weekly.style.backgroundColor = '#F5F5F5'
  paragraph2.style.backgroundColor = "#F5F5F5"
  secondPhoto.style.minHeight = '210px'
  weeklyHeader.style.fontSize = 'x-large'
})
weekly.addEventListener('mouseout', function(){
  weekly.style.backgroundColor = 'rgb(255,255,255)'
  paragraph2.style.backgroundColor = "rgb(255,255,255)"
  secondPhoto.style.minHeight = '200px'
  weeklyHeader.style.fontSize = 'large'

})

//monthly clean animation
monthly.addEventListener('mouseover', function(){
  monthly.style.backgroundColor = '#F5F5F5'
  paragraph3.style.backgroundColor = "#F5F5F5"
  thirdPhoto.style.minHeight = '210px'
  monthlyHeader.style.fontSize = 'x-large'

})
monthly.addEventListener('mouseout', function(){
  monthly.style.backgroundColor = 'rgb(255,255,255)'
  paragraph3.style.backgroundColor = "rgb(255,255,255)"
  thirdPhoto.style.minHeight = '200px'
  monthlyHeader.style.fontSize = 'large'

})

//move in clean animation
moveIn.addEventListener('mouseover', function(){
  moveIn.style.backgroundColor = '#F5F5F5'
  paragraph4.style.backgroundColor = "#F5F5F5"
  fourthPhoto.style.minHeight = '210px'
  moveInHeader.style.fontSize = 'x-large'

})
moveIn.addEventListener('mouseout', function(){
  moveIn.style.backgroundColor = 'rgb(255,255,255)'
  paragraph4.style.backgroundColor = "rgb(255,255,255)"
  fourthPhoto.style.minHeight = '200px'
  moveInHeader.style.fontSize = 'large'

})

//navbar stay when scrolling
const nav = document.querySelector('.nav');
window.addEventListener('scroll', function(){
    
})



//after about add a service list on right side then a text on the right
//if screen size is smaller then __ make nav bar interactive
//update colors of animated links
