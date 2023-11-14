let menuBtn = document.querySelector('.hamburger-menu');
let menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})