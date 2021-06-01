//window popup script
function winPop(url) {
    window.open(url, "popup", "width=300,height=300,left=10,top=10,resizable=no,scrollbars=no");
}
/**
 * document.location.href split
 * return array Param
 */



 $(document).ready(function(){
   $(".open").on('click',function(){
     $(".search").show();
     $(".dim").show();
   });
   $(".popup .close").on('click',function(){
     $(this).parent().hide();
     $(".dim").hide();
   })
 });

 $(function(){

     $(window).scroll(function(){
      if( $(window).scrollTop() > 0){
        $('body').addClass('scroll');
      }else{
        $('body').removeClass('scroll');
      }

    });

 });




function getQueryString(sKey)
{
    var sQueryString = document.location.search.substring(1);
    var aParam       = {};

    if (sQueryString) {
        var aFields = sQueryString.split("&");
        var aField  = [];
        for (var i=0; i<aFields.length; i++) {
            aField = aFields[i].split('=');
            aParam[aField[0]] = aField[1];
        }
    }

    aParam.page = aParam.page ? aParam.page : 1;
    return sKey ? aParam[sKey] : aParam;
};

$(document).ready(function(){
    // tab
    $.eTab = function(ul){
        $(ul).find('a').click(function(){
            var _li = $(this).parent('li').addClass('selected').siblings().removeClass('selected'),
                _target = $(this).attr('href'),
                _siblings = '.' + $(_target).attr('class');
            $(_target).show().siblings(_siblings).hide();
            return false
        });
    }
    if ( window.call_eTab ) {
        call_eTab();
    };
});


$(".search .open").click(function(){
  $('.searchBg').toggleClass('up');
});

$(".searchBg .close").click(function(){
  $('.searchBg').removeClass('up');
});


$(window).scroll(function(){
   if( $(window).scrollTop() > 0){
     $('body').addClass('scroll');
   }else{
     $('body').removeClass('scroll');
   }
});


AOS.init({

  });
