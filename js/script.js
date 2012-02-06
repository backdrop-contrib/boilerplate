/* Author: Dan Linn */
(function($) {
  Drupal.behaviors.mobileMenu = {
    attach: function (context) {
      // your navigation ul selector
       $('#navigation ul').mobileSelect({
        autoHide: true, // Hide the ul automatically
        defaultOption: "Go to...", // The default select option
        deviceWidth: 480, // The select will be added for screensizes smaller than this
        appendTo: '', // Used to place the drop-down in some location other than where the primary nav exists
        className: 'mobileselect', // The class name applied to the select element
        useWindowWidth: true // Use the width of the window instead of the width of the screen
      });
    }
  }
})(jQuery);





