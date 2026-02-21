let chooseUser=document.querySelector(".choose-user");
let chooseComputer=document.querySelector(".choose-computer");
let button=document.querySelector("button");
let resetButton=document.querySelector("#reset-btn");
let input=document.querySelector("input");
let wrongText=document.querySelector(".wrong");
let userScore=document.querySelector("#user-score");
let computerScore=document.querySelector("#computer-score");
let tieScore=document.querySelector("#tie-score");
let check=false

let userWins=0;
let computerWins=0;
let ties=0;

const arrTools=["rock","paper","scissors"];

resetButton.addEventListener("click",resetGame);
button.addEventListener("click",choose);
button.addEventListener("click",()=>input.value="");
input.addEventListener("keypress",(event)=>{
    if(event.key==="Enter"){
        event.preventDefault()
        choose()
        input.value=""
    }
})
function choose(){
    let randomTools=Math.floor(Math.random()*arrTools.length);
    chooseComputer.innerHTML=`computer choose is : ${arrTools[randomTools]}`;
    let ComputerValue=arrTools[randomTools];
    let inputValue=input.value.toLowerCase().trim();
    check=arrTools.includes(inputValue);
   if(check==true){
   chooseUser.innerHTML=`user choose is ${input.value}`;
   if(inputValue==ComputerValue){
    wrongText.innerHTML="it's a tie you can choose again";
    ties++;
    tieScore.innerHTML=ties;
   }
   else if(inputValue=="rock"){
  if(ComputerValue=="scissors"){
    wrongText.innerHTML="congratulations you won";
    userWins++;
    userScore.innerHTML=userWins;
  }
    else{
        wrongText.innerHTML="unfortunatley you lost!"
        computerWins++;
        computerScore.innerHTML=computerWins;
    }
  }
  else if(inputValue=="paper"){
    if(ComputerValue=="rock"){
        wrongText.innerHTML="congratulations you won";
        userWins++;
        userScore.innerHTML=userWins;
    }else{
        wrongText.innerHTML="unfortunatley you lost!";
        computerWins++;
        computerScore.innerHTML=computerWins;
    }
  }
  else if(inputValue=="scissors"){
    if(ComputerValue=="paper"){
        wrongText.innerHTML="congratulations you won";
        userWins++;
        userScore.innerHTML=userWins;
    }
    else{
        wrongText.innerHTML="unfortunatley you lost!";
        computerWins++;
        computerScore.innerHTML=computerWins;
    }
  }
   }
   else
   wrongText.innerHTML="this item is wrong please choice another item";
}

function resetGame(){
    userWins=0;
    computerWins=0;
    ties=0;
    userScore.innerHTML=userWins;
    computerScore.innerHTML=computerWins;
    tieScore.innerHTML=ties;
    chooseUser.innerHTML="choose user is:";
    chooseComputer.innerHTML="choose computer is:";
    wrongText.innerHTML="";
    input.value="";
}

