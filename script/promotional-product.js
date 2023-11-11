new Swiper('.container-medium1 ',
    {
        slidesPerView: 1,
        slidesPerGroup: 1,
        initialSlide: 0,

        pagination: {
            el: '.swiper-pagination',
            // буллеты 
            clickable: true,

        },
        slideToClickedSlide: true,
        // Управление клавиатурой
        keyboard: {
            // включить/выключить
            enabled: true,
            // включить/выключить
            // только когда слайдер
            // в пределах вьюпорта
            onlyInViewport: true,
            // включить/выключить
            // управление клаишами
            // pageUp, pageDown
            pageUpDown: true,
        },
        // Управление колесом мыши
        mousewheel: {
            // чувствительность колеса мыши
            sensitivity: 1,
            // Класс объеката на котором 
            // будет срабатывать прокрутка мышью
            eventsTarget: '.promotional-product-slider',
        },

        a11y: {
            enabled: true,
        }
    });