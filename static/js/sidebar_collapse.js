function sidebar_collapse(){

    // when opening the sidebar
    $('#sidebarCollapse').on('click', function () {
        // open sidebar or close sidebar
        $('#sidebar').toggleClass('active');
        // fade in the overlay
        $('.overlay').fadeIn();
    });


    // if dismiss or overlay was clicked
    $('#dismiss, .overlay').on('click', function () {
      // hide the sidebar
      $('#sidebar').toggleClass('active');
      // fade out the overlay
      $('.overlay').fadeOut();
    });
}