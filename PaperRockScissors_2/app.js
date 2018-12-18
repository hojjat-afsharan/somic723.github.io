let userScore = 0;
let computerScore = 0;

//Cache the dumbs!
const userScore_span = document.getElementById("user-score");
const computerScore_span  = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

const userWord = "user".fontsize(3).sub();
const compWord = "comp".fontsize(3).sub();

function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  let computerChoice = Math.floor(Math.random() * 3);//0 or 1 or 2
  return choices[computerChoice];
}

function convertToWord(letter){
  if(letter === 'r') return "Rock";
  if(letter === 'p') return "Paper";
  return "Scissor";
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${userWord} beats ${convertToWord(computerChoice)}${compWord} . You Win 🔥`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 500);
}

function lose(userChoice, computerChoice){
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${userWord} loses to ${convertToWord(computerChoice)}${compWord} . You Lost... 💩`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 500);
}

function draw(userChoice, computerChoice){
  result_p.innerHTML = `${convertToWord(userChoice)}${userWord} equals to ${convertToWord(computerChoice)}${compWord} . It's a Draw! 🐱`;
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(() => document.getElementById(userChoice).classList.remove("gray-glow"), 500);
}

function game(userChoice){
  let computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "ps":
    case "rp":
      lose(userChoice, computerChoice);
      break;
    case "ss":
    case "rr":
    case "pp":
      draw(userChoice, computerChoice);
      break;
  }
}

function main(){
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissor_div.addEventListener('click', () => game("s"));
}

main();

// TODO: write guess word game with unit testing
