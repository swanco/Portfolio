$(document).ready(function(){
 $('.header').height($(window).height()/2);

 $(".navbar a").click(function(){
   $("body,html").animate({
    scrollTop:$("#" + $(this).data('value')).offset().top
   },1000)

  })
})
