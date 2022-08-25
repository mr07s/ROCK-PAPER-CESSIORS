
// let fruits=['banana','appel','pair','eta'];
// const randomfruit =(fruits)=>{

// let index=Math.floor(Math.random()*fruits.length);
// console.log(fruits[index]);


// }
// randomfruit(fruits);

/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'


const totalscore ={playerscore:0,computerscore:0};


function getComputerChoice() {
   
    let elements=["Rock","Paper","Scissors"];
    let index =Math.floor(Math.random()*elements.length);
     let computerchoice=elements[index];
return computerchoice;
 // let elements =document.querySelectorAll('.rpsButton');
   //  let computerchoice=elements[index].innerText;
    //    return JSON.stringify(computerchoice);
}





// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score ;
  

  // All situations where human draws, set `score` to 0
  if(computerChoice==playerChoice){
    score =0;
  }


  // All situations where human wins, set `score` to 1
  else if(computerChoice=="Scissors"&&playerChoice=="Rock"){
    score =1;
  }
  else if(computerChoice=="Rock"&&playerChoice=="Paper"){
    score =1;
  }
  else if(computerChoice=="Pape"&&playerChoice=="Scissors"){
    score =1;
  }
  // make sure to use else ifs here
  
  
  // Otherwise human loses (aka set score to -1)
  
  else {
    score =-1;
  }

  // return score
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  let result =document.getElementById('result');

  // You should do result.innerText = 'You Lose!'
  switch(score){
   case -1:
    result.innerText=`You lose`;
   break;

   case 0:
    result.innerText=`Match is draw`;
   break;

   case 1:
    result.innerText=`You won`;
    break;

  }

  // Don't forget to grab the div with the 'result' id!
let playerScore =document.getElementById('player-score');
playerScore.innerText=`${score}`;

let hands =document.getElementById('hands');
hands.innerText=`CC ${computerChoice} vs p1 ${playerChoice}`;





}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  
let computerchoice =getComputerChoice();
let scor=getResult(playerChoice.value,computerchoice);
showResult(scor,playerChoice.value,computerchoice)
if(scor<0){

    totalscore['computerscore']+=(-scor);
}
else{

    totalscore['playerscore']+=scor;
}
console.log(totalscore);
let tt =document.getElementById('totalscore');
 let totalscorel =JSON.stringify(totalscore);
tt.innerText=`${totalscorel}`;



}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  let rpsButtons =document.querySelectorAll('.rpsButton');
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton)
  })
// rpsButtons[0].onclick =()=>onClickRPS(rpsButtons[0]);

  // Add a click listener to the end game button that runs the endGame() function on click
  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()



let endgame =document.getElementById('endGameButton');
endgame.onclick=()=>endGame();







  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  
let playerScore = document.getElementById('player-score');
let hands =document.getElementById('hands');
 let result=document.getElementById('result');

 playerScore.innerText=" ";
 hands.innerText=` `;
 result.innerText=` `;


}

playGame();