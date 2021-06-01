var jb = jQuery.noConflict();
  jb(document).ready(function(){
    jb('#mainBanner').slick({
      slidesToShow: 1,
      slidesToScroll : 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots : true,
      dotsClass : "slick-dots"
        // fade: true, /* 슬라이드가 아닌 fade효과처리*/
      });
});
