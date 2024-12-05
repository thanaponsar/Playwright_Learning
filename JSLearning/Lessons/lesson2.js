//concadination and Interpolation 
var price = 50
var itemName ="Cup"
var massageToPrint = "the price for your "+itemName+" is "+price+" dollars" //concadination
var massageToPrint2 = `the price for your ${itemName} is ${price} dollars`  //Interpolation

console.log(massageToPrint)
console.log(massageToPrint2)