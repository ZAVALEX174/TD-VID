const buttonIntoABasket = document.querySelectorAll('.product-card__bag');

buttonIntoABasket.forEach((item) => {
    item.addEventListener('click', (evt) => {
        
        const text = evt.target.closest('.product-card__bag');
        const buttonText = text.querySelector('.button-text').firstChild;
        buttonText.data = buttonText.data == "В корзину" ? "В корзине" : "В корзину";
        
        item.classList.toggle('product-card__in-bag');
    })

});
