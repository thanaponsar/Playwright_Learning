//objects

var customer ={
    firstName: 'Thanapon',
    lastName: 'Sarasap',
    cars: ["BMW","Toyota","Tesala"]
}
console.log(customer)
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.cars[0])

// Dot noatation
customer.firstName="Panai"

// Bracket natation 
customer['lastName'] = "Sar"

console.log(customer['firstName'])
console.log(customer['lastName'])
console.log(`${customer.firstName} ${customer.lastName}`)


//arrays
var car =["BMW","Toyota","Tesala"]
console.log(car)
console.log(car[1])

car[1]="BYD"
console.log(car[1])

