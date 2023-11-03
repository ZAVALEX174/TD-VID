const showMore = document.querySelector('.product-card__button-still');
console.log(showMore);

const productLenght = document.querySelectorAll('.product-cards__card').length;
console.log(productLenght);

let items = 4;

showMore.addEventListener('click', () => {
	items += 4;
	const array = Array.from(document.querySelector('.product-cards__cards').children);
	const visibleItems = array.slice(0, items);

	visibleItems.forEach(el => el.classList.add('is-visible'));

	if(visibleItems.length === productLenght) {
		showMore.classList.add('display-none');
	}
});