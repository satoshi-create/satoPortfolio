jQuery(document).ready(function(){
    
//    meanmenu
    
   $(function() {
            $('nav').meanmenu();
         });
                                   

        //   open時、透過色の挿入
    $(function() {
            var num = 0;
            $("a.meanmenu-reveal").click(function() {
                $(this).data("click", ++num);
                var click = $(this).data("click");
                //    奇数時の処理
                if (click % 2 == 1) {
                    $('.mean-container .mean-bar').addClass('mean-bar-b');
                    
            }
                //    偶数時の処理
                else {
                    $('.mean-container .mean-bar').removeClass('mean-bar-b');
                }
            });
        });
        
    
    //    inview&animated
    $(function() {
        $('.title').on('inview', function(event, isInView){
            if (isInView) {
                $(this).addClass('rubberBand');
            }else{
                $(this).removeClass('rubberBand'); //elseをいれなければ、一度きりのアニメーションになる
            }
        });
    });

    

    //ページヌルヌル
$(function() {
    $('a[href^=#]').click(function() {
        var speed = 1000;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});
    


    
    
//conceptのアニメーション
    //    旧ネットワーク
$(function(){
    var num = 0;
    $(".icon-hand.old").click(function() {
        $(this).data("click", ++num);
        var click = $(this).data("click");
        //    奇数時の処理
        if (click % 2 == 1) {
//            $('.gmap').addClass('gmap-b');
            $('.icon-hub').fadeIn();
            $('.icon-track').delay(2000).fadeIn();
            $('.icon-ship').delay(7000).fadeIn();
            //$('.icon-ship').fadeIn().animate({opacity: 0}, 10000,'swing');

        }
        //    偶数時の処理
        else {
//            $('.gmap').removeClass('gmap-b');
            $('.icon-hub').hide();
            $('.icon-track').hide();
            $('.icon-droon').hide();
            $('.icon-droon02').hide();
            $('.icon-ship').hide();

        }
    });
});

    //新ネットワーク
$(function(){
    var num = 0;
    $(".icon-hand.new").click(function() {
        $(this).data("click", ++num);
        var click = $(this).data("click");
        //    奇数時の処理
        if (click % 2 == 1) {
//            $('.gmap').addClass('gmap-b');
            $('.icon-hub').fadeIn();
            $('.icon-track').delay(2000).fadeIn();
            $('.icon-droon').delay(7000).fadeIn();
            $('.icon-droon02').delay(7000).fadeIn();

        }
        //    偶数時の処理
        else {
//            $('.gmap').removeClass('gmap-b');
            $('.icon-hub').hide();
            $('.icon-track').hide();
            $('.icon-droon').hide();
            $('.icon-droon02').hide();
            $('.icon-ship').hide();

        }
    });
});
    
    

//project-tokyo,project-ritouのアニメーション
    $(".tokyodroon").click(function () { 
        $('.tokyodroon').css('display','none'); 
        $('.tokyodroon-anime').css('display','block'); 
        $('.container-tokyo').addClass('container-tokyo-anime');
    });



    $(".ritoudroon").click(function () { 
        $('.ritoudroon').css('display','none'); 
        $('.ritoudroon-anime').css('display','block'); 
        $('.container-ritou').addClass('container-ritou-anime');
    });


   
    
    
    
    
    
    
    

    
    
});





