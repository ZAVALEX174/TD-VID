new Swiper('.categories__container',
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
        // loop: true,

        // breacpoints: {
        //     1017: {
        //         slidesPerView: 4,
        //         slidesPerGroup: 2,
        //         // spaceBetween: 25,
        //     },
        //     768: {
        //         slidesPerView: 3,
        //         slidesPerGroup: 2,
        //         // spaceBetween: 10,
        //     }
        // },
    });



