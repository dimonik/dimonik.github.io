
	jQuery(document).ready(function($) {

		    //$('#nav-main').scrollspy()
		    
		    // Localscrolling 
    $('#nav-main, .brand').localScroll();
    $('#news, .container').localScroll();

    function changeSize() {
      var windowHeight = $(window).height();
      var windowWidth = $(window).width();
      var headerHight = windowHeight - 50;
      var sectionHight = headerHight - 160;
      var itemHeaderHeight = sectionHight*0.8;
      var itemFeaturePaddingTop = sectionHight - itemHeaderHeight;
      var itemFeatureHeight = headerHight - itemFeaturePaddingTop*2;
      $('section#headerwrap').css('height', headerHight);
      $('section#portfolio').css('min-height', sectionHight);
      $('section#services').css('min-height', sectionHight);
      $('section#news').css('min-height', sectionHight);
      $('section#team').css('min-height', sectionHight);
      $('section#item-headerwrap').css('min-height', itemHeaderHeight);
      $('section#feature').css({'padding-top' : itemFeaturePaddingTop, 'padding-bottom' : itemFeaturePaddingTop, 'min-height' : itemFeatureHeight});
      if (windowWidth <= windowHeight*1.75) {
        $('section video').css({'height' : '105%', 'width' : 'auto'});
      } else {
        $('section video').css({'height' : 'auto', 'width' : '101%'});
      }
      var videoWidth = $('section video').width();
      $('section video').css({'right' : '50%', 'margin-right' : -1*videoWidth/2 + 'px'});
    }
    changeSize();

    function adjustHeadline() {
      $('section header').each(function() {
        var windowHeight = $(window).height();
        var scrollPosition = $(window).scrollTop();
        if(scrollPosition <= windowHeight) {
          $(this).children('h1').css({'opacity' : 1-scrollPosition/windowHeight*1.2, 'margin-top': -100+scrollPosition/2.5 + 'px'});
        } else {
            $(this).children('h1').css({'opacity' : '1'});
        }
      });
    }
    adjustHeadline();

    $(window).scroll(function(){
      adjustHeadline();
    });

    $(window).resize(function() {
      changeSize();
    });

	});
	

