$(function () {
  $('#modal__btn0').click(function(){
    $('#modal__0, #overlay').fadeIn();
    scrollPosition = $(window).scrollTop();
		$('body').addClass('fixed').css({'top': -scrollPosition});
  })
  
   $('#overlay , #close__btn0').click(function(){
    $('#modal__0, #overlay').fadeOut();
		$('body').removeClass('fixed').css({'top': 0});
		window.scrollTo( 0 , scrollPosition );
  })

  $('#modal__btn1').click(function(){
    $('#modal__1, #overlay').fadeIn();
    scrollPosition = $(window).scrollTop();
		$('body').addClass('fixed').css({'top': -scrollPosition});
  })
  
   $('#overlay , #close__btn1').click(function(){
    $('#modal__1, #overlay').fadeOut();
		$('body').removeClass('fixed').css({'top': 0});
		window.scrollTo( 0 , scrollPosition );
  })
});

$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});
