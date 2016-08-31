$(function() {
  $('.tabs__content > div').each(function (i) {
    if(i!= 0){
      $(this).css({'display':'none'});
    }
  });
  $('.tabs__link').on('click',function (event) {
    event.preventDefault();
    var $tabId = $(this).attr('href');
    console.log($tabId);
    $('.tabs__link').removeAttr('active');
    $(this).attr('active','active');
    $('.tabs__content > div').hide(0);
	  $($tabId).show();
  });
});
