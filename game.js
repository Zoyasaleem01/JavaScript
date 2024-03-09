let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");

choices.forEach((choice)=>
{
    choice.addEventListener("click" ,()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
}); 


const generatecomputerchoice= ()=>{
  const options=["rock" , "paper", "scissor"];
  const rndidx=Math.floor(Math.random()*3);
  return options[rndidx];

};


const playgame=(userchoice)=>{
  console.log("user choice =" , userchoice)
  //generate computer choice 
  const cmptChoice=generatecomputerchoice ();
  console.log("computer choice =" , cmptChoice)
  if(userchoice==cmptChoice){
      drawgame()
  }
  else
  {
    let userwin=true;
    if(userchoice=="rock" )
    {
      userwin=cmptChoice =="paper"?false: true;
    }  
    else if(userchoice=="paper")
    {
      userwin=cmptChoice =="scissor"?false: true;
    }
    else(userchoice=="scissor")
    {
      userwin=cmptChoice =="rock"?false: true;
    }   
   showwinner(userwin , userchoice ,cmptChoice);
  }
  };

  
const drawgame=()=>{
  msg.innerText="Game Was Draw, Play again";
  msg.style.backgroundColor=" #081b31"
}


  const msg=document.querySelector("#msg");
 
const user=document.querySelector("#user-score")
const computer=document.querySelector("#computer-score")


  const showwinner=(userwin , userchoice , cmptChoice)=>{
    if (userwin){
   userscore++;
   user.innerText=userscore;
    msg.innerText=`You Win! Your ${userchoice} beats ${cmptChoice}`;
    msg.style.backgroundColor="green";
    }
    else{
       computerscore++;
       computer.innerText=computerscore
        msg.innerText=`You Lost ${cmptChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}



