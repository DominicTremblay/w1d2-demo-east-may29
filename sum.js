// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// extract the command-line arguments
const arguments = process.argv.slice(2);
console.log("arguments:", arguments);

// Edge case: We need at least 2 arguments.

// iterate over the arguments
// for loop? 
// c-style
// for (let i=0; i< arguments.length; i++) {

//   const argument = arguments[i];
//   console.log("i", i, "value", arguments[i])
// }

let total = 0;

for (let argument of arguments) {
  // add each argument to the sum
  total += Number(argument); // typecasting
  console.log("arg:", argument, "type of arg:", typeof Number(argument), "Total:", total);
}


// Edge case: If the argument is not a whole number, skip it.
// Edge case: If any argument is not a number, output an error message.

// print out the sum
console.log("Total:", total);