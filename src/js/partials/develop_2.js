try {
    function rovnyaemText() {
        var text = $('.about .txt').height();
        var image = 437;

        if (text >= image) {
            $('.about .txt-wrap').height(image - 85);
            $('.about .txt .button').css('display', 'block');
        } 
    }

    var element = [];
    var count = 0; 
    $(document).ready(function() {
        $(document).on('click touchstart', function(event) {
            if (!$('.superform').is(event.target) && (!$('.buton').is(event.target)) && ($('.superform').has(event.target).length === 0) &&  ($('.buton').hasClass('loading')) || $('.superform .del').is(event.target) ) {

                $('.box-to-box').find('.superform').removeClass("slowshow");
                setTimeout(function() {
                    $('.buton').removeClass('loading');
                }, 300);

                if ($(window).width() < 767){
                    console.log('asdfasdfasdfasdf');
                    $('body').removeClass('overflover2');
                }
            };

            if ($('.conteiner-list>ul>li>span').is(event.target) ) {
                event.preventDefault();
                console.log($(event.target).closest('li').attr('data-file-cell'));
                var i = $(event.target).closest('li').attr('data-file-cell');
                $(event.target).closest('li').remove();
                delete element[i];
                var redFlag = false;                 
                for (var j = 0; j < element.length; j++) {
                    if (element[j] !=undefined){
                        redFlag = true;                      
                    }                
                }

                if (!redFlag) {
                    $('.krasotka').removeClass('active-plus');
                };

            }
        });

        $('.buton').click(function(event) {

            if ($(window).width() < 767){
                $('body').addClass('overflover2');
                console.log('zshlo');
            }

            event.preventDefault();
            $(this).addClass('loading');
            setTimeout(function() {
                $('.box-to-box').find('.superform').addClass("slowshow");
            }, 300);

        });

        rovnyaemText();
        $('.about .txt .button').click(function() {
            $('.about .txt-wrap').css('height', 'auto');
            $('.about .txt .button').css('display', 'none');
        });

        $("#add_doc").on('change', function() {
            var control = document.getElementById('add_doc');            
            var content = '';
            var coutering = element.length;

            for (var j = 0; j < control.files.length; j++) {
                element[coutering] = control.files[j];
                coutering++;
            };

            console.log(element);

            for (var j = 0; j < element.length; j++) {
                if (!!element[j]){
                    content += "<li data-file-cell="+ j  + "><span> x </span><b>" + element[j].name + "</b></li>";
                }                
            }

            if (element.length != 0){
                $('.krasotka').addClass('active-plus');
            }

            $('.conteiner-list ul').html(content);

        })        
    });

    $(window).load(function(){

    });

    $(window).resize(function(){
        rovnyaemText();
    });

}
catch(e){

    console.log('develop_2.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}