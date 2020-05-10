// Menu apperance and disappear



$( document ).ready(function() {
    var prevScrollPosition = $(document).scrollTop();

    $(document).scroll(function() {
      var currentScrollPosition = $(document).scrollTop();
      if(currentScrollPosition > prevScrollPosition) {
        $(".navbar").css("top", "-130px");
      }
      else {
        $(".navbar").css("top", "0");
      }
      prevScrollPosition = currentScrollPosition;
    });
});
