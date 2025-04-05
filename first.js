// // first js code
// console.log("akshay");

//ALERT
alert("this is an alert");

//PROMPT(takes input)
let rollno = prompt("enter your roolno :");
console.log(rollno);

//TYPES OF CONSOLE
console.log("akshay thite");
console.error("this is error");
console.warn("this is warning");

// //variables in js
// let name ="tonysatrk";
// let age =24;
// age = 57;

// const price = 2.56;

// isfollow =false;
// console.log(isfollow);
// console.log(age);
// console.log(price);

//objects literal in js
const student ={
    fullname :"akshay thite",
    age : 23,
    cgpa : 6.89,
    ispass  : true,
    city : "delhi"
};
console.log(student);
console.log(student.cgpa);

student["age"]=student["age"] + 2;
console.log(student.age);

student.city = "mumbai";//cahnges delhi to mumbai
student.gender = "male";//here we can assisgn and add a ner key grnder directly
student.marks =[23,43,45];//changes value of marks to array
delete student.age;//delets age key

sum = student.age + student.cgpa;
console.log(sum);

// ############# ARRAY OF OBJECTS   ##########
const nums2 =[
    {
            name :"af",
            grade : "a"
    },
    {
            name :"hy",
            grade : "a+"
    }
];

nums[1].grade = "b++";

    // ############# NESTED OBJECTS  ##########
    const nums ={
        ten:{
            name :"af",
            grade : "a"
        },
        twenty :{
                name :"hy",
                grade : "a+"
            }
        };
//operations in js
a = 20;
b = 7;

//addition  sum = a + b;
//substraction diff=a- b;
//multiplication mul = a* b;
// division div = a / b;

//modulo(remainder) 13 % 2 =1
rem = a % b;

//expotential(power operator)   2**3 =8
expo = a**b;
 
//assingment operators
// age = age + 1 >>>>>>> age +=1

//unary operator
//new1 = ++a; //pre-increment
//new2 = a++; //post-increment

console.log("the additon of a nd b is ",a + b,"units");
console.log('the additon of a nd b is ${a + b } units');

// MATH OBJECTS
//Math.abs(-12);gives absolute value of num
//Math.pow(2,6)gives power of 2 raised to 6 ie 64
//Math.floor(53.343)//rounds off

Math.random()//generates random math values
Math.floor(Math.random()*10) + 1;//genrates random num from 1 to 10

//to generate random num. between 20 and 30
Math.floor(Math.random()*10) + 21;

