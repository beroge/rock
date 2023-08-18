// get random computer weapon
function getCompWep() {
    const choices = ["rock", "paper", "scissors"];
    const ranWepIndex = Math.floor(Math.random() * choices.length);
    const ranWep = choices[ranWepIndex];
    // console.log(ranWep);
    return ranWep;
  }
  console.log(getCompWep());
  
  function determineBatWinner(playerWep, compWep) {
    if (playerWep === compWep) {
      return "tie";
    } else if (
      (playerWep === "rock" && compWep === "scissors") ||
      (playerWep === "paper" && compWep === "rock") ||
      (playerWep === "scissors" && compWep === "paper")
    ) {
      return "player";
    } else {
      return "comp";
    }
  }
  
  
  
  // get player weapon
  function getPlayerWep() {
    let choice = window.prompt("Choose rock, paper, or scissors: ").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
      choice = window.prompt("Invalid choice.  Choose rock, paper, or scissors: ").toLowerCase();
    }
    return choice;
  }
  
  // Battle round
  function battle() {
    const playerWep = getPlayerWep();
    const compWep = getCompWep();
  
    console.log(`You chose ${playerWep}`);
    console.log(`Computer chose ${compWep}`); 
  
  
    //Determin Winner
    const winner = determineBatWinner(playerWep, compWep);
    if (winner === "player") {
      playerScore++;
    } else if (winner === "comp") {
      compScore++;
    }
    console.log(
      `Battle result: ${
        winner === "tie"
          ? "It's a tie!"
          : winner === "player"
          ? "You win!"
          : "Computer wins!"
      }`
    );
  }
  
  let playerScore = 0;
  let compScore = 0;
  
  // Increment battle counter up to five
  for (let round = 1; round <= 5; round ++) {
    console.log(`\n--- Round ${round} ---`);
    battle();
  }
  
  console.log('\n--- Battle Results ---');
  console.log(`Player: ${playerScore}`);
  console.log(`Computer: ${compScore}`);
  
  if (playerScore > compScore) {
    console.log('Congrats!  You are the winner!')
  } else if (playerScore < compScore) {
    console.log('You lost to a computer!')
  } else {
    console.log('It\'s a tie, you both are losers')
  }