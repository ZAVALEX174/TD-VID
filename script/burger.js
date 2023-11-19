let menuBtn = document.querySelector('.hamburger-menu');
let menu = document.querySelector('.menu__list');
let close = document.querySelector('.hamburger');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	close.classList.toggle('active')
})