//loops

//console.log("Hello World")

//statement1; start 
//statement2; stop 
//statement3; step
//for (statement1;statement2;statement3;)


//for loop (for i loop)

for (let i=0; i<5;i++){
    console.log("Hello World "+ i)
}


var cars =["BMW","Toyota","Tesala"]
//for of loop
for (let car of cars){
    console.log(car)
    if(car=="Toyota"){
        break
    }
}

// ES6 syntax for each loop
cars.forEach(car=> {
    console.log(car)
})