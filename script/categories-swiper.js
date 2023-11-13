const slider = document.querySelector('.swiper-container')

let mySwiper;

function desctopSwiper() {
    if (window.innerWidth > 861 && slider.dataset.desctop == 'true') {
        mySwiper = new Swiper('.categories__container',
            {
                // стрелки
                navigation: {
                    prevEl: '.categories__prev',
                    nextEl: '.categories__next'
                },

                initialSlide: 0,
                slidesPerView: 4,
                slidesPerGroup: 2,
                spaceBetween: 25, //26
                watchOverflow: true,
                // loop: true,

                // breakpoints: {
                //     320: {
                //         slidesPerView: 800,
                //         // slidesPerGroup: 12,
                //         spaceBetween: 5,
                //     },

                //   860: {
                //         slidesPerView: 4,
                //         // slidesPerGroup: 12,
                //         spaceBetween: 10,
                //     },

                //     1017: {
                //         slidesPerView: 4,
                //         // slidesPerGroup: 2,
                //         spaceBetween: 25,
                //     }
                // },
            });

        slider.dataset.desctop = 'false';
    }

    if (window.innerWidth <= 861) {
        slider.dataset.desctop = 'true';

        if (slider.classList.contains('swiper-initialized')) {

            mySwiper.destroy();
        }
    }
}

desctopSwiper();

window.addEventListener('resize', () => {
    desctopSwiper();
})





