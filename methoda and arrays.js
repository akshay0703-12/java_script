//ARRAYS
let fruits=["mango","pineapple","banana",345,34.45]
fruits[0]="straberry";
fruits[1][0]='t';

//NESTED ARRAY

let tic_tac_toe =[['X',null,'O'],[null,'O',null],['X',null,'O']];

//ARRAY METHODS
//PUSH (adds to end)
fruits.push("watermelon");

//POP(removes to end)
fruits.pop("watermelon");

// UNSHIFT(adds to start)
fruits.unshift(345);

//SHIFT(delets from start)
fruits.shift(345);

//SPLICE METHOD(removes /relaces /add elements in place) syntax----> .splice(start,deleteCount,additam0....additemN);
fruits.splice(1,2,"apple");


//CONCAT METHOD(merges 2 arrays)
let a = [1,2,3];
let b=[4,5,6];
let c= a.concat(b);
console.log(c);

//REVERSE METHODS(reverses an array)
d=a.reverse();
console.log(d);

//SORT METHOD(sorts in ascending order)
fruits.sort();


//################# METHODS  ################333

let password = "i love coding:    "
console.log(password);
       
// TRIM METHOD

password.trim();


//CONVERT TO UPPER NAD LOWER CASE

password.toUpperCase();
password.toLowerCase();


//INDEXOF METHOD(gives position of variable in string)

console.log(password.indexOf("o"));


//METHOD CHAINING(calling moe than one method at ones)
let newpass = password.trim().toUpperCase();
console.log(newpass);       


//SLICE METHOD(to cut it into desired part)
password.slice(0, 5);


//REPLACE METHOD(relpaces a selected value in a string with a new value)
password.replace('o','x')

//REPEAT METHOD
password.repeat(3);