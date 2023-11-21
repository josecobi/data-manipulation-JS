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


// TO-DO Check if the first number is larger than the last. Cache the result in a variable.
const isN1LargerThanN4 = n1 > n4;

// TO-DO Accomplish the following arithmetic chain:
// TO-DO Subtract the first number from the second number.
const substractN1FromN2 = n2 - n1;

// TO-DO Multiply the result by the third number.
const resultBythree = substractN1FromN2 * n3;

// TO-DO Find the remainder of dividing the result by the fourth number.
const remainder = resultBythree % n4;

// TO-DO Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

// I changed the comparison operator (>) for (<) to make the result of the comparison to be true so the negation operator(!) is not needed in other comparisons
const isBelow25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

const isValid2 = isSum50 && isTwoOdd && isBelow25 && isUnique;

console.log(`>>>>>>>>>>>>>>>>>>>>>>>>PART 1: MATH PROBLEMS<<<<<<<<<<<<<<<<<<<<<<<<<<
- The statement "${n1}, ${n2}, ${n3}, and ${n4} are divisible by 5" is  ${areDivisibleByFive}.
- The statement "${n1} is larger than ${n4}" is ${isN1LargerThanN4}.
- When we substract "${n1}" from "${n2}" we get "${substractN1FromN2}".
- If we multiply the result above by "${n3}" the result in the previous line is "${resultBythree}".
- The remainder of dividing the result (${resultBythree}) in the previous line by ${n4} is "${remainder}".
- The four numbers are valid according to the provided criteria: ${isValid2}.\n`);





//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>PART 2: PRACTICAL MATH <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Questions:
//How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?
//Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?


const totalDistance = 1500;
const pricePerGal = 3;
//NUMBER OF GALLONS NEEDED FOR THE TRIP
// Calculate the amount of gallons needed if travelling at an average of 55 mph
const numberGallonsNeededIfTravel55Mph = totalDistance / 30;


// Calculate the amount of gallons needed if travelling at an average of 60 mph
const numberGallonsNeededIfTravel60Mph = totalDistance / 28;


// Calculate the amount of gallons needed if travelling at an average of 75 mph
const numberGallonsNeededIfTravel75Mph = totalDistance / 23;
console.log(`>>>>>>>>>>>>>>>>>>>>>>>>PART 2: PRACTICAL MATH<<<<<<<<<<<<<<<<<<<<<<<<
AMOUNT OF GALLONS NEEDED:
The amount of gallons needed if travelling at an average of 55 is: ${numberGallonsNeededIfTravel55Mph}. The amount of gallons needed if travelling at an average of 60 is: ${numberGallonsNeededIfTravel60Mph}. The amount of gallons needed if travelling at an average of 75 is: ${numberGallonsNeededIfTravel75Mph}\n`);


// COST OF FUEL
// Calculate the cost of fuel if travelling at an average of 55 mph
const costIfTravel55Mph = numberGallonsNeededIfTravel55Mph * pricePerGal;


// Calculate the cost of fuel if travelling at an average of 60 mph
const costIfTravel60Mph = numberGallonsNeededIfTravel60Mph * pricePerGal;


// Calculate the cost of fuel if travelling at an average of 75 mph
const costIfTravel75Mph = numberGallonsNeededIfTravel75Mph * pricePerGal;
console.log(`COST OF FUEL:
The cost of fuel if I travel at an average of 55 mph is "\$${costIfTravel55Mph}". The cost of fuel if I travel at an average of 60 mph is "\$${costIfTravel60Mph}". The cost of fuel if I travel at an average of 75 mph is "\$${costIfTravel75Mph}". 

Considering the data above, my budget would not be enough if I travel at an average of 75 mph, the most fuel efficient speed, therefore the cheapest one, is 55 mph, and the fastest speed I can go without spending more than /$175 is 60 mph\n`);


//DURATION OF THE TRIP:
// Travelling at 55 mph
const durationTrip55Mph = (totalDistance / 55).toFixed(2);
// Travelling at 60 mph
const durationTrip60Mph = totalDistance / 60;
// Travelling at 75 mph
const durationTrip75Mph = totalDistance / 75;

console.log(`DURATION OF THE TRIP:
- At 55 mph: ${durationTrip55Mph} hrs.
- At 60 mph: ${durationTrip60Mph} hrs.
- At 75 mph: ${durationTrip75Mph} hrs.

We can conclude that the speed that makes more sense is 60mph because I can reach my destination faster while staying within my budget.`);
