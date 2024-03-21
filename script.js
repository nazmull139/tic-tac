let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new-game");


let turnO = true;
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) =>{

 box.addEventListener("click",() =>{
    console.log("Box is clicked");
    if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    gameOn();
 })

})

let newgala = ()=>{
    
        turnO=true;
        enableBox();
       
        msg.innerText="";
   
}

let disableBox = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
let enableBox = () =>{
    for(let box of boxes){
        box.disabled= false;
         box.innerText="" ;
    } 
   
}
let winnerMsg =(winner) =>{
    msg.innerText=`Congratulations Winner IS ${winner}`;
}
let gameOn= ()=>{


    for(let pattern of winPattern){
  let post1 = boxes[pattern[0]].innerText;
  let post2 = boxes[pattern[1]].innerText;
  let post3 = boxes[pattern[2]].innerText;
   //console.log(`pattern is ${post1}`);
    //console.log(pattern[0],pattern[1],pattern[2]);

if(post1 !="" && post2!="" && post3!=""){
    if(post1===post2 && post2===post3){
             
          console.log("Winner",post1);
          disableBox();
          winnerMsg(post1);
    }
    
    }
   //console.log(`pattern is ${ post1,post2,post3}`);
}
}
newGame.addEventListener("click",newgala);