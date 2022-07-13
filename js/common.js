$(() => {
    //导航栏特效
    $(window).scroll(function () {
        console.log($(document).scrollTop());
        if ($(document).scrollTop() >= 20) {
            $('.navbar').addClass('header-scrolled')
        } else {
            $('.navbar').removeClass('header-scrolled')
        }

        // console.log($('.new_album').offset()); 获取到的不是一个数字 无法做判断
        if ($(document).scrollTop() > 1000) {
            $('.navbar').addClass('bg')
        } else {
            $('.navbar').removeClass('bg')

        }
    });
    // 添加属性
    $('a').attr('target', '_blank');

    $('.song h1').addClass('bar');



    $('.carousel').carousel({
        //轮播间隔 毫秒
        interval: 1500,
    });


    // 图片滚动特效
    window.sr = ScrollReveal({
        reset: true
    });
    sr.reveal('.foo', {
        duration: 500,
        origin: 'left',
        // scale: 2.9,
        opacity: 0,
        delay: 0,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
        mobile: true,
        useDelay: 'always',
        viewFactor: 0.2,
        viewOffset: {
            top: 10,
            right: 5,
            bottom: 5,
            left: 0
        }
    });
    sr.reveal('.bar', {
        duration: 500,
        origin: 'right'
    });
})



