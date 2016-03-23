try{

    $(document).ready(function(){
        $('.some-slider').slick({
            infinite: true,
            slidesToShow: 3,
            arrows: false,
            dots:true,
            slidesToScroll: 1,
             responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
        });
    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_5.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}