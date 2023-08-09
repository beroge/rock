// get random computer weapon
function getCompWep() {
    const choices = ["rock", "paper", "scissors"];
    const ranWepIndex = Math.floor(Math.random() * choices.length);
    const ranWep = choices[ranWepIndex];
    // console.log(ranWep);
    return ranWep;
  }
  console.log(getCompWep());
  
  // get player weapon
  function getPlayerWep() {
    let choice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
      choice = prompt(
        "Invalid choice.  Choose rock, paper, or scissors:"
      ).toLowerCase();
    }
    return choice;
  }
  //console.log(getPlayerWep());  **leaving this will cause getPlayerWep to loop indefinately
  
 // Battle round
function battle() {
    const playerWep = getPlayerWep();
    const compWep = getCompWep();
    
    document.write(`You chose ${playerWep}`);
    document.write(`<br/>Computer chose ${compWep}`);
    
    //Determin Winner
    const winner = determineWinner(playerWep,compWep);
    if (winner === 'player') {
      playerScore ++;
    } else if (winner === 'comp') {
      compScore ++;
    }
    document.write(`Battle result:${winner === 'tie' ? 'It\'s a tie!' : winner === 'player' ? 'You win!' : 'Computer wins!'}`);
  }
  battle();