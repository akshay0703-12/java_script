// for(i=1;i<=5;i++){
//     console.log(i);
// }

// for(i=15;i>=1;i=i-2){
//     console.log(i);
// }

// for(i=2;i<=10;i=i+2){
//     console.log(i);
// }

// // ##########   NESTED LOOPS  #######333

// for(let i=1;i<=3;i++){
//     console.log(`outer loop ${i}`);

//         for(let j=1;j<=3;j++){
//             console.log(i)
//         }
// }

// // // ##########   WHILE LOOPS  #######333

// let i = 5;
//  while(i>=1){
//     console.log(i);
//     i--
//  }


// // // ##########   FAVORATE MOVIE GUESS GAME  #######333

// const favmovie = "avengers";

// let guess = prompt("guess my favorate movie :");

// if(guess==favmovie){
//     console.log("congrates!");
// }
// else if(guess=="quit"){
//     console.log("you quit");
// }
// else{
//     while((guess != favmovie) && (guess != "quit")){
//         guess = prompt("wrong guess! try again :");
//     }
// }

// // // ##########   BREAK STATEMENT  #######333

// let i = 5;
//   while(i>=1){
//     if(i==3){
//         break;
//     }
//          console.log(i);
//          i--

// }

// // // ##########   FOR OF LOOPS  #######333

let nums = [[1,2,3],[4,5,6]];

//for(num of nums){
//console.log(num);}
for(i of nums){

    for(j of nums){
        console.log(j);
    }
}