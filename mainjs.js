let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection){ 
    // playRound is comparing itself to getComputerChoice and selecting a winner
    playerSelection = prompt("Rock Paper or Scissors?").toUpperCase()

    console.log(playerSelection)
    //playerSelection collects user's answer
        
        function getComputerChoice (){
        let rpc = ["ROCK","PAPER","SCISSORS"]
        let randomNum = Math.floor(Math.random() * 3)
        let compChoice = rpc[randomNum]

        console.log(compChoice)
        
        

        if (playerSelection == compChoice){
        console.log("tie")
        }
        else if (playerSelection == "ROCK" && compChoice == "PAPER" ){
            computerScore++
            console.log("YOU LOSE")
            console.log("user " + playerScore)
            console.log("computer " + computerScore)
            
            return computerScore
        }
        else if (playerSelection == "ROCK" && compChoice == "SCISSORS" ){
            playerScore++
            console.log("YOU WIN")
            console.log("user " + playerScore)
            console.log("computer " + computerScore)
            return playerScore
        }
        
        else if (playerSelection == "PAPER" && compChoice == "SCISSORS" ){
            computerScore++
            console.log("YOU LOSE")
            console.log("user " + playerScore)
            console.log("computer " + computerScore)
            
            return computerScore

        }
        else if (playerSelection == "PAPER" && compChoice == "ROCK" ){
            playerScore++
            console.log("YOU WIN")
            console.log("user " + playerScore)
            console.log("computer" + computerScore)
            return playerScore
        }
        
        else if (playerSelection == "SCISSORS" && compChoice == "ROCK" ){
            computerScore++
            console.log("YOU LOSE")
            console.log("user " + playerScore)
            console.log("computer " + computerScore)
            
            return computerScore
        }
        else if (playerSelection == "SCISSORS" && compChoice == "PAPER" ){
            playerScore++
            console.log("YOU WIN")
            console.log("user " + playerScore)
            console.log("computer " + computerScore)
            return playerScore
        }

        
        
        

        // getComputerchoice is generating a random answer of Rock, Paper, or Scissors
}

    computerSelection = getComputerChoice()
    
//console.log(playerScore)
//console.log(computerScore)

  

}




playRound()
playRound()
playRound()
playRound()
playRound()