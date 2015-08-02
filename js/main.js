// Smooth Scroll

var $contactButton = $('html, body');
$('a[href*=#]').click(function() {
    $contactButton.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1200);
    return false;
});


// Tabs
   $(".tab_content").hide();
   $(".tab_content:first").show();

 // Tab Mode

   $("ul.tabs li").click(function() {

     $(".tab_content").hide();
     var activeTab = $(this).attr("rel");
     $("#"+activeTab).fadeIn();

     $("ul.tabs li").removeClass("active");
     $(this).addClass("active");

   $(".tab_drawer_heading").removeClass("d_active");
   $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

   });

 // Accordion Mode

 $(".tab_drawer_heading").click(function() {

     $(".tab_content").hide();
     var d_activeTab = $(this).attr("rel");
     $("#"+d_activeTab).fadeIn();

   $(".tab_drawer_heading").removeClass("d_active");
     $(this).addClass("d_active");

   $("ul.tabs li").removeClass("active");
   $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
   });

// Border-Right On Last Tab

 $('ul.tabs li').last().addClass("tab_last");
