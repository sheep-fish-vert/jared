try{
    function headerFixed(){

        function headeFIX() {
            var ddd = $.scrollbarWidth();
            if ($(window).width() > 768 - ddd) {
                var fixWP = 0;
                if (!!$('#wpadminbar').length ) { 
                    fixWP = $('#wpadminbar').height();
                }
                var sticky = $('.bottom-header-wrap'),
                    scroll = $(window).scrollTop(),
                    header = $('.top-header').height();
                if (scroll > 97){
                    sticky.addClass('active');
                    sticky.css('top', fixWP+'px');  
                   // $('.global-wrapper').css('padding-top', header+'px');
                }else {
                    sticky.removeClass('active');
                    sticky.css('top', 97 + fixWP - scroll +'px' );
                    //$('.global-wrapper').removeAttr('style');
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

    function changeLeng(){
        if(  $(window).width()<=768  ){
            //$('.language li:not(.active)').hide();
            $('.language li').on('click', function(event) {
                if( $('.language').hasClass('slidedawn') ){
                    console.log('has');
                }else{
                    event.preventDefault();
                    $(this).closest('.language').addClass('slidedawn');
                    $('.language li').slideDown(function() {});
                }
            });

            $(document).on('click', function(event) {
                if( !$('.language').is(event.target) && $('.language').has(event.target).length === 0 && !$('.language').hasClass('.slidedawn')){
                    $('.language li:not(.active)').slideUp(function(){
                        $('.language').removeClass('slidedawn');
                    });
                }
            });
        }
    }
    $(document).ready(function(){
        changeLeng();
        headerFixed();
    });

    $(window).load(function(){

    });

    $(window).resize(function(){
        if( $(window).width()>768 ){
            $('.language li').removeAttr('style');
        }
    });

}
catch(e){

    console.log('develop_4.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}