let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const option=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];

};

const drawgame=()=>{
    msg.innerText="game was draw, play agin";
    msg.style.backgroundColor="black";
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userscorepara.innerText=userScore;
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    } else{
        compScore++;
        compscorepara.innerText=compScore;
        msg.innerText=`you lose! ${compchoice}beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame= (userchoice)=>{
  //generate computer choice
  const compchoice=gencompchoice();
  
  if(userchoice===compchoice){
   drawgame();
  } else{
    let userwin=true;
    if(userchoice==="rock"){
        //scissor,paper
        userwin=compchoice==="paper"?false:true;
    } else if(userchoice==="paper"){
        //rock,scissor
        userwin= compchoice==="scissor"?false:true;
    } else{
        //rock,paper
        userwin=compchoice==="rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
  }
  
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
    playgame(userchoice);
    })
})