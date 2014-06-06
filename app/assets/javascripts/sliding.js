$(document).ready(function() {

  $('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
      if ($target) {
        var targetOffset = $target.offset().top;
        $(this).click(function() {
          $("#nav li a").removeClass("active");
          $(this).addClass('active');
          $('html, body').animate({scrollTop: targetOffset}, 1000);
          return false;
        });
      }
    }
  });

  
  var $window = $(window);
  $('div[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object
    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
           
      // Put together our final background position
      var coords = '50% '+ yPos + 'px';
 
      // Move the background
      $bgobj.css({ backgroundPosition: coords });
    }); 
  });

});