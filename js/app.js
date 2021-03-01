'use strict';
let count = 0;
let result = confirm(" Please Answer These Yes or No Questions ");
if(result){
    alert("You can Answer it y/n or yes/no");
    let q1 = prompt("Are The Human blood is originally blue in color but becomes red when combined with oxygen ?");
    if(q1.toLowerCase()=='no'||q1.toLowerCase()=='n'){
        alert("Your Answer is correct");
        count++;
        console.log(q1);
    }else if (q1.toLowerCase()=='yes'|| q1.toLowerCase()=='y')
    {
        alert("Your Answer is incorrect");
        console.log(q1);
    }
    let q2 = prompt("Dose Octopus has two hearts ?");
    if(q2.toLowerCase()=='no'||q2.toLowerCase()=='n'){
        alert("Your Answer is correct");
        count++;
        console.log(q2);
    }else if (q2.toLowerCase()=='yes'|| q2.toLowerCase()=='y')
    {
        alert("Your Answer is incorrect, octopus has three hearts");
        console.log(q2);
    }
   
    let q3 = prompt("Are The sky rains jewels in Jupiter ?");

    if(q3.toLowerCase()=='no'||q3.toLowerCase()=='n'){
        alert("Your Answer is incorrect");
        console.log(q3);
    }else if (q3.toLowerCase()=='yes'|| q3.toLowerCase()=='y')
    {
        alert("Your Answer is correct, our solar system is exceptional");
        count++;
        console.log(q3);
    }
  
    let q4 = prompt("Is One teaspoon of honey is the amount that 12 bees can produce throughout their lives ?");
    if(q4.toLowerCase()=='no'||q4.toLowerCase()=='n'){
        alert("Your Answer is incorrect");
        console.log(q4);
    }else if (q4.toLowerCase()=='yes'|| q4.toLowerCase()=='y')
    {
        alert("Your Answer is correct , imagine the number of bees that participated in the production of one honey box");
        count++;
        console.log(q4);
    }
    
    let q5 = prompt("You cannot breathe through your nose while you are speaking ?");
    if(q5.toLowerCase()=='no'||q5.toLowerCase()=='n'){
        alert("Your Answer is incorrect");
        console.log(q5);
    }else if (q5.toLowerCase()=='yes'|| q5.toLowerCase()=='y')
    {
        alert("Your Answer is correct");
        count++;
        console.log(q5);
    }
   let name = prompt("Tel us What is Your Name");

   alert("Thank You " + " " +name + " " + "For Taking the Quiz you answered  " + " " + count + " " + " Correct Questions" )
 }
 else {
     alert("You Cannot Take The Quiz")
 }


