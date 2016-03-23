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


    $(document).ready(function(){

        sliderMainInit();

    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_1.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}