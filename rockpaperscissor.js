const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock'|| userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Error!')
  };    
};
function getComputerChoice(){
  const randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
          case 0:
            return 'rock';
          case 1:
            return 'paper';
          case 2:
            return 'scissors';
          case 3:
            return 'bomb';
          };
};
function determineWinner(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return 'The game is a tie !';
  };
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The computer won !';
    } else {
      return 'You won !';
    };
  };
  if(userChoice === 'paper'){
    if(computerChoice === 'scissor'){
      return 'The computer won !';
    } else {
      return 'You won !';
    };
  };
  if(userChoice === 'scissor'){
    if(computerChoice === 'rock'){
      return 'The computer won !';
    } else {
      return 'You won !';
    }; 
  };
  if(userChoice === 'bomb'){
      return 'You won !';
  };
};
function playGame(){
  const userChoice = getUserChoice('scissor');
  const computerChoice = getComputerChoice();
  console.log('You threw : ' + userChoice);
  console.log('The computer threw : ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice ));
};

playGame();
