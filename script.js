var choices = ["r", "p", "s"]

var wins = 0;
var losses = 0;
var ties = 0;

for (var i = 0; i < 3; i++) {
  alert("Round: " + i)

  var userChoice = prompt("Choose between: \n - r \n - p \n - s");
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (userChoice === computerChoice) {
    ties++
    alert("It's a tie");
  } else if (userChoice === "r" && computerChoice === "s") {
    wins++
    alert("You won!");
    alert("Computer's choice was: " + computerChoice);
  } else if (userChoice === "r" && computerChoice === "p") {
    losses++
    alert("You lost!");
    alert("Computer's choice was: " + computerChoice);
  } else if (userChoice === "s" && computerChoice === "r") {
    wins++
    alert("You won!");
    alert("Computer's choice was: " + computerChoice);
  } else if (userChoice === "s" && computerChoice === "p") {
    losses++
    alert("You lost!");
    alert("Computer's choice was: " + computerChoice);
  } else if (userChoice === "p" && computerChoice === "r") {
    wins++
    alert("You won!");
    alert("Computer's choice was: " + computerChoice);
  } else if (userChoice === "p" && computerChoice === "s") {
    losses++
    alert("You lost!");
    alert("Computer's choice was: " + computerChoice);
  } else {
    alert("Invalid Input");
  }
}

alert("You scored: \n - wins: " + wins + "\n - losses: " + losses + "\n - ties: " + ties)