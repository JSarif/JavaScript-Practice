/*

1.
Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

You can test your function when you’re ready by passing in the years array or by making your own array of years!

*/

// create a function to pass through 
const checkYears = (year1, year2) => year1 < year2;

// Use .sort() and pass checkYears as the callbackFn so it knows how to sort
const sortYears = arr => {
  return arr.sort(checkYears);
};