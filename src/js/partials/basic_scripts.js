jQuery.browser = {};
jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

var scroller=jQuery.browser.webkit ? "body": "html";

$.scrollbarWidth=function(){var a,b,c;if(c===undefined){a=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b=a.children();c=b.innerWidth()-b.height(99).innerWidth();a.remove()}return c};


/* scrollUp */
function scrollUp(block,targetBlock) {

    $(block).click(function(e){
        var target = $(targetBlock).offset().top;

        $(scroller).animate({scrollTop:target},800);
        return false;

        e.preventDefault();
    });
}

function oneHeightItems(){

    function oneHeight(block){
        var height=0;
        block.removeAttr('style');
        block.each(function(){
            if($(this).height()>height){
                height=$(this).height();
            }
        });
        block.css('height', height);
    }

    oneHeight($('.oneHeight'));

    if($(window).width() >= 640){

        oneHeight($('.comment-slider-title'));
        oneHeight($('.comment-slider-text'));

    }

    $(window).load(function(){

        if($(window).width() >= 640){

            oneHeight($('.comment-slider-title'));
            oneHeight($('.comment-slider-text'));

        }

    });

    $(window).resize(function(){

        if($(window).width() < 641){

            $('.comment-slider-title, .comment-slider-text').removeAttr('style');

        }else{
            oneHeight($('.comment-slider-title'));
            oneHeight($('.comment-slider-text'));
        }

    });

}

/*scroll animation*/
function animationBlock(item){

    $(window).scroll(function(){
        checkForAnimate();
    });

    function checkForAnimate(){
        var bottomCheck = $(window).height()+$(window).scrollTop();
        var windowTop = $(window).scrollTop()+($(window).height()/1.5);
        item.each(function(){
           if(windowTop>$(this).offset().top || bottomCheck > $('body').height()*0.98){

              var itemSect = $(this);
              var point = 0;
              itemSect.find('.animate-it').addClass('animated');

              var timer = setInterval(function(){
                 itemSect.find('.animate-delay').eq(point).addClass('animated');
                 point++;
                 if(itemSect.find('.animate-delay').length == point){
                     clearInterval(timer);
                 }
              },200);


           }
        });
    }
    checkForAnimate();
}

/*GO TO href*/
function goTo(){
    $('.navigation nav a').click(function(e) {
        $('.navigation nav').removeClass('active');
        $('.navigation button').removeClass('active');
        $('body').removeClass('overflover');

        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top-136;
        $(scroller).animate({scrollTop:target},500);
    });
}

// cut text script

function cutText(){
    var filler = '...';
    var filler_length = filler.length;
    $('.cut-text').each(function(){
        var value = $(this).data('cut') - filler_length;
        var text = $.trim($(this).text());
        if(text.length > value && value > 0){
            var newText = text.substring(0,value) + filler;
            $(this).text(newText);
        }
    });
};

/*header buter*/
function headeButer(menuMobile,toggleMenu){
    if(menuMobile){
        menuMobile.click(function(event) {
            if($(window).width()<768-$.scrollbarWidth()){
                $(this).toggleClass('active');
                toggleMenu.toggleClass('active');
                $('body').toggleClass('overflover');
            }
        });

        $(document).on('click touchstart',function (event){
            if($(window).width()<768-$.scrollbarWidth()){
                var div = toggleMenu;
                if (!div.is(event.target) && div.has(event.target).length === 0 && !menuMobile.is(event.target) && menuMobile.has(event.target).length === 0)
                    {
                        toggleMenu.removeClass('active');
                        menuMobile.removeClass('active');
                        $('body').removeClass('overflover');

                    }
            }
        });
    }
}

/* DOCUMENT READY  */
$(document).ready(function() {
    headeButer($('.navigation'), $('.navigation nav'));

    oneHeightItems();
    $('.footer_placeholder').height($('.footer').outerHeight());

    goTo();
    //animationBlock($('.setion-animate'));
});

$(window).resize(function() {
    if ($(window).width() > 768 - $.scrollbarWidth()) {
        $('body').removeClass('overflover');;
        $('.navigation nav').removeClass('active');
        $('.navigation button').removeClass('active');
        $('body').removeClass('overflover');
    }

    $('.footer_placeholder').height($('.footer').outerHeight());
});