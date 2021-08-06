$(document).ready(function(){
    var $loading = $('.loading')
    window.onload = function() {
        
        function addRemoveClass() {
            var delay = 2250;
            setTimeout(function() {
                $('.img_animate .img').removeClass('on');
                addRemoveClass();
            }, delay);
        };
        function imgAnimate(){
            var $imgAnimation = $('.img_animate .img'), counter = 0;
            setTimeout(function(){
                setInterval(function(){
                    // if ($imgAnimation) clearInterval($imgAnimation);
                    $imgAnimation.eq(counter++ % $imgAnimation.length).addClass('on');
                },250);
                addRemoveClass();
                if ($imgAnimation) clearInterval($imgAnimation);
            });
        }
        imgAnimate();
        $loading.removeClass('on');
    }
    
    var popOn = $('.header,.main,.popup,.contBox');
    $('.xBtn').click(function(){
        if($(popOn).hasClass('on')){
            $(popOn).removeClass('on');
            $('html,body').animate({
                scrollTop: $('.page5').offset().top + 120
            }, 500);
        } else{
            $(popOn).addClass('on');
        }
    });

    var mySwiper1 = new Swiper('.swiper-container1', {
        initialSlide:0,
        observer:true,
        observeParents:true,
        effect: 'slide',
        slidesPerView: 4.5,
        spaceBetween:40,
        centeredSlides: true,
        loop: true,
        initialSlide: 0,
        freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
        },
        pagination: {
            el: '.swiper-pagination1',
        },
        on: {
            resize: function () {
                    setTimeout(() => {
                    mySwiper1.update()
                    }, 500) 
                    }
            },
        breakpoints:{
            1281:{
                slidesPerView: 3.5,
                spaceBetween:20,
            },
            735:{
                slidesPerView: 2.5,
                spaceBetween:20,
            },
            414:{
                slidesPerView: 1,
                spaceBetween:0,
                speed:200,
                loop:false,
                freeMode:false,
            }

        },
        speed: 600,
        preloadImages: true,
        
    }); 
    var mySwiper2 = new Swiper('.swiper-container2', {
        initialSlide:0,
        observer:true,
        observeParents:true,
        effect: 'slide',
        slidesPerView: 1,
        spaceBetween:20,
        centeredSlides: true,
        // loop: true,
        initialSlide: 0,
        // freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
        pagination: {
            el: '.swiper-pagination2',
        },
        speed: 400,
        preloadImages: true,

    }); 

    $('.clickPop').click(function(){
        var index = $(this).index();
        mySwiper2.slideTo(index);
        $(popOn).addClass('on');
        
    });
    if (screen.width > 735) {
        window.onresize = function(){
            $loading.removeClass('on');
            document.location.reload(true);
        }
    }
    $(window).scroll(function () {
        var page5 = $('.page4').height() * .5;
        if (getScrollTop() > page5) {
            $('.page5 .img_block').addClass('animated');
        } else {
            $('.page5 .img_block').removeClass('animated');
        }
    });
    function getScrollTop() {
        var bodyTop = 0;
        if (typeof window.pageY0ffset != "undefined") {
            bodyTop = window.pageY0ffset;
        } else if (typeof document.compatMode != "undefined" &&
            document.compatMode != "BackCompat") {
            bodyTop = document.documentElement.scrollTop;
        } else if (typeof document.body != "undefined") {
            bodyTop = document.body.scrollTop;
        }
        return bodyTop;
    }
    $(window).resize(function () { });

});  
