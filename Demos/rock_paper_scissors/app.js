const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const resultText_p = document.getElementById('result__text');
const roundResult_p = document.getElementById('round__result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

let userScore = 0;
let computerScore = 0;

rock_div.onclick = (e) => {
    let result = startGame('rock');
    result_text();
    resultStyle(result, rock_div);
};
paper_div.onclick = (e) => {
    let result = startGame('paper');
    result_text();
    resultStyle(result, paper_div);
};
scissors_div.onclick = (e) => {
    let result = startGame('scissors');
    result_text();
    resultStyle(result, scissors_div);
};

function startGame(userChoice) {
    let compChoice = computerChoice();

    if(userChoice===compChoice) {
        resultText_p.textContent = "It's a draw!!";
        return 'draw';
    }
    else if((userChoice==='rock' && compChoice==='scissors') || (userChoice==='paper' && compChoice==='rock') || (userChoice==='s' && compChoice==='paper')) {
        userScore++;
        userScore_span.textContent = userScore;
        resultText_p.textContent = `Computer tried to block your ${userChoice} with ${compChoice} and failed... You Won 🔥🔥`;
        return 'win';
    }
    else if((userChoice==='rock' && compChoice==='paper') || (userChoice==='paper' && compChoice==='scissors') || (userChoice==='scissors' && compChoice==='rock')) {
        computerScore++;
        computerScore_span.textContent = computerScore;
        resultText_p.textContent = `Computer blocked your ${userChoice} with ${compChoice} successfully... You Lost 😭😭` ;
        return 'loss';
    }
}

function computerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random() * 3);
    return choice[computerChoice];
}

function result_text() {
    if(userScore >=10) {
        roundResult_p.textContent = "You won previous round";
        userScore = 0;
        computerScore = 0;
    } else if(computerScore >= 10) {
        roundResult_p.textContent = "You lost previous round";
        userScore = 0;
        computerScore = 0;
    }

    setTimeout(() => {roundResult_p.textContent= ""}, 5000)
}

function resultStyle(result, e) {
    if(result === 'win') {
        e.classList.add('win');
        setTimeout(() => {e.classList.remove(win)}, 1000);
    }
    else if (result === 'draw') {
        e.classList.add('draw');
        setTimeout(() => {e.classList.remove(draw)}, 1000);
    } else {
        e.classList.add('lost');
        setTimeout(() => {e.classList.remove(loss)}, 1000);
    }
}