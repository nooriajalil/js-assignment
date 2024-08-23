// q1
// var firstName = prompt("Enter your first name ")
// var lastName = prompt("Enter your last name ")

// var result = firstName + lastName
// alert("hellow " + result)

// q2
// var favouriteMobile = prompt("Enter your favourite mobile phone")
// var lenght = favouriteMobile.length
// alert(lenght)

// q3

// var country = "pakistani";
// var country2 = country.indexOf("n");
// document.write(country2 + "<br>");

// // q4

// var Greet = "Hello World";
// var result2 = Greet.lastIndexOf("l");
// document.write(result2);

// // q5

// var Name = "pakistani";
// var result3 = Name.charAt(3);
// console.log(result3);

// qno7

// var city = "hyderabad"
// var city1 = city.replace("hyderabad","Islamabad")
// console.log(city1);


// // qno8

// var text = "Ali and Sami are best friends. They play cricket and football together"
// var text2 = text.replace("and" , "&")
// console.log(text2);

// // qno9

// var userInput = "peanuts"
// var upperCase = userInput.toUpperCase();
// console.log(upperCase);

// // qno10

// var input = "j"
// var title = input.toUpperCase();

// console.log(title + "avascript");

// qno11
// var num = 35.36;
// var numStr = num.toString();
// var result = numStr.replace(".", "");
// document.getElementById("result").textContent = result;

// // qno12
// var country = "pakistan"
// var result  = country.charAt(7)
// console.log(result);

// // qno13

// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt("Enter a item to search")

// var itemFound = false
// for (var i = 0; i < A.length; i++) {

//     if(userInput==A[i]){
//         itemFound = true
//         break;
//     }
    
    
// }


// if(itemFound){
//     alert(userInput  + "is available")

// }
// else{
//     alert(userInput  + "is not available")
// }

// // qno14
// var num4 = "472"
// console.log( typeof num4);
// var num5 = 472
// console.log(typeof num5);

// qno15
// var name1 = prompt("enter your name")
// var first = "@"
// if(name1 === first){
//     console.log("mmmm")
// }

// qno16
// var university = "university of karachi"
// var a = university.split("")



//     for (let i = 0; i < a.length; i++) {
//         console.log(university[i]);
//     }























// chapter 2

// qno1
var num5 = 3.45214
console.log(Math.round(num5));
console.log(Math.floor(num5));
console.log(Math.ceil(num5));


// qno2
var num6 = -2.673
console.log(Math.round(num6));
console.log(Math.floor(num6));
console.log(Math.ceil(num6));

// qno3
var a = Math.abs(-4)
console.log(a);

// qno4
var diceRoll = Math.floor( Math.random() * 4 ) +1;
console.log('You rolled a ' + diceRoll);;


var diceRoll2 = Math.floor( Math.random() * 6 ) +1;
console.log('You rolled a ' + diceRoll2);;


// qno5
let randomNumber = Math.floor(Math.random() * 2)


if (randomNumber <= 0)
  console.log("Heads")
else 
  console.log("Tails")

//   qno6
var secretNumber = Math.floor(Math.random() * 10) + 1;
console.log(secretNumber);

var userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

if (userGuess === secretNumber) {
  alert("Congratulations! You guessed the correct number.");
} else {
  alert(`Sorry, the correct number was ${secretNumber}. Try again!`);
}


















