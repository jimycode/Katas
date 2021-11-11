const conditionalSum = function(values, condition) {
let isEven=0;
for (i=0; i<values.length; i++) {
if (values[i] %2 ===0 && condition === "even") {
   isEven = isEven + values[i];
} else if (values[i]%2 !== 0 && condition === "odd") {
  isEven = isEven + values[i];
}
}
return isEven
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"))
console.log(conditionalSum([], "odd")); 