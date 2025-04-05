// ######################  CALL STACKING  #########################

function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();

// ############  PROMISE, THEN(), CATCH() #################

function save(data){
    return new Promise((resolve , reject) => {
        let internetspeed = Math.floor(Math.random()*10) +1;
        if (internetspeed > 4){
            console.log("succes: data saved");
        }
        else {
            reject("failure : weak connection");
        }
    });
}

save("apna college")
.then(()=>{
    console.log("data1 saved");
    return save("akshay");
})

// PROMISE CHAINING
// .then(()=> {
//     console.log("data2 saved");
// })


.catch(()=>{
    console.log("promise was rejected");
});


// ######## async() , await() function ##########
async function demo() {// shortcut for promise function

    await console.log("1");//waits till the above executes
    await console.log("2");
    await console.log("3");
}