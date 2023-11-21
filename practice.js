//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>PART 1: MATH PROBLEMS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


// TO-DO Check if all numbers are divisible by 5. Cache the result in a variable.
 const areDivisibleByFive = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
 console.log(`The statement "${n1}, ${n2}, ${n3}, and ${n4} are divisible by 5" is  ${areDivisibleByFive}.`);


 

// TO-DO Check if the first number is larger than the last. Cache the result in a variable.
const isN1LargerThanN4 = n1 > n4;
console.log(`The statement "n1 is larger than n4" is ${isN1LargerThanN4}.`);
// TO-DO Accomplish the following arithmetic chain:
// TO-DO Subtract the first number from the second number.
const substractN1FromN2 = n2 - n1;
console.log(`When we substract n1 from n2 we get "${substractN1FromN2}".`);
// TO-DO Multiply the result by the third number.
const resultBythree = substractN1FromN2 * n3;
console.log(`If we multiply the result above by ${n3} the result in the previous line is "${resultBythree}".`);
// TO-DO Find the remainder of dividing the result by the fourth number.
const remainder = resultBythree % n4;
console.log(`The remainder of dividing the result in the previous line by n4 is "${remainder}".`);
// TO-DO Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

// I changed the comparison operator (>) for (<) to make the result of the comparison to be true so the negation operator(!) is not needed in other comparisons
const isBelow25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

const isValid2 = isSum50 && isTwoOdd && isBelow25 && isUnique;

console.log(`The four numbers are valid according to the provided criteria: ${isValid2}.`);





//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>PART 2: PRACTICAL MATH <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Questions:
//How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?
//Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?


const totalDistance = 1500;

// Calculate the amount of gallons needed if travelling at an average of 55 mph
const numberGallonsNeededIfTravel55mph = totalDistance / 30;
console.log(`The amount of gallons needed if travelling at an average of 55 is: ${numberGallonsNeededIfTravel55mph}`);

// Calculate the amount of gallons needed if travelling at an average of 60 mph
const numberGallonsNeededIfTravel60mph = totalDistance / 28;
console.log(`The amount of gallons needed if travelling at an average of 60 is: ${numberGallonsNeededIfTravel60mph}`);

// Calculate the amount of gallons needed if travelling at an average of 75 mph
const numberGallonsNeededIfTravel75mph = totalDistance / 23;
console.log(`The amount of gallons needed if travelling at an average of 55 is: ${numberGallonsNeededIfTravel75mph}`);
