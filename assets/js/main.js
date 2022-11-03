
$(document).ready(function(){
    $('.mobitems').hide();

    $('#banner .right').owlCarousel({
        items : 1,
        slideSpeed: 300,
        singleItem : true, 
        autoPlay: true,
    });
    $('p.night').click(function(){
        $(this).toggleClass('day');
        $('body').toggleClass('body2');

    })
    window.onload = function(){
        $('#preloader').hide();
    }

    $('.mobile').click(function(){
        var $mobitem = $(this).next('.mobitems');
        if($mobitem.is(':hidden')){
            $mobitem.slideDown(500);
            $('.mobile').html('<i class="fa fa-xmark"></i>');
        }else{
            $mobitem.slideUp(500);
            $('.mobile').html('<i class="fa fa-bars"></i>');
        }
    });
})
