'use strict';
let arrAnswer = [];
let count = 0;
let musics = ['clasic','jazz','rock&roll'];
let hints =['Using Piano','Using Clarinet','Using Guitar','it uses instruments','it has a bass'] ;
let Name = prompt("Tel us What is Your Name");
alert("hello "+Name+" lets start the guessing game");
let result = confirm(" Please Answer These Yes or No Questions ");

function checkAnswer (qvalue,cAnswer1,showUser){
    let answer;
    let cAnswer2;
    let incAnswer1;
    let incAnswer2;

    if (cAnswer1 == 'yes'){
        cAnswer2 = 'y';
        incAnswer1 = 'no';
        incAnswer2 = 'n';
    }else{
        cAnswer2 = 'n';
        incAnswer1 = 'yes';
        incAnswer2 = 'y';
    }
    let i = 0;
    while (i == 0){
        if (qvalue.toLowerCase() == cAnswer1 || qvalue.toLowerCase() == cAnswer2){
            alert("your answer is correct");
            console.log("your answer is correct");
           answer = 'yes';
            i = 1;
           
        }else if (qvalue.toLowerCase() == incAnswer1 || qvalue.toLowerCase() == incAnswer2){
            alert("your answer is incorrect the correct answer is " + showUser );
            console.log(" your answer is incorrect"); 
             answer = 'no';
             i = 1;  
                  
        }else {
          q1Name=prompt('please just answer with \n yes(Y) or no(N)');
        }
    }
   return  answer;           
}

    


if(result){
    let q1 = prompt("Are The Human blood is originally blue in color but becomes red when combined with oxygen ?");
    arrAnswer.push(checkAnswer(q1,'no','no'));
    
    let q2 = prompt("Dose Octopus has two hearts ?");
    arrAnswer.push(checkAnswer(q2,'no','3 hearts'));


    let q3 = prompt("Are The sky rains jewels in Jupiter ?");
    arrAnswer.push(checkAnswer(q3,'yes','the sky rains jewels in Jupiter'));

    
    let q4 = prompt("Is One teaspoon of honey is the amount that 12 bees can produce throughout their lives ?");
    arrAnswer.push(checkAnswer(q4,'yes','imagine the number of bees that participated in the production of one honey box'));
    
    let q5 = prompt("You cannot breath through your nose while you are speaking ?");
    arrAnswer.push(checkAnswer(q5,'yes','yes'));

   
    for (let i = 0;i < arrAnswer.length;i++){
        if (arrAnswer[i] == 'yes'){
            count++;
        }
    }




 let LuckyNumber = 7;
 
 for (let i = 0 ;i<=3;i++)
 {
     let q6 = parseInt(prompt("Guess My Lucky Number?"));
     if(q6==LuckyNumber)
     {
         alert("you  guessed yay good for you."); 
               count++;
         break;
         
     }
     else if (q6<LuckyNumber)
     {
        alert("TOO Low"); 
      
     }
     else{
        alert("TOO High"); 
     }

     
     if(i==3)
     alert("my lucky Number is "+LuckyNumber+ "\n "+ "Why didn't guessed"); 
 }
 
      
    for(let i = 0 ; i<=4 ;i++){
        let music = prompt("Guess My favforaiteb musics")
       if(music==musics[0]||music==musics[1]||music==musics[2]){
           alert("correct,How do you know")
           count++;
           break;
    }else if (music!==musics[0]||music!==musics[1]||music!==musics[2]){
       
        alert("There some hints "+hints[i]);
    }

    if(i==4)
    alert("My Favorite Musics is "+musics[0]+", "+musics[1]+", "+musics[2]+ "\n "+ "Why didn't guessed"); 
    }

   alert("Thank You " + " " + Name + " " + "For Taking the Quiz you answered  " + " " + count + " " + " Correct Questions" );
 




}
 

  else {
     alert("You Cannot Take The Quiz")
 }


