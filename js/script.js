$(document).ready(function(){


     $(".main-section-wrap >.slide-box").slick({
          slidesToShow:3,
          swipeToSlide: true ,
          dots: true,
    });

    $().ready(function(){
  
     $(".magazine-wrap >.slide-box").slick({
       slidesToShow:3,
     })
   });

});