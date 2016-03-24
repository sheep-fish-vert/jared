try{
    function headerFixed(){

        function headeFIX(){
            if($(window).width()>768){
                var sticky = $('header'),
                    scroll = $(window).scrollTop(),
                    header = $('header').height();
                if (scroll > 0){
                    sticky.addClass('active');
                    $('.global-wrapper').css('padding-top', header+'px');
                }else {
                    sticky.removeClass('active');
                    $('.global-wrapper').removeAttr('style');
                }
            }

            if( $(window).width()<=768 ){
                $('header').removeClass('active');
            }
        }
        headeFIX();

        $(window).resize(function(event) {
            headeFIX();
        });

        $(window).scroll(function(event) {
            headeFIX();
        });
    }
    $(document).ready(function(){
        headerFixed();
    });

    $(window).load(function(){

    });

    $(window).resize(function(){
/*        if ( $(window).width()<= 992){
            $('.bottom-header').removeClass('active');
        }*/
    });

}
catch(e){

    console.log('develop_4.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}