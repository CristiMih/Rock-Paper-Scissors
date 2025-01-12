function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors'];
  const randomNum = Math.random();
  const index = Math.floor(randomNum * 3);
  return choices[index];
}


