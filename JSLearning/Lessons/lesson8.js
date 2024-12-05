//Declarative Function

function helloOne(){
    console.log("Hello one")
}
helloOne()


//Anoymus function
var helloTwo = function(){
    console.log("Hello two")
}
helloTwo()

//ES6 function syntax or arrow function
var helloThree = () =>{
    console.log("Hello Three")
}
helloThree()

//Function with arguments
function printName(name, lastname){
console.log(name+ ' ' +lastname)
}
printName('thanapon','sarasap')


//Function with return
function multiplyByTwo(number){
    var result = number *2
    return result
}

var myResult =multiplyByTwo(2)
console.log(myResult)

//import function
import {printAge } from '../helpers/printHelper.js'
printAge(5)

//import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(10)