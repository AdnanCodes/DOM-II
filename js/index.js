// Your code goes here

//Adding mouseover

const headerblue = document.getElementsByClassName('logo-heading')

headerblue[0].addEventListener('click', event => {
    headerblue[0].style.background = 'blue'
    setTimeout(function() {
        headerblue[0].style.color = "";
    }, 500);
})

const navlinks = document.getElementsByClassName('nav-link')

navlinks[0].addEventListener('mouseover', event => navlinks[0].style.color = 'pink')
navlinks[1].addEventListener('mouseover', event => navlinks[1].style.color = 'pink')
navlinks[2].addEventListener('mouseover', event => navlinks[2].style.color = 'pink')
navlinks[3].addEventListener('mouseover', event => navlinks[3].style.color = 'pink')


//Selecting stuff and hitting copy will print out a message intro tag will deliver alert
const copy = document.querySelector('.intro')

copy.addEventListener('copy', event => {
    const selection = document.getSelection()    
    alert(`You copied ${selection}`)
})

//Trying to drag a image out
const img = document.querySelector('.content-destination img')
img.addEventListener('dragstart', event => {
    alert(`What are you doing with my pictures`)
})

//Notification on Page being loaded
window.addEventListener('load', (event) => {
    alert('page is fully loaded');
});

//

window.addEventListener('resize', event => {
    if(window.innerHeight <= 500 || window.innerWidth <= 800){
    alert(`The window size is at ${window.innerHeight} by ${window.innerWidth}`)
    }
})


