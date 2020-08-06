var testArray = [10, 20, 30, 40, 50, 60];

// console.log(testArray);
// console.log(testArray.fill(0));
// console.log(testArray.fill("h"));
console.log(testArray.fill("ha", 2, 4));

const myNumber = [23, 67, 10, 55, 67, 34, 478];
// const result = myNumber.filter((num) => num != 55);
const result = myNumber.filter((num) => num > 55);
console.log(result);
