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

    /* Animation */

     $('.js--about-me').waypoint(function (direction) {
         if (direction == "down") {
             $('.about-me-1').addClass('animate-left');
             $('.about-me-2').addClass('animate-right');
             $('.inner-box').addClass('animate-bottom');
         }
     }, {
         offset: '80px;'
     });

    $('.section-skills').waypoint(function (direction) {
        if (direction == "down") {
            $('.animate-skill').addClass('animate-bottom2');
           
        }
    }, {
        offset: '140px;'
    });

    $('.section-achievements').waypoint(function (direction) {
        if (direction == "down") {
            $('.achieve-1').addClass('animate-bottom2');
        }
    }, {
        offset: '120px;'
    });

    
    /*Navigation Scroll */
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
          }, 1000);
          }
        }
      });

    
      /* Mobile navigation */
      $('.js--nav-icon').click(function(){
          var nav = $('.js--main-nav');
          var icon = $('.js--nav-icon i');

          nav.slideToggle(200);
          if(icon.hasClass('fa-stream')){
              icon.removeClass('fa-stream');
              icon.addClass('fa-times');
              icon.addClass('icon-padding')
          }
          else{
              icon.removeClass('fa-times');
              icon.removeClass('icon-padding');
              icon.addClass('fa-stream');
          }
      });

});
