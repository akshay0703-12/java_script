// // query selector (to select any varible,id or class)

// let heading = documment.querySelector('h1');

// //classlist property (to add a class to any or remmove element)
// heading.classList.add('green');

// //navigatiom
// heading.parentElement;

// heading.childElementCount;

// //EVENTS

// let btns = document.querySelectorAll("button");


// for (btn of btns) {
//     // btn.onclick = sayhello();
//     // btn.onmouseenter = function(){
//     //     console.log("u entrerd a button");
//     // }
//     // console.dir(btn);

//     btn.addEventListners("click", sayhello);
//     btn.addEventListners("dblclick", function(){
//         console.log("u doubledcliked");
//     });
// }

// function sayhello() {
//     alert("hello!");
// }

let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h3= document.querySelector("h3");
    let randomcolor =  getrandomcolor();
    h3.innerText = randomcolor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomcolor;

    console.log("color generated");
});

function getrandomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb (${red}, ${green}, ${blue})`;
    return color;
}

// THIS KEYWORD IN EVENT LISTNER
function colorchange(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

let p= document.querySelector("p");
p.addEventListener("click",colorchange);

// KEYBORD EVENTS   --- IT HAS 2 MAIN COMPONENTS : CODE  AND KEY 

let inp = document.querySelector("input");

inp.addEventListener("keydown",function(event){
    console.log("key =",event.key);
    console.log("code =",event.code);//ArrowUp,arrowdown,arrowleft,arrowright

    if(event.code == "ArrowUp"){
        console.log("characteer moves forward");
    }
});

// FORM EVENTS

let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();//prevents from doing the default action here doesnt go to google url
    
    let user = document.querySelector("#user");//this.elements[0];
    let pass = this.elements[1];//another way of selecting elements

    console.log(user.value);
    console.log(pass.value);

    alert("form submitted");

});