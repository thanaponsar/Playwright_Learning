//conditional statement

//if(condition){
    //exeute some code here
    
//} else {
    //exeute some code here

//}

//If hour beetween 6 and 12 print "Good Morning"
//If hour beetween 12 and 18 print "Good Afternoon"
//Otherwise: Good Evening

var hour =17

if(hour>=6 && hour <12){
    console.log('Good Morning')
} else if (hour>=12 && hour <18){
    console.log('Good Afternoon')
}else {
    console.log('Good Evening')
}


var ageIsMoreThanEighteen = false
var isUSCitizen=true

if (ageIsMoreThanEighteen && isUSCitizen ){
    console.log('Customer is eligible for DL')
}else {
    console.log('Customer is not eligible for DL')
}
    
