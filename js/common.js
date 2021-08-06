$(document).ready(function(){
    var $loading = $('.loading')
    window.onload = function() {
        
        // function addRemoveClass() {
        //     var delay = 2250;
        //     setTimeout(function() {
        //         $('.img_animate .img').removeClass('on');
        //         addRemoveClass(delay,1000);
        //     }, delay);
            
        // };
        // function imgAnimate(){
        //     var $imgAnimation = $('.img_animate .img'), counter = 0;
        
        //     setTimeout(function(){
        //         setInterval(function(){
        //             if ($imgAnimation) clearInterval($imgAnimation);
        //             $imgAnimation.eq(counter++ % $imgAnimation.length).addClass('on');
        //         },250);
        //         addRemoveClass();
        //     });
            
        // }
        // imgAnimate();

        function imgAnimate(){
            
            var $imgAnimation = $('.img_animate .img'), counter = 0;
            setTimeout(function(){
                // var delay = 7200;
                // setTimeout(function(){
                //     $('.img_animate .img').removeClass('on');
                // }, delay);


                // $('.img_animate .img').removeClass('on');
                setTimeout(function(){
                    setInterval(function(){
                        if ($imgAnimation) clearInterval($imgAnimation);
                        $imgAnimation.eq(counter+ 1 % $imgAnimation.length).addClass('on');
                        
                        if ((counter +=1) > 8) {
                            $('.img_animate .img').removeClass('on');
                            counter = 0;
                        }
                    }, 150);
                    
                },150);
            },150)
            
            // $imgAnimation.eq(counter++ % $imgAnimation.length).addClass('on');
        }
        imgAnimate();

        // var banners = ["img/page4_img1_air1.png","img/page4_img1_air2.png","img/page4_img1_air3.png","img/page4_img1_air4.png","img/page4_img1_air5.png","img/page4_img1_air6.png","img/page4_img1_air7.png","img/page4_img1_air8.png"]; // 图片地址
		// 	var counter = 0;
		// 	function run(){
		// 		setInterval(cycle,150);  //重复运行cycle函数，周期1000ms
		// 	}
		// 	function cycle(){
        //         $("#imgQ").removeClass('on');
		// 		counter++;
		// 		if(counter == banners.length)	
		// 			counter = 0;
		// 		document.getElementById("imgQ").src = banners[counter];
        //         $("#imgQ").addClass('on');

		// 	}
        //     run();
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
