
var responses = ["yes", "no", "ask again later", "maybe", "replay hazy", "signs point to yes"]

$(document).ready(function() {

$("#submit").click(giveResponse)

function giveResponse() {
    var answer = responses[Math.floor(Math.random() * responses.length)]
    $("#answer").text(answer)
    console.log(answer)
}

});
