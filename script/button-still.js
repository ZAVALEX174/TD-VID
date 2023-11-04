const buttonIntoABasket = document.querySelectorAll('.product-card__bag');
const inBasket = document.querySelectorAll('.product-card__in-bag');

console.log(buttonIntoABasket);
console.log(inBasket);


// buttonIntoABasket.forEach((element) => {
//     element.addEventListener('click', (e) => {
//         console.log("button clicked" + e.target.classList);
//         element.classList.add('product-card__bag-dn');
//         inBasket.forEach((el) => {
//             el.classList.add('product-card__in-bag-db');
//         })
//     })
// })

buttonIntoABasket.forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log("button clicked" + e.target.classList);
        element.classList.add('product-card__in-bag-db');
        element.textContent = "В корзине";
    })
})

function changeSvg() {
    buttonIntoABasket.forEach((item) => {
        item.
    })
}