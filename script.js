const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");
const message = document.getElementById("message");
const PlayerScore = document.getElementById("Score");
const ComputerScore = document.getElementById("ComputerScore");
const themeToggle = document.getElementById("theme-toggle");

let computerChoice;
let playerChoice;
let score = 0;
let computerScore = 0;

// Initialize score displays
PlayerScore.textContent = score;
ComputerScore.textContent = computerScore;

// Theme Toggle Logic
function setTheme(theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

// Check saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme);
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const newTheme = isLight ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

Rock.addEventListener("click", () => {
  playerChoice = "Rock";
  generateRandomNumber();
  showResult();
});
Paper.addEventListener("click", () => {
  playerChoice = "Paper";
  generateRandomNumber();
  showResult();
});
Scissors.addEventListener("click", () => {
  playerChoice = "Scissors";
  generateRandomNumber();
  showResult();
});

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    case 3:
      computerChoice = "Scissors";
  }
}

function showResult() {
    
    if(computerChoice === playerChoice)
        message.textContent = "It's a Draw"

    else if((computerChoice ==='Paper' && playerChoice === 'Rock') || (computerChoice === 'Rock' && playerChoice ==="Scissors") || (computerChoice === 'Scissors' && playerChoice ==="Paper"))
    {
        computerScore++
        message.textContent = "Computer Won!! Sorry"
    }
    else
    {
        score++
        message.textContent = "You Won!! Congrats"
    }


  PlayerScore.textContent = score;
  ComputerScore.textContent = computerScore;
}
