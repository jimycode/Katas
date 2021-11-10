/* Create a function named sumLargestNumbers 
that will receive an array of numbers and return 
the sum of the two largest numbers in that array. */

const sumLargestNumbers = function(data) {
let firstLarge = 0;
let secondLarge= 0;

for (let i =0; i<data.length; i++) {
  if (data[i]>firstLarge) {
    secondLarge = firstLarge;
    firstLarge=data[i];
  
  }
}
  return firstLarge+secondLarge;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));