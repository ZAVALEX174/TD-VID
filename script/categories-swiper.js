const swiper = new Swiper('.swiper', {
    // Настройки слайдера

    // стрелки
    navigation: {
        prevEl: '.categories__prev',
        nextEl: '.categories__next'
    },

    // initialSlide: 0,
    slidesPerView: 4,
    slidesPerGroup: 2,
    spaceBetween: 25, //26
    watchOverflow: true,
    // loop: true,
    // enabled: true,


    breakpoints: {
        320: {
            slidesPerView: 4,
            // slidesPerGroup: 4,
            spaceBetween: 9,
            enabled: false,
        },

        860: {
            slidesPerView: 4,
            // slidesPerGroup: 12,
            spaceBetween: 25,
            enabled: true,
        },

            // 1017: {
            //     slidesPerView: 4,
            //     // slidesPerGroup: 2,
            //     spaceBetween: 25,
            // }
        },
    });