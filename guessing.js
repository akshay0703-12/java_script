const max = prompt("enter the max range within which u want to guess the no:");

const random = Math.floor(Math.random()*max) + 1;

let guess = prompt("guess the number");

while(true){
    if((random != guess)&& (guess!= "quit")){
        console.log("wrong guess!!!try again");
        guess = prompt("wrong guess!guess the number");
    }
    else if(guess == "quit"){
        alert("you are quitting");
        break;
    }
    else if(guess == random){
        console.log("congrats!!1");
        alert("congrats!!");
        break;
    }
}