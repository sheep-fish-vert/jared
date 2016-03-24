try{

    $(document).ready(function() {
        $(document).on('click touchstart', function(event) {
            if ( !$('.superform').is(event.target) && (!$('.buton').is(event.target)) && ($('.superform').has(event.target).length === 0) && ($('.buton').hasClass('loading')) || $('.superform .del').is(event.target) ) {

                $('.box-to-box').find('.superform').removeClass("slowshow");
                setTimeout(function() {
                    $('.buton').removeClass('loading');
                }, 300);
            };
        });

        $('.buton').click(function(event) {
            event.preventDefault();
            $(this).addClass('loading');
            setTimeout(function() {
                $('.box-to-box').find('.superform').addClass("slowshow");
            }, 300);

        });

    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_2.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}