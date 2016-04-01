//This waits til the page finishes loading before running the code
$(document).ready(function() {

    $(".readmore").click(showAdditionalText)
//Targets with class="readmore"
//If it's clicked, runs the showAdditionalText function
    function showAdditionalText(){
      $("#show-this-on-click").slideDown()
      event.preventDefault() // Prevents browser from scrolling to the top when clicked
    }

});
