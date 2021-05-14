$(function(){
    var $loading = $('.loading')
    window.onload = function(){
        $loading.removeClass('on');
    }
    var swiper = new Swiper(".swiper-container",{
        initialSlide:0,
        observer:true,
        observeParents:true,
        direction:"horizontal",
        loop:false,
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    });
    $(window).scroll(function(){
        var simplify = $('.header'),
            scroll = $(window).scrollTop();
        if (scroll >= 45) simplify.addClass('simplify');
        else simplify.removeClass('simplify');
    });
});