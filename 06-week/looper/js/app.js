// This waits till the page finishes loading before running the code inside the {}

var responses = ["it doesn't matter", "yes", "no", "ask again later", "maybe", "reply hazy"]

$(document).ready(function() {

  console.log(responses)

responses.forEach(
  function(response){
    //alert("take one down, pass it around")
    //alert("you took down the " + response)
    document.write(response + "<br>")
  }
)

document.write("<hr>")
document.write("You have " + responses.length + " Items")

});
