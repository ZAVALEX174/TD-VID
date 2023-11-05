new Swiper('.categories__container',
    {
        // стрелки
        navigation: {
            prevEl: '.categories__prev',
            nextEl: '.categories__next'
        },

        initialSlide: 0,
        slidesPerView: 4,

        // zoom image
        zoom: {
            //максимальное увеличение
            maxRatio: 1.1,
            //минимальное увеличение
            minRatio: 0.5,

        },

    });