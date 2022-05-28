let userScore=0;
let computerScore=0;

const userScore_span=document.getElementById('user-score');
const comupterScore_span=document.getElementById('comp-score');
const resultText_p=document.getElementById('result__text');
const roundResult_p=document.getElementById('round__result');
const rock_div=document.getElementById('rock');
const paper_div=document.getElementById('paper');
const scissors_div=document.getElementById('scissors');

rock_div.onclick = (e) => {
  let result = startGame ('rock');
  result_text();
  resultStlye(result,rock_div);
}

paper_div.onclick = (e) => {
  let result = startGame ('paper');
  result_text();
  resultStlye(result,paper_div);
}

scissors_div.onclick = (e) => {
  let result = startGame ('scissors');
  result_text();
  resultStlye(result,scissors_div);
}

function startGame(userChoice){
 let compChoice= computerChoice();

 if(userChoice===compChoice){
   resultText_p.textContent="draw";
   return 'draw';
 }

 else if((userChoice==="rock" && computerChoice==="scissors")||
 (userChoice==="paper" && computerChoice==="rock")||
(userChoice==="scissors" && computerChoice==="paper")){
   userScore++;
   userScore_span.textContent=userScore;
   resultText_p.textContent="User won!";
   return 'win';
 }

 else if((userChoice==="scissors" && computerChoice==="rock")||
 (userChoice==="rock" && computerChoice==="paper")||
(userChoice==="paper" && computerChoice==="scissors")){
   computerScore++;
   computerScore_span.textContent=computerScore;
   resultText_p.textContent="Computer won!";
   return 'loss';
 }
}

function computerChoice(){
  let choice=["rock","paper","scissors"];
  // genertae ramdom number to create index
  let computerChoice=Math.floor(Math.random()*3);
  return choice[computerChoice];
}

function result_text(){
  if(userScore >=10){
    roundResult_p.textContent="u won the prevouis round";
    userScore=0;
    computerScore=0;
  }
  else if(computerScore>=10){
     roundResult_p.textContent="u lost the prevouis round";
    userScore=0;
    computerScore=0;
  }
  setTimeout(() =>{ roundResult_p.textContent=""},5000);
}

function resultStlye(result, e){
  if(result==="win"){
    e.classList.add("win");
    setTimeout(()=>{e.classList.remove("win")},1000);
  }
  else if(result==="draw"){
     e.classList.add("draw");
    setTimeout(()=>{e.classList.remove("draw")},1000);
  }
  else {
    e.classList.add("loss");
    setTimeout(()=>{e.classList.remove("loss")},1000);
  }
}
