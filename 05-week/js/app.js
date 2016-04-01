$(document).ready(function(){

  //alert("Hello")
  $("h1").click(
    function(){
      alert("You clicked the headline")
    }
  )

  //var color = prompt("What color?")
  //console.log(color)

  //color = "black"
  //console.log(color)

  var firstNum = 2
  var secondNum = 2
  var answer = firstNum * secondNum
  console.log("Your total is: ")
  console.log(answer)

  if(answer == 1){
      alert("Answer equals 1")
  }
  //else{
    //alert("Answer is not 1")
  //}

  var lightSwitch = true

  if(lightSwitch == true) {
    alert("The lights are on")
  }else{
    alert("The lights are OFF")
  }

  document.write(answer)

});
