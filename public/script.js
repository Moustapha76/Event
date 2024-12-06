// Menu mobile
let btnmenu = document.querySelector('header .burger')
let closeBtn = document.querySelector('header .closeBtn')
let menulist = document.querySelector('header nav ul')
btnmenu.addEventListener('click', function(){
    menulist.classList.toggle('opened')
})
closeBtn.addEventListener('click', function(){
    menulist.classList.toggle('opened')
})

// Navbar
let navbar = document.querySelector('.navbar')
document.addEventListener('scroll',function(){
    if(window.scrollY>0){navbar.classList.add('fixed')}
    else{navbar.classList.remove('fixed')}
}) 


