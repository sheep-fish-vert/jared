try{
    function headerFixed(){
        if($(window).width()>992){
            var stickyOffset = $('.bottom-header').offset().top;
            $(window).scroll(function(){
              var sticky = $('.bottom-header'),
                  scroll = $(window).scrollTop();
              if (scroll >= stickyOffset){
                sticky.addClass('active');}
                else {sticky.removeClass('active');}
            });
        }
    }
    $(document).ready(function(){
        headerFixed();
    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_4.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}