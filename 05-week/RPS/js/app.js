$(document).ready(function() {

  $("#rock").click(choseRock)
  $("#paper").click(chosePaper)
  $("#scissors").click(choseScissors)

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
      alert("You win")
    }else if(computerWeapon == "scissors"){
      alert("You lost")
    } else if(computerWeapon == "paper"){
      alert("It's a tie")
    }else {
      alert("Oops, something went wrong. It's not a valid weapon")
    }

  }

  function choseScissors() {
    console.log("You chose scissors")
    $("#rock").hide()
    $("#paper").hide()
    if(computerWeapon == "rock"){
      alert("You lose")
    }else if(computerWeapon == "paper"){
      alert("You win")
    }else if(computerWeapon == "scissors"){
      alert("It's a tie")
    }else {
      alert("Oops, not a valid weapon")
    }
  }

  var computerWeapon = Math.random();
    if (computerWeapon < 0.34) {
      computerWeapon = "rock";
      $("#comppaper").hide()
      $("#compscissors").hide()
      console.log("computer rock");
    } else if(computerWeapon <= 0.67) {
      computerWeapon = "paper";
      $("#comprock").hide()
      $("#compscissors").hide()
      console.log("computer paper");
    } else {
      computerWeapon = "scissors";
      $("#comppaper").hide()
      $("#comprock").hide()
      console.log("computer scissors");
  }



});
//issue/bug: computer picks weapon first BEFORE player...so player can always win...how to make computer display AFTER player clicks?
//how to randomize using array...randomly picking an item form array
//store what computer chose by using var / variable -- var = rock by picking a random number from array....for "computer choice"
