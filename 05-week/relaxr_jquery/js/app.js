//This waits til the page finishes loading before running the code
$(document).ready(function() {

    $(".readmore").click(showAdditionalText)
//Targets with class="readmore"
//If it's clicked, runs the showAdditionalText function
    function showAdditionalText(){

      console.log(this)
      $("#show-this-on-click").slideDown()
      $(this).hide()
      $(".readless").show()
      event.preventDefault() // Prevents browser from scrolling to the top when clicked
    }

    $(".readless").click(hideAdditionalText)

    function hideAdditionalText(){
      $("#show-this-on-click").hide()
      $(".readless").hide()
      $(".readmore").show()
      event.preventDefault()
    }

});
