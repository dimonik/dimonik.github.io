  jQuery(document).ready(function($) {

    var contactsHidden = true; 
    var contacts = $( '#contact' );
    var body = document.getElementsByTagName('body')[0];
    var navBar = document.getElementById('navigation');

    function toggleContacts (windowWidth, hidden) {
      if (windowWidth >= 980) {
        navBar.style.position=hidden?'fixed':'relative';
        body.style.paddingTop=hidden?'50px':'0px';
      } else {
        body.style.paddingTop='0px';
        navBar.style.position='static';
      }
    }

    $( '#contacts_toggle' ).click(function( event ){
      var windowWidth = $(window).width();
      if (contactsHidden == false){
        contacts.slideToggle(400, function () {
          toggleContacts(windowWidth, true);
        });
      } else {
        toggleContacts (windowWidth, false);
        contacts.slideToggle(400);
      }
      contactsHidden = !contactsHidden;
    });

 
    $( '#close_form' ).click(function( event ){
      contacts.slideToggle(400);
      contactsHidden = !contactsHidden;
    });

    $(window).resize(function() {
      toggleContacts($(window).width(), contactsHidden);
    });

	});
	

