new Swiper('.swiper-container',
    {
        // стрелки
        // navigation: {
        //     prevEl: '.categories__prev',
        //     nextEl: '.categories__next'
        // },

        // initialSlide: 0,
        // slidesPerView: 4,
        // slidesPerGroup: 4,
        // spaceBetween: 27,
        // loop: true,

        // zoom image
        // zoom: {
        //     //максимальное увеличение
        //     maxRatio: 1.1,
        //     //минимальное увеличение
        //     minRatio: 0.5,

        // },
        pagination: {
            el: '.swiper-pagination',
            // буллеты 
            clickable: true,
            /*
                        // Динмичкские буллеты
                        dynamicBullets: true,
                        // //Кастомные буллеты
                        //  renderBullet: function (index, className) {
                        //      return '<span class="' + className + '">' + (index + 1) + '</span>';
                        //   },
            
            */
            /*
                        //Фракция
                        type: 'fraction',
            
                        // Кастомный вывод фракции
                         renderFraction: function (currentClass, totalClass) {
                             return 'КаРТиНКа <span class="' + currentClass + '"></span>' +
                                 ' Из ' +
                                 '<span class=" ' + totalClass + '"></span>';
                         },
            */

            // // Прогрессбар
            // type: 'progressbar',
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
            eventsTarget: '.image-slider',
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
        initialSlide: 0,

    });