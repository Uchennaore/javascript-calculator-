console.log("Please enter 2 valid numbers and an operation in this calculator")
const prompt = require('prompt-sync')();

let number1 = parseFloat(prompt("Enter first number:"));
let number2 = parseFloat(prompt("Enter second number:"));
let operation = prompt("Enter operation:( *, +, -, /):")

 if(operation == "*"){
    console.log(number1 *  number2)
 }  else if(operation == "+"){
    console.log(number1 +  number2)
 }  else if(operation == "-"){
    console.log(number1 -  number2)
 }  else if(operation == "/"){
    console.log(number1 /  number2)
 }
//function calculator(number1, number2, operation) {
//    switch (operation) {
//        case "+":
//            alert(number1 + number2)
//            break;
//        case "-":
//            alert(number1 - number2)
//            break;
//       case "*":
//            alert(number1 * number2)
//            break;
//        case "/":
//            alert(number1 / number2)
//           break;
//        default:
//            return 'Please enter 2 valid numbers and an operation in this calculator'
//    }
//} 

