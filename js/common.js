$(document).ready(function(){

    var $loading = $('.loading')
    window.onload = function(){
        $loading.removeClass('on');
    }

    var loc = window.location.href;
    // project08-安心刷 回饋隨行
    if(/project01/.test(loc)) {
        $('.project08').addClass('on');
    }
    // project01-花旗薦賞家 
    if(/project02/.test(loc)) {
        $('.project01').addClass('on');
    }
    // project02-全方位保險規劃
    if(/project03/.test(loc)) {
        $('.project02').addClass('on');
    }
    // project03-超A咖 怪好玩
    if(/project04/.test(loc)) {
        $('.project03').addClass('on');
    }
    // project05-反正我好看 出色登場 
    if(/project05/.test(loc)) {
        $('.project05').addClass('on');
    }
    // project06-故宮聯名限定新裝
    if(/project06/.test(loc)) {
        $('.project06').addClass('on');
    }
    // project07-全新升等優渥禮遇
    if(/project07/.test(loc)) {
        $('.project07').addClass('on');
    }
    // project04-MEET TAIWAN
    if(/project08/.test(loc)) {
        $('.project04').addClass('on');
    }

    
    var swiper = new Swiper(".swiper-container",{
        initialSlide:0,
        observer:true,
        observeParents:true,
        direction:"horizontal",
        loop:false,
        pagination: {
            el: '.swiper-pagination',
            // el: '.swiper-button-block .sub',
            clickable:true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        on:{
            slideChangeTransitionStart: function(){
                if (this.realIndex == "0"){
                    $(".kv .num").html("01");
                    $(".kv .numBox p").html("CITI Bank");
                }
                if (this.realIndex == "1"){
                    $(".kv .num").html("02");
                    $(".kv .numBox p").html("CITI Bank");
                }
                if (this.realIndex == "2"){
                    $(".kv .num").html("03");
                    $(".kv .numBox p").html("Samsung");
                }
            }, 
        },
        
    });


    $('.menuIcon').click(function(){
        $(this).toggleClass('on');
        $('.navOpen').slideToggle('on');
    });
    $('.decQ').click(function(){
        $(this).next('.cont').slideToggle('on');
    });

});



