const buttonIntoABasket = document.querySelectorAll('.product-card__bag');
// const inBasket = document.querySelectorAll('.product-card__in-bag');
// const toggleText = document.querySelectorAll('.button-text');


buttonIntoABasket.forEach((item) => {
    item.addEventListener('click', (evt) => {
        console.log('kjdhda');
        const text = evt.target.closest('.product-card__bag');
        const buttonText = text.querySelector('.button-text').firstChild;
        buttonText.data = buttonText.data == "В корзину" ? "В корзине" : "В корзину";
        item.classList.toggle('product-card__in-bag');
    })

});
