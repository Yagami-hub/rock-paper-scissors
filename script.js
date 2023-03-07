
    let userChoice;
    let computerChoice;
   // User choose rock, paper or scissors, case-insensitive, protected from wrong pick.
    function getUserChoice(){
        userChoice = prompt("Rock, paper, scissors? Choose!");
        while(true) {
            if (userChoice.toLowerCase() == "rock" || userChoice.toLowerCase() == "paper" || userChoice.toLowerCase() == "scissors") {
                alert("Choice made right! Battle is starting!");
                break;
            }
            else {
                alert(" Something went wrong. \n Only rock, paper or scissors! Pick again.");
                userChoice = prompt("Rock, paper, scissors? Choose!");
            }
        }
        return userChoice.toLowerCase();
    }
   // Computer choose rock, paper or scissors.
    function getComputerChoice() {
        switch (Math.floor(Math.random() * 3) + 1) {
            case 1:
                return "rock";
            case 2:
                return "paper";
            case 3:
                return "scissors";
        }
    }
   // Choices compare and the strongest one wins the round.
    function playRound(userChoice, computerChoice) {
        if (userChoice == "rock" && computerChoice == "rock" || userChoice == "paper" && computerChoice == "paper" || userChoice == "scissors" && computerChoice == "scissors") {
            alert(`Battle ended, it's DRAW! \n Your choice was: ${userChoice} \n Computer choice was: ${computerChoice}`);
            return "draw";
        }
        else if (userChoice == "rock" && computerChoice == "paper") {
            alert(`Battle ended, you LOST! \n Your choice was: ${userChoice} \n Computer choice was: ${computerChoice}`);
            return "lose";
        }
        else if (userChoice == "paper" && computerChoice == "scissors") {
            alert(`Battle ended, you LOST! \n Your choice was: ${userChoice} \n Computer choice was: ${computerChoice}`);
            return "lose";
        }
        else if (userChoice == "scissors" && computerChoice == "rock") {
            alert(`Battle ended, you LOST! \n Your choice was: ${userChoice} \n Computer choice was: ${computerChoice}`);
            return "lose";
        }
        else {
            alert(`Battle ended, you WON! \n Your choice was: ${userChoice} \n Computer choice was: ${computerChoice}`);
            return "win";
        }
    }
   // Actual game, 5 rounds played, winner is whoever makes more points, points given for each round won
    function game() {
        let userPoints = 0;
        let computerPoints = 0;
        let roundState;
        let userChoice;
        let computerChoice;
        for (let i = 0; i < 5; i++) {
            userChoice = getUserChoice();
            computerChoice = getComputerChoice();
            roundState = playRound(userChoice, computerChoice);
            if (roundState == "draw") {
                alert("Round ended by DRAW! \nTry again until one of you'll get the win point!")
                while(roundState == "draw") {
                    userChoice = getUserChoice();
                    computerChoice = getComputerChoice();
                    roundState = playRound(userChoice, computerChoice);
                }
                
            }

            if (roundState == "win")
                {
                    userPoints++;
                } 
                else {
                    computerPoints++;
                }
            console.log(`It's ${i+1} round, your points: ${userPoints}, computer's points: ${computerPoints}`);
        }
        if (userPoints > computerPoints) {
            console.log(`You WON the game! \nTotal score: ${userPoints}:${computerPoints}`);
            return "user";
        } else {
            console.log(`You LOST the game! \nTotal score: ${userPoints}:${computerPoints}`);
            return "computer";
        }
    }


    let winner = game();
    console.log(winner);
