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
        dots: true
    });
    $('.inner-nav').prev('a').click(function(e){
        e.preventDefault();
         $('.inner-nav').stop(false, true);
        $(this).toggleClass('open').next().slideToggle();
    });
});
