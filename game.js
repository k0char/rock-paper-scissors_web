choices = [
    'rock','paper','scissors'
]

function getComputerChoice(choices) {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function getUserChoice () {
    let choice = prompt("Rock, paper, scissors");
    return choice;
}

function playRound(playerSelection, computerSelection) {

    if (computer_points >= 5 || player_points >= 5) {
        alert("You must restart game first");

    } else {
        let playerSelection_lower = playerSelection.toLowerCase()
        console.log(`player: ${playerSelection_lower}`);

        let computerSelection_lower = computerSelection.toLowerCase()
        console.log(`computer: ${computerSelection_lower}`);

        document.querySelector('#message').innerHTML = '';
        
        if (playerSelection_lower == computerSelection_lower) {
            document.querySelector('#message').innerHTML = 'draw';
            return 'draw';

        } else if (playerSelection_lower == "rock" && computerSelection_lower == "scissors" || playerSelection_lower == "paper" && computerSelection_lower == "rock" || playerSelection_lower == "scissors" && computerSelection_lower == "paper") {
            document.querySelector('#message').innerHTML = "player's point";
            return 'player';

        } else if (computerSelection_lower == "rock" && playerSelection_lower == "scissors" || computerSelection_lower == "paper" && playerSelection_lower == "rock" || computerSelection_lower == "scissors" && playerSelection_lower == "paper") {
            document.querySelector('#message').innerHTML = "computer's point";
            return 'computer';

        } else {
            alert("Check what your writed!")
            return null;
        }
    }
}

function winner (computer_points, player_points) {
    return (computer_points > player_points ? 'computer' : 'player');
}


let computer_points = 0
let player_points = 0
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

      const img = button.querySelector("img");
      playerSelection = img.alt.toLowerCase();
      computerSelection = getComputerChoice(choices);
      roundWinner = playRound(playerSelection, computerSelection);

      switch (roundWinner) {
        case 'player':
            player_points++;
            break;

        case 'computer':
            computer_points++;
            break;

        case 'draw':
            break;
        
        case null:
            break;
    }

    document.querySelector('#player_score').innerHTML = `${player_points}`
    document.querySelector('#computer_score').innerHTML = `${computer_points}`

    if (computer_points >= 5 || player_points >=5 ) {

        const who_won = winner(computer_points, player_points); // checks who won game
        document.querySelector('#message').innerHTML = `And the winner is ${who_won}`
        let message = document.querySelector('#message');
        message.style.fontSize = 50 +'px';
    }
    });
  });

  
// Restart game
const restart_btn = document.querySelector("#restart");
restart_btn.addEventListener("click", () => {

    computer_points = 0
    player_points = 0
    document.querySelector('#player_score').innerHTML = `0`
    document.querySelector('#computer_score').innerHTML = `0`
    message.style.fontSize = 1.5 +'em';
    document.querySelector('#message').innerHTML = "Wybierz kamien / papier / nozyce"

    });