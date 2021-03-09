$(function () {
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        /*Если сделали скролл на 100px задаём новый класс для header*/
        if (height > 50) {
            $('.menu').addClass('menu--bg');
        } else {
            /*Если меньше 100px удаляем класс для header*/
            $('.menu').removeClass('menu--bg');
        }
    });

    $('.skills__slider-items').slick({
        slidesToShow: 5,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
    });
});