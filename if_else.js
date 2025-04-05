// let age = 13;

// if(age>=30){
//     console.log("you can get married");
// }
// else if(age>=18){
//     console.log("you can vote");
// }
// else if(age>=10){
//     console.log("you cannot vote");
// }
// else{
//     console.log("you are minor");
// }
 let size = "M";

 if(size=='L'){
    console.log("price is 250");
 }
 else if(size=='M'){
    console.log("price is 200");
 }
 else if(size=='S'){
    console.log("price is 100");
 }
 else{
    console.log("na");
 }

//  ############## NESTED ID ELSE ##############3

//&& --- LOGICAL AND OPERATOR(true only if both true)
//

let marks = 78;

if(marks>=35 && marks <=80){
   console.log("you are pass");
      if(marks>80){
         console.log("0");
      }
      else{
         console.log("A++");
      }
}
else{
   console.log("you are fail");
}

//################ SWITCH CASE ###############333

let num = 2
switch(num){
   case 1 :
      console.log("month belongs to 1st quater of jan to apr")

   break;

   case 2 :
      console.log("month belongs to 2st quater of may to aug")
   break;

   case 3 : 
      console.log("month belongs to 3st quater of sep to dec")
   break;

   default : console.log("you entered wrong number.")
}

//################################ practice eg##################
// let string=prompt("enter string :");

// if((string[0]=='a' || string[0]== 'A') && (string.length > 5 )){
//    console.log("golden");
// }
// else{
//    console.log(" not golden");
// }