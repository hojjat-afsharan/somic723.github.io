let userScore = 0;
let computerScore = 0;
const glowTimeout = 300;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scorebored_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
  if(letter === 'r') return "Rock";
  if(letter === 'p') return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} <b>beats</b> ${convertToWord(computerChoice)}${smallCompWord} . You Win! 🔥`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), glowTimeout);
}

function lose(userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} . You Lost... 💩`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), glowTimeout);
}

function draw(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals to ${convertToWord(computerChoice)}${smallCompWord} . It's a draw.`;
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), glowTimeout);
}

function game(userChoice){
    //get computerChoice
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
        break;

      case "ps":
      case "sr":
      case "rp":
        lose(userChoice, computerChoice);
        break;

      case "rr":
      case "pp":
      case "ss":
        draw(userChoice, computerChoice);
        break;
    }
}

function main(){
    rock_div.addEventListener('click',() => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();
