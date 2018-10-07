$(document).ready(function() {
    $(window).on('load resize', function() {
        var $thisnav = $('.current-menu-item').offset().left;
        $('.menu-item').click(function() {
            var $left = $(this).offset().left - $thisnav;
            var $width = $(this).outerWidth();
            var $start = 0;
            $('.wee').css({ 'left': $left , 'width': $width });
        });


    });
    $('.menu-item').eq(0).click(function(){
        location.assign('index.html');
    });
    $('.menu-item').eq(1).click(function(){
        location.assign('blog.html')
    });
    $('.menu-item').eq(2).click(function(){
        location.assign('liuyan.html')
    });
    $('.menu-item').eq(3).click(function(){
        location.assign('liuyan.html')
    });
    $('.menu-item').eq(4).click(function(){
        location.assign('huanyu.html')
    });
    $('.intro .enter').click(function(){
        location.assign('blog.html')
    });

    //首页 进入博客
    $('.intro').fadeIn("slow");
    $(".down").click(function(){
        $('html,body').animate({scrollTop:700},'slow');
        $(".top").show()

    });
    //置顶
    var top=$(document).scrollTop();
    function fn(){
        if(top>700){
            $(".top").show()
        }else{
            $(".top").hide()
        }
        $(".top").click(function(){
            $('html,body').animate({scrollTop:0},'slow');

        })
    }
    fn()

    // 首页右上角按钮
    $('#menu').on('click', function () {
        var mark = $(this).attr('data-mark');
        if (mark === 'false') {
            $(this).removeClass('menu_open').addClass('menu_close');

            $('#navgation').removeClass('navgation_close').addClass('navgation_open');
            $(this).attr({ 'data-mark': "true" });
        } else {
            $(this).removeClass('menu_close').addClass('menu_open');

            $('#navgation').removeClass('navgation_open').addClass('navgation_close');
            $(this).attr({ 'data-mark': "false" });
        }
    });





























});