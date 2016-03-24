try{

    // slider main init
    function sliderMainInit(){

        $('.slider-wrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            draggable:false,
            swipe:false
        });

    }

    //comment slider init
    function commentSlider(){

        $('.comment-slider-main').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            draggable:false,
            swipe:false,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

    };


    $(document).ready(function(){

        sliderMainInit();
        commentSlider();

    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_1.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}