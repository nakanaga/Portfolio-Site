$(function () {
  $('#open-0').click(function(){
    $('#modal-0, #overlay').fadeIn();
    scrollPosition = $(window).scrollTop();
		$('body').addClass('fixed').css({'top': -scrollPosition});
  })
  
   $('#overlay , #close-0').click(function(){
    $('#modal-0, #overlay').fadeOut();
		$('body').removeClass('fixed').css({'top': 0});
		window.scrollTo( 0 , scrollPosition );
  })

  $('#open-1').click(function(){
    $('#modal-1, #overlay').fadeIn();
    scrollPosition = $(window).scrollTop();
		$('body').addClass('fixed').css({'top': -scrollPosition});
  })
  
   $('#overlay , #close-1').click(function(){
    $('#modal-1, #overlay').fadeOut();
		$('body').removeClass('fixed').css({'top': 0});
		window.scrollTo( 0 , scrollPosition );
  })
});
