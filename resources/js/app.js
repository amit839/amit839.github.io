$(document).ready(function(){

    /* sticky navigation*/
    $('.js--about-me').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
        offset : '80px;'
    });

    /* Scroll on buttons
    $('.js-scroll-to-home').click(function(){
        $('html,body').animate({scrollTop: $('header').offset().top}, 1000);
    });
    */


    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top-30
          }, 1000, function() {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr('tabindex','-1');
                $target.focus();
              };
            });
          }
        }
      });

      /* Animations on scroll*/

      $('.js--wp-1').waypoint(function(direction){
          $('.js--wp-1').addClass('animated fadeInRightBig');
      },{
          offset : '60%'
      });
      $('.js--wp-2').waypoint(function(direction){
          $('.js--wp-2').addClass('animated fadeInRightBig');
      },{
          offset : '60%'
      });
      $('.js--wp-3').waypoint(function(direction){
          $('.js--wp-3').addClass('animated fadeInUp');
      },{
          offset : '60%'
      });
      $('.js--wp-4').waypoint(function(direction){
          $('.js--wp-4').addClass('animated zoomInUp');
      },{
          offset : '50%'
      });

      /* Mobile navigation */
      $('.js--nav-icon').click(function(){
          var nav = $('.js--main-nav');
          var icon = $('.js--nav-icon i');

          nav.slideToggle(200);
          if(icon.hasClass('fa-stream')){
              icon.removeClass('fa-stream');
              icon.addClass('fa-times');
          }
          else{
              icon.removeClass('fa-times');
              icon.addClass('fa-stream');
          }
      });

});
