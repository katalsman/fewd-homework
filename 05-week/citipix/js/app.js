$(document).ready(function() {

//if a user clicks "update" then background image changes based on var city value

$("#submit-btn").click(cityPix) // if submit button is clicked, then run cityPix function

function cityPix(){
  event.preventDefault()  // prevents default running
  var city = $("#city-type").val() // variable = city; targeting city-type, storing input as a value.
  console.log("update clicked")
  $('#form').trigger("reset") // reset input form to default

  if(city == "los angeles" || city == "la" || city == "LA" || city == "Los Angeles") {
    $("body").attr("class", "la")
    console.log("los angeles")
    //if city value equals any of the defined values above, then target body. Change class attribute (background-image) to la class
}
  else if(city == "nyc" || city == "new york" || city == "New York" || city == "NYC") {
    $("body").attr("class", "nyc")
    console.log("new york")
  } // if not los angeles, etc. then look for other values/inputs as follows

  else if(city == "sf" || city == "san francisco" || city == "SF" || city == "San Francisco" || city =="Bay Area") {
    $("body").attr("class", "sf")
    console.log("san francisco")
  }

  else if(city == "sydney" || city == "syd" || city == "Sydney") {
    $("body").attr("class", "sydney")
    console.log("sydney")
  }

  else if(city == "austin" || city == "atx" || city == "Austin"){
    $("body").attr("class","austin")
    console.log("austin")
  }

  else {
    alert("City not accepted")
    $("body").attr("class","body")
  }
  //if city is NOT one of the accepted values, run alert, and change background back to general


}
  });
