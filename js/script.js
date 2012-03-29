/* Author: Dan Linn */
(function($) {
  $(window).resize(function(){
    if(!$(".mobileselect").length) {
      $('#navigation ul').mobileSelect({
        autoHide: true, // Hide the ul automatically
        defaultOption: "Go to...", // The default select option
        deviceWidth: 480, // The select will be added for screensizes smaller than this
        appendTo: '', // Used to place the drop-down in some location other than where the primary nav exists
        className: 'mobileselect', // The class name applied to the select element
        useWindowWidth: true // Use the width of the window instead of the width of the screen
      });
    } else if ($(window).width()>=480) {
      $('#navigation ul').show();
      $('.mobileselect').hide();
    } else {
      $('#navigation ul').hide();
      $('.mobileselect').show();
    }
  });
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
      //Add HTML5 Placeholder support for IE
      if(!Modernizr.input.placeholder){
        $("input").each(function(){
          if($(this).val()=="" && $(this).attr("placeholder")!=""){
              $(this).val($(this).attr("placeholder"));
              $(this).focus(function(){
                if($(this).val()==$(this).attr("placeholder")) $(this).val("");
              });
            $(this).blur(function(){
              if($(this).val()=="") $(this).val($(this).attr("placeholder"));
            });
          }
        });
      }
    }
  }
})(jQuery);





