$(document).ready(function(){
    function setEqualHeight(columns){
        var tallestcolumn = 0;
        columns.each(
        function(){
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn){
                tallestcolumn = currentHeight;
            }
        });
        columns.height(tallestcolumn);
    }
    $('.base-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
    $('.inner-nav').prev('a').click(function(e){
        e.preventDefault();
         $('.inner-nav').stop(false, true);
        $(this).toggleClass('open').next().slideToggle();
    });
    $('.toggle-menu').on('click',function(){
        if( $('#main-menu').is('.on') ){
            $('#main-menu').slideUp(400).removeClass('on');
        }else{
            $('#main-menu').slideDown(400).addClass('on');    
        }
        

    });
});
