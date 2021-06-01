//
// $(document).ready(function(){
//   var swiper = new Swiper("#mainBanner", {
//         scrollbar: {
//           el: ".swiper-scrollbar",
//           hide: true,
//         },
//       });
//   });

  $(document).ready(function() {
      /* 메인상품이 1개 이상일때 실행   */


  			var swiper1 = new Swiper('#mainBanner', {
  				slidesPerView: 1,
  				autoHeight: true, //enable auto height
  				spaceBetween: 30,
  				loop: true,
  				autoplay: {
  					delay: 4000,
  					disableOnInteraction: false,
  				},
  				pagination: {
  					el: '.swiper-pagination1',
  					type: 'progressbar',
  			  },
          scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
        },
  			});


  	});
