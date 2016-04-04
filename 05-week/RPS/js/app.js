$(document).ready(function() {

  var computerWeapon = "rock"

  function choseRock() {
    console.log("You chose Rock")
    $("#paper").hide()
    $("#scissors").hide()
    if(computerWeapon == "rock"){
      alert("It's a tie!")
    } else if(computerWeapon == "scissors"){
      alert("You Win!!")
    } else if(computerWeapon == "paper"){
      alert("You lost")
    } else {
      alert("Oops, something went wrong. It's not a valid weapon")
    }

  }

  function chosePaper() {
    console.log("You chose paper")
    $("#rock").hide()
    $("#scissors").hide()
    if(computerWeapon == "rock"){
      alert("You lost")
    }
  }

  function choseScissors() {
    console.log("You chose paper")
  }

  $("#rock").click(choseRock)
  $("#paper").click(chosePaper)
  $("#scissors").click(choseScissors)



});
//how to randomize using array...randomly picking an item form array
//store what computer chose by using var / variable -- var = rock by picking a random number from array....for "computer choice"
