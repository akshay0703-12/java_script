// ######### AARROW FUNCTION #######

const hello = () => {console.log("hello world");}

const mul = (a,b) => a*b;
const square = (a) => a*a;
const cube = (a) => a*a*a;

// ######### FUNCTION #######

function name(){
    console.log("akshay ");
    console.log(" thite");
}
name();

//---------------------------------

function rolldice(){
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
}
rolldice();

//functions with arguments

function print(name,age){
    console.log(`${name}'s age is ${age}.`);
}
print("akshay",23);


// ######### RETURN KEYWORD #######

function average(a,b,c){
    avg = (a+b+c)/3;

    return avg;
}

console.log(average(9,4,5));

// ######### FUNCTION EXPRESSION #######

// let greet = function(){
//     console.log("hello ji");
// }
// greet();

// function multigreet(func , count){
//     for(i=1;i<=count;i++){
//         func();
//     }
// }
// multigreet(greet,3);

function odd_even(request){
    if (request== "odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }
    else if(request == "even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    }
    else{
        console.log("wrong request");
    }
   
}

let request = "odd";
let func = odd_even(request);

//############ SHORTCUT OF WRITING FUNCTIONS ##########333

const calculator = {
    add(a,b){
        return a + b;
    },
    sub(a,b){
        return a - b;
    },
    mul(a,b){
        return a * b;
    },
};

//############ this keyword ##########333

const student = {
    name :"akshay",
    eng : 23,
    sci :45,
    mat :67,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.sci + this.mat)/3;
        return avg;
    }
};

//############ TRY-CATCH function ##########333

// console.log("hello");
// try{
//     console.log(a);
// }
// catch{
//     console.log("caught an eerror ");
// }
// console.log("hello2");

//############ SET TIMEOUT/ SET INTERVAL FUNCTON ########

console.log("hello");

setTimeout( () =>{
    console.log("hello world");
},4000);

// setInterval( () =>{
//     console.log("hello world");
// },2000);

console.log("hello2");