'use strict';


// const ele= document.querySelector(".message")

// console.log(ele.textContent);//


// document.querySelector(".message").textContent="correct  number! "

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent=30

// //incase of a textbox/input field

// /// 
// document.querySelector(".guess").value=223 ///  to set the value on behalf of java scirpt

// console.log(document.querySelector(".guess").value); 





// // handling the click event



//selecting the button element

// document.querySelector('.check').addEventListener('click',function(){

//  const gues=Number(document.querySelector('.guess').value);
// //  console.log(typeof gues)
// if(!gues){
//     document.querySelector('.message').textContent="please input a number"
// }
// else
// {
//     document.querySelector('.message').textContent="Start guessing..."
// }
// });

let number = Math.floor((Math.random() * 20) + 1);
  console.log( number)      ///got a random number 

let score=20;
let highscore=0;


 document.querySelector(".check").addEventListener('click',function(){
   
    const gues=Number(document.querySelector('.guess').value);
    console.log(gues)


 if(!gues){
    document.querySelector('.message').textContent="please enter a number"
    document.querySelector('.guess').style.backgroundColor='red';
}
else if(gues===number)
{
  
    document.querySelector('.message').textContent= "Hurraay!!! you won"
    document.querySelector('.number').textContent= gues;


    document.querySelector('body').style.backgroundColor='#60b347'
    document.querySelector('.number').style.width='30rem';
//    highscore=score;
    
    if(highscore> score)
    {
        document.querySelector('.highscore').textContent= highscore;
    }
    else{
        document.querySelector('.highscore').textContent= score;
    }

}
else{

    if(gues<number){

        score--;
        document.querySelector('.score').textContent= score
        console.log(score)
        document.querySelector('.message').textContent= "tooo low! ";
       


    }
    else

    {   
        score--;
        document.querySelector('.score').textContent=score ;
        document.querySelector('.message').textContent= "ooops! tooo high ";
        
    }
    // document.querySelector('.message').textContent= "wrong number "
}



 });

 document.querySelector(".again").addEventListener('click',function() {

    score=20;
    document.querySelector('.score').textContent= 20;
    number = Math.floor((Math.random() * 20) + 1);
  //console.log( number)  ;
  document.querySelector('.number').textContent= "?";
  
  
 })